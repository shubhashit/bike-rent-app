import { React } from 'react'
import Body from './components/body/Body';
import MainBookingPage from './components/booking/MainBookingPage';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/booking" element={<MainBookingPage></MainBookingPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
