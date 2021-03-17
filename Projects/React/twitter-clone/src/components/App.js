import './App.css';
import Tweet from './Tweet.js';
import Logo from './Logo.js';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <aside>
          <Logo size="50"/>
          <ul>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Join</a></li>
            <li><a href="#">Log in</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </aside>
        <main>
          <header className="header">
            <h1>Twitter clone</h1>
          </header>
          <h2>Top posts</h2>
          <Tweet 
          realname="Eesa Zahed" 
          username="eesazahed" 
          content="This is my tweet." 
          time="6:25 PM · Mar 16, 2021"
          likes="9354"
          comments="21"
          />  
          <Tweet 
          realname="Test" 
          username="debug_bot" 
          content="Checking for tests... Wow! This website works!" 
          time="11:59 PM · Mar 16, 2021"
          likes="0"
          comments="0"
          />           
          <Tweet 
          realname="Bot" 
          username="hi_im_a_new_guy" 
          content="Hi I just joined right now." 
          time="12:26 AM · Mar 17, 2021"
          likes="0"
          comments="0"
          />   
        </main>
      </div>
    </div>
  );
}

export default App;
