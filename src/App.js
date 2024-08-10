import portfolio from './pages/portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" exact Component={portfolio}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
