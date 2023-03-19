import './App.css';
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
    return (<Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>);
}

export default App;
