import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Component } from "react";

import { connect } from "react-redux";
import VisitorInterface from "./components/visitor/VisitorInterface";
import AdminInterface from "./components/admin/AdminInterface";
import HomeVisitor from "./components/visitor/pages/HomeVisitor";
import AboutVisitor from "./components/visitor/pages/AboutVisitor";

class App extends Component {
  state = {
    x: 0,
  };


  render() {
    return (
      <div className="App">
      
        <Routes>
          <Route path="/" element={<VisitorInterface />}>
            <Route path="/about" element={<AboutVisitor />}></Route>

            <Route index element={<HomeVisitor />}></Route>
          </Route>

          <Route path="/admin" element={<AdminInterface />}></Route>
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    y: state.x,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => {
      dispatch({ type: "INCREMENT" });
    },
    dec: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
