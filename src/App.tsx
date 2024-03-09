
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./Styles/main.scss"
import Home from "./Pages/Home"
import About from "./Pages/About"
import A_E from "./Pages/A_E";
import F_J from "./Pages/F_J";
import K_O from "./Pages/K_O";
import P_T from "./Pages/P_T";
import U_Z from "./Pages/U_Z";
import Contact from "./Pages/Contact";

function App() {
  return (
    < >
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aepage" element={<A_E />} />
          <Route path="/fjpage" element={<F_J />} />
          <Route path="/kopage" element={<K_O />} />
          <Route path="/ptpage" element={<P_T/>} />
          <Route path="/uzpage" element={<U_Z/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
