#[macro_use]
extern crate serde;

use ic_cdk::{query, update};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl, Vec as VecStructure,
};

use std::cell::RefCell;
mod mythic;
mod subscriber;
use mythic::Myth;
use subscriber::Subscriber;

type Memory = VirtualMemory<DefaultMemoryImpl>;

type IdCell = Cell<u64, Memory>;

thread_local! {

    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));



   static MythG: RefCell<BTreeMap< u64,Myth,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );

    static SUBS: RefCell<BTreeMap< u64,Subscriber,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )
    );
    static USER_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))), 0)
            .expect("Cannot create a  user counter")
    );
    static MYTH_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3))), 0)
            .expect("Cannot create a mythic  counter")
    );




}

#[update]
async fn publish_myth(content: String, title: String) -> Result<String, String> {
    let id = MYTH_ID_COUNTER.with(|counter| {
        let counter_value = *counter.borrow().get();
        let _ = counter.borrow_mut().set(counter_value + 1);
        counter_value
    });
    let mythic = Myth { content, title, id };

    match do_insert_mythic(&mythic, id) {
        Some(e) => Ok(String::from("Posted succesfully")),
        None => Ok(String::from("Posted succesfully")),
    }
}
#[update]
async fn delete_all_myths() -> Result<String, String> {
MythG.with(|myths| {
        let mut myths = myths.borrow_mut();
        let keys: Vec<u64> = myths.iter().map(|(k, _)| k).collect();
        for key in keys {
            myths.remove(&key);
        }
    });
    Ok(String::from("All myths deleted successfully"))
}

fn do_insert_myth(myth: &Myth, id: u64) -> Option<Myth> {
    MythG.with(|service| service.borrow_mut().insert(id, Myth.clone()))
}

#[query]
async fn get_myths() -> Vec<(u64, Myth)> {
    let myths: Vec<_> = MythG.with(|storage| storage.borrow().iter().collect());

    myths
}

#[query]
async fn get_single_myth(id: u64) -> Result<Myth, String> {
    match_get_myth(&id).ok_or_else(|| format!("Myth with id={} not found", id))
}

fn match_get_myth(id: &u64) -> Option<Myth> {
    MythG.with(|service| service.borrow().get(id))
}

#[derive(candid::CandidType, Deserialize, Serialize, Debug)]
enum Error {
    NotFound { msg: String },
}

ic_cdk::export_candid!();
