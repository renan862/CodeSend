import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BulkSend from "../pages/BulkSend";


export default function Router() {
    return (
     <BrowserRouter>
     
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bulk-send" element={<BulkSend />} />
        </Routes>
     </BrowserRouter>
    )
}