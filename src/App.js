import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Akademii from "./components/Akademii";
import Home from "./components/Home";
import ReactCalendar from "./components/ReactCalendar";
import Blog from "./components/Blog";
import Form from "./components/Form";
import EventSpace from "./components/EventsSpace";

function App() {
  const [ filterMenu, setFilterMenu ] = useState(true);
  const showFilterMenu = () => {
    setFilterMenu(!filterMenu);
  }
  return (
    <Router>
    <div className="App">
      <Header showFilterMenu={showFilterMenu}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/space-blog" component={() => <Blog filterMenu={filterMenu}/>} />
        <Route path="/form" component={Form} />
        <Route path="/akademii" component={Akademii} />
        <Route path="/kalendar" component={ReactCalendar} />
        <Route path="/prostor-za-nastani" component={EventSpace}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
