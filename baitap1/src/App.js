import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, BrowserRoute } from "react-router-dom";
import Home from "./conponents/Home";
import Contact from "./conponents/Contact";
import About from "./conponents/About";
import User from "./conponents/User";
import Error404 from "./conponents/Error404";
import { useState } from "react";
import UserDetails from "./conponents/UseDetails";

function App() {
  const [user, setUser] = useState([
    { id: "001", name: "tuan anh", imail: "tuananh@gmail.com" },
    { id: "002", name: "tuan anh1", imail: "tuananh@gmail.com" },
    { id: "003", name: "tuan anh2", imail: "tuananh@gmail.com" },
    { id: "004", name: "tuan anh3", imail: "tuananh@gmail.com" },
    { id: "005", name: "tuan anh4", imail: "tuananh@gmail.com" },
    { id: "006", name: "tuan anh5", imail: "tuananh@gmail.com" },
    { id: "007", name: "tuan anh6", imail: "tuananh@gmail.com" },
    { id: "008", name: "tuan anh7", imail: "tuananh@gmail.com" },
  ]);
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/contact" element={<Contact />}>
            contact
          </Route>
          <Route path="/about" element={<About />}>
            about
          </Route>
          <Route path="/user" element={<User user={user} />}>
            user
          </Route>
          <Route path="/UseDetails" element={<UserDetails />}>
            user
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
