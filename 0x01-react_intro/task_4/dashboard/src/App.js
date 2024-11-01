import logo from "./Holberton Logo.jpg";
import "./App.css";
import { getFullYear } from "./utils";
import { getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button type="submit">OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
