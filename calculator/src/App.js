import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Calculator from './CalculatorComponent/Calc';
import calc from "./CalculatorComponent/Calc.css";
import "./Assests/css/bootstrap.css"
function App() {
  return (
    <div  className="app-container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculator/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
