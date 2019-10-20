import React , { useState }from "react";
import ReactDOM from "react-dom";

import "./styles.css";
function Box1(){
  return (
    <div className="box">注册</div>
  )
}

function Box2(){
  return (
    <div className="box">登录</div>
  )
}

function App() {
  let hash = window.location.hash
  let initUi = hash === "#signup" ? '登录' : '注册'
  console.log(initUi)
  let [ui,setUi] = useState(initUi);
  let onClickLogin = ()=>{
      setUi('登录')
      window.location.hash = 'login'
    }
  let onClickSignUp = ()=>{
      setUi('注册')
      window.location.hash = 'signup'
    }

  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <div>
        {ui === "注册" ?<Box1 />:<Box2 />}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
