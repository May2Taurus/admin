import {Route, Routes, useRoutes} from "react-router";

import Login from "./pages/login";
import Admin from "./pages/admin";

import routingTable from "./utils/routingTable";

import './App.css';

function App() {
    
    const elements = useRoutes(routingTable);
    
    return (
        <div className="App">
            {elements}
        </div>
    );
}

export default App;
