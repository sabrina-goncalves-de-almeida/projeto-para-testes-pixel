import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhaseSelection from "./pages/PhaseSelection";
import Phase1Page1 from "./pages/phases/phase1/Phase1Page1";
import Phase1Page2 from "./pages/phases/phase1/Phase1Page2";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/phaseselection" element={ <PhaseSelection /> }></Route>
                <Route path="/phase1screen1" element={ <Phase1Page1 />}></Route>
                <Route path="/phase1screen2" element={ <Phase1Page2 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
