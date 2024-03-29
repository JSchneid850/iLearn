import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Cosc2100 from "./pages/Cosc2100";
import Cosc3810 from "./pages/Cosc3810";
import Cosc4920 from "./pages/Cosc4920";
import Assignment from "./components/Assignment";
import NewAssignment from "./pages/NewAssignment";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="Cosc2100" element={<Cosc2100 />} />
          <Route path="assignment/:id" element={<Assignment/>} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Terms" element={<Terms />} />
          
          <Route path="Cosc3810" element={<Cosc3810 />} />
          <Route path="Cosc4920" element={<Cosc4920 />} />
          <Route path="NewAssignment" element={<NewAssignment />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);