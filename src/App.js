import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
//import { Contact } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
