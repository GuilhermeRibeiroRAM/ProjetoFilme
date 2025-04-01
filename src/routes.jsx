import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Filme from './Pages/Filmes';
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}