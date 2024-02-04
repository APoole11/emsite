import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./emLibrary.jpg')} className="App-logo" alt="Library" />
        <p className="App-title">
          Check out my links!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/roseyposeyreads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="https://www.tiktok.com/@roseyposeyreads?_t=8jbwECy9JHz&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a
          className="App-link"
          href="https://www.amazon.com/shop/influencer-367caba5?ref_=cm_sw_r_apin_aipsfshop_aipsfinfluencer-367caba5_FTVXSDXRREPRC1T6C598&language=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon
        </a>
        <a
          className="App-link"
          href="https://www.goodreads.com/user/show/39090901-emma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goodreads
        </a>
      </header>
    </div>
  );
}

export default App;
