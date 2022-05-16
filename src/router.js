import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router; 
