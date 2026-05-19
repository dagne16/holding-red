import React from 'react';
import './App.css';

const App: React.FC = () => {

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/rw/app/saqpay/id6762447527', '_blank');
  };

  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.saqpay.xhahu', '_blank');
  };

  return (
    <div className="beijo-container">
      
      {/* Small Logo Top Left */}
      <div className="small-logo-container">
        <img 
          src="/logo-bg.png" 
          alt="SAQ PAY Logo" 
          className="small-logo-icon"
        />
      </div>
      
      {/* --- LEFT COLUMN: Content --- */}
      <div className="content-section">
        
        {/* Headline */}
        <h1 className="main-headline">
          Welcome to SAQ PAY <br />
        </h1>
        
        {/* Amharic Text - Styled */}
        <h2 className="amharic-text">በሳቅዎ ይክፈሉ</h2>

        {/* Blue Info Box */}
        <div className="info-box">
          <h3 className="info-box-title">Download the app now</h3>
          <p className="info-box-text">
          
          </p>
        </div>

        {/* Download Buttons */}
        <div className="download-section">
          <div className="store-buttons">
            
            {/* Google Play Button */}
            <button className="store-btn btn-box" onClick={handleGooglePlayClick}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="store-btn-img"
              />
            </button>

            {/* App Store Button */}
            <button className="store-btn btn-box" onClick={handleAppStoreClick}>
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="store-btn-img"
              />
            </button>

          </div>
        </div>

      </div>

      {/* --- RIGHT COLUMN: ANIMATED MOCKUPS --- */}
      <div className="mockup-section">
        <div className="phone-mockup phone-1">
          <img src="ui1.jpg" alt="App Mockup 1" />
        </div>
        <div className="phone-mockup phone-2" style={{ animationDelay: '1.5s' }}>
          <img src="Ui2.jpg" alt="App Mockup 2" />
        </div>
      </div>
      
    </div>
  );
};

export default App;