import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhaseSelection from "./pages/PhaseSelection";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/phaseselection" element={ <PhaseSelection /> }></Route>
                <Route path="/phase1-1" ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
