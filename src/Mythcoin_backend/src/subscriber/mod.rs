use std::borrow::Cow;

use candid::{Decode, Encode, Principal};
use ic_stable_structures::{BoundedStorable, Storable};

#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct Subscriber {
    pub principal: Principal,
    pub name: Option<String>,
    pub id: u64,
}
impl Subscriber {}

impl Storable for Subscriber {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Subscriber {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}
