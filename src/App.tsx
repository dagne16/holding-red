import React from 'react';
import './App.css';

const App: React.FC = () => {

  // Function to handle App Store click
  const handleAppStoreClick = () => {
    // Replace 'YOUR_APP_STORE_LINK' with your actual App Store URL
    window.open('https://play.google.com/store/apps/details?id=com.saqpay.xhahu', '_blank');
  };

  // Function to handle Google Play click
  const handleGooglePlayClick = () => {
    // Replace 'YOUR_PLAY_STORE_LINK' with your actual Google Play URL
    window.open('https://play.google.com/store/apps/details?id=com.saqpay.xhahu', '_blank');
  };

  return (
    
    <div className="beijo-container">
      <div className="small-logo-container">
          <img 
            src="/logo-bg.png" 
            alt="SAQ PAY Logo" 
            className="small-logo-icon"
          />
        </div>
      
      {/* --- LEFT COLUMN: Content --- */}
      <div className="content-section">
                {/* --- SMALL LOGO ICON (TOP LEFT) --- */}
        
        
        {/* Logo */}
        <div className="logo-area">
          <div className="logo-icon-placeholder">
            <span className="logo-text">SAQ PAY</span>
          </div>
        </div>
         {/* <div className="middle-image-section">
          <div className="image-wrapper">
            <img 
              src="/saq meda.png" 
              alt="App Screenshot Placeholder" 
              className="center-image"
            />
          </div>
        </div> */}

        {/* Headline */}
        <h1 className="main-headline">
          Welcome to SAQ MEDA, Your <br />
          <span className="highlight-blue">Trusted Partner</span>
        </h1>

        {/* Subheadline */}
        <p className="sub-text">
          At SAQ MEDA,
        </p>

        {/* Blue Info Box */}
        <div className="info-box">
          <h3 className="info-box-title">Why Choose SAQ MEDA?</h3>
          <p className="info-box-text">
           
          </p>
        </div>
                {/* --- MIDDLE IMAGE SECTION --- */}
       


        {/* Bottom CTA Text */}
        <div className="cta-text-area">
          <h3 className="cta-headline">Unlock Opportunities with SAQ MEDA Today!</h3>
          <p className="cta-sub">
           
          </p>
        </div>

        {/* Download Buttons */}
        <div className="download-section">
          <p className="download-label">Download the app now</p>
          <div className="store-buttons">
            
            {/* Google Play Button */}
                        {/* Google Play Button (Replaced with Image) */}
                        {/* Google Play Button - Using Official PNG Badge */}
                        {/* Google Play Button - Custom styled like the image */}
                        {/* Google Play Button - FIXED VISIBLE ICON */}
            <button className="store-btn google-play-custom" onClick={handleGooglePlayClick}>
              <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              style={{ height: '50px', width: 'auto' }}
            />
        </button>
          

            {/* App Store Button */}
            <button 
              className="store-btn app-store" 
              onClick={handleAppStoreClick}
              aria-label="Download on the App Store"
            >
              <div className="btn-content">
                <div className="apple-icon"></div>
                <div className="btn-text">
                  <span className="small-text">Download on the</span>
                  <span className="big-text">App Store</span>
                </div>
              </div>
            </button>

          </div>
        </div>

      </div>

      {/* --- RIGHT COLUMN: Mockups (Images) --- */}
              {/* --- RIGHT COLUMN: ANIMATED MOCKUPS --- */}
        <div className="mockup-section">
          <div className="phone-mockup phone-1">
            <img src="saq2.webp" alt="App Mockup 1" />
          </div>
          {/* ADD THIS STYLE PROP TO PHONE-2 */}
          <div className="phone-mockup phone-2" style={{ animationDelay: '1.5s' }}>
            <img src="saq meda.png" alt="App Mockup 2" />
          </div>
        </div>
    </div>
  );
};

export default App;