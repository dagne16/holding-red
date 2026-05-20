import React from 'react';
import './App.css';

const App: React.FC = () => {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/rw/app/saqpay/id6762447527', '_blank', 'noopener,noreferrer');
  };

  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.saqpay.xhahu', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <img src="/logo-bg.png" alt="SAQ PAY" className="navbar-logo" />
        <span className="navbar-brand">SAQ PAY</span>
      </nav>

      {/* ── Hero ── */}
      <main className="hero">

        {/* Left column */}
        <div className="hero-content">
          <span className="eyebrow">Mobile Payment App</span>

          <h1 className="headline">
            Pay with a{' '}
            <span className="headline-accent">Smile</span>
          </h1>

          <img
            src="/imagel.png"
            alt="SAQ PAY"
            className="hero-image"
          />

          <p className="subheadline">
            Fast, secure and effortless payments. Send money, pay bills,
            and shop — all in one tap.
          </p>

          <p className="amharic">በሳቅዎ ይክፈሉ</p>

          <div className="info-card">
            <p className="info-card-title">Download the app now</p>
          </div>

          <div className="store-buttons">
            <button
              className="store-btn"
              onClick={handleGooglePlayClick}
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="store-btn-img"
                draggable={false}
              />
            </button>

            <button
              className="store-btn"
              onClick={handleAppStoreClick}
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="store-btn-img"
                draggable={false}
              />
            </button>
          </div>
        </div>

        {/* Right column — phone mockups */}
        <div className="mockups">
          <div className="phone phone-left">
            <img src="ui1.jpg" alt="SAQ PAY interface" />
          </div>
          <div className="phone phone-right">
            <img src="Ui2.jpg" alt="SAQ PAY interface 2" />
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;