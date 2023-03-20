import './App.css';
import {Route, Routes} from "react-router-dom";
import About from "./main/containers/About";
import Home from "./main/containers/Home";
import React from 'react';
import ButtonAppBar from "./main/components/ButtonAppBar";

function App() {
    return (
        <React.Fragment>
            <ButtonAppBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </React.Fragment>);
}

export default App;
