import logo from './holbertonlogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} alt='logo' className='App-logo' />
        <h1 className='App-Header-Title'>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
