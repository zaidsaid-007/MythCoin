

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const tokenomicsData = {
    labels: ['Community', 'Development', 'Marketing', 'Reserve'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      },
    ],
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="Mythcoin Games" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#games">Games</a></li>
                <li className="nav-item"><a className="nav-link" href="#wallet">Wallet</a></li>
                <li className="nav-item"><a className="nav-link" href="#tokenomics">Tokenomics</a></li>
                <li className="nav-item"><a className="nav-link" href="#roadmap">Roadmap</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              </ul>
              <div className="social-icons ms-3">
                <a href="https://t.me/+63jbG-mWyxo3ZjM0" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href=" https://x.com/MythiCoin_x?t=Xl6ikI5wDg2QQqCzLTyTXg&s=09" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="hero text-center text-white d-flex flex-column justify-content-center align-items-center scroll-offset">
          <div className="container">
          <a className="logo d-flex" href="/">
              <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="Mythcoin Games" />
            </a>
            <h1>Welcome to <strong><i>Mythcoin</i></strong> Games</h1>
            <p>Play fun games, earn Mythcoin, and join our vibrant <a href="#community">community!</a></p>
            <a href="#games" className="btn btn-primary mt-3">Play Now</a>
          </div>
        </section>
        <section id="about" className="about scroll-offset">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <video src={`${process.env.PUBLIC_URL}/images/about.mp4`} type="video/mp4" width="1000px" height="500px" autoPlay loop />
              </div>
              <div className="col-md-6 text-center">
                <h2>About Mythcoin Games</h2>
                <p>Mythcoin Games is a revolutionary platform where you can play exciting games and earn cryptocurrency in the process. Our mission is to make gaming more rewarding and fun for everyone!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Games */}
        <section id="games" className="games scroll-offset">
          <div className="container text-center">
            <h2 className="mb-5">Featured Games</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card bg-dark text-white">
                  <img src={`${process.env.PUBLIC_URL}/images/game1.jpeg`} className="card-img-top" alt="Game 1" />
                  <div className="card-body">
                    <h3 className="card-title">Game 1</h3>
                    <p className="card-text">Fast and Furious</p>
                    <a href="#" className="btn btn-primary">Play</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card bg-dark text-white">
                  <img src={`${process.env.PUBLIC_URL}/images/game2.jpeg`} className="card-img-top" alt="Game 2" />
                  <div className="card-body">
                    <h3 className="card-title">Game 2</h3>
                    <p className="card-text">Call on Duty</p>
                    <a href="#" className="btn btn-primary">Play</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tokenomics */}

        <section id="tokenomics" className="tokenomics scroll-offset">
          <div className="container text-center">
            <h2>Tokenomics</h2>
            <div className="d-flex justify-content-center">
              <div style={{ width: '50%' }}>
                <Pie data={tokenomicsData} />
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li>Community: 40%</li>
              <li>Development: 30%</li>
              <li>Marketing: 20%</li>
              <li>Reserve: 10%</li>
            </ul>
          </div>
        </section>

        {/* <section id="wallet" className="wallet scroll-offset">
          <div className="container text-center">
            <h2>Wallet</h2>
            <p>Your Mythcoin Balance: <span id="mythcoin-balance">1000</span></p>
            <a href="#" className="btn btn-primary">Deposit</a>
            <a href="#" className="btn btn-primary">Withdraw</a>
          </div>
        </section> */}

        <section id="roadmap" className="roadmap scroll-offset">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={`${process.env.PUBLIC_URL}/images/roadmap.jpeg`} alt="Our Roadmap" className="img-fluid" />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <h2>Our Roadmap</h2>
                <p>Follow our exciting journey to the moon and beyond. Here's what's next for Mythcoin Games:</p>
                <ul className="list-unstyled">
                  <li>Q1 2024: Launch of Mythcoin Games platform</li>
                  <li>Q2 2024: Introduction of new games</li>
                  <li>Q3 2024: Mobile app release</li>
                  <li>Q4 2024: Partnership with other crypto projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="community scroll-offset">
          <div className="container text-center">
            <h2>Community</h2>
            <p>Join our community to connect with other Mythcoin players, share tips, and stay updated on the latest news and events.</p>
            <a href="#community" className="btn btn-primary">Join Now</a>
            <div class="community-links">
                  <a href="https://x.com/MythiCoin_x?t=TwaZLMFHZTogw8b0lgcqSg&s=09" target="_blank" className="community-link">
                    <img src={`${process.env.PUBLIC_URL}/images/twitter.jpeg`}  alt="X" class="social-logo"/>
                    Follow us on Twitter
                  </a>
                  <a href="#" target="_blank" className="community-link">
                    <img src={`${process.env.PUBLIC_URL}/images/tg.jpeg`} className="social-logo"/>
                    Join our Telegram
                  </a>
                  <a href="#" target="_blank" className="community-link">
                    <img src={`${process.env.PUBLIC_URL}/images/openchat.jpeg`} alt="OpenChat Logo" className="social-logo"/>
                    Connect on OpenChat
                  </a>
                </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container text-center">
          <p>&copy; 2024 Mythcoin Games. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://t.me/+63jbG-mWyxo3ZjM0" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href=" https://x.com/MythiCoin_x?t=Xl6ikI5wDg2QQqCzLTyTXg&s=09" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>

    {/* <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a> */}
    </div>
  );
}

export default App;
