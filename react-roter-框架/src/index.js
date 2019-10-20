import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import "./styles.css";

function Box1() {
  return <div className="box">注册</div>;
}

function Box2() {
  return <div className="box">登录</div>;
}
function Welcome() {
  return <div className="box">欢迎</div>;
}

function App() {
  return <div className="App">APP</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
      <div>
        <div>
        <Link to="/"><button>首页</button></Link> |
        <Link to="/login"><button>注册</button></Link> |
        <Link to="/signup">登录</Link> |
        <Link to="/welcome">欢迎</Link>
        </div>
        <Route path="/" exact component={App} />
        <Route path='/login' component={Box1} />
        <Route path='/signup' component={Box2} />
        <Route path='/welcome' component={Welcome} />
      </div>
    </Router>,
  rootElement
);
