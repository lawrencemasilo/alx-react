import './App.css';
import '../Login/Login.js';
import '../Footer/Footer.js';
import '../Header/Header.js';
import '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <>
      {<Notification />}
      <div className="App">
        {<Headers />}
        <div className="App-body">
          {<Login />}
        </div>
        <div className="App-footer">
          {<Footer />}
        </div>
      </div>
    </>
    
  );
}

export default App;
