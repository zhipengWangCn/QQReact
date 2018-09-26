import React, { Component } from "react";
class Logn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };
  }
  suitHeight() {
    //监听屏幕高度
    var HEIGHT = document.body.offsetHeight;
    console.log(HEIGHT);
    window.onresize = function() {
      document.getElementsByClassName("lognCont")[0].style.height =
        HEIGHT + "px";
    };
  }
  lognFn() {
    let parms = this.state;
    window.$XszHttp.get("logn.json", parms).then(function(res) {});
  }
  componentDidMount() {
    this.suitHeight();
  }
  render() {
    return (
      <div className="lognCont">
        <div className="Logn" />
        <div className="lognBox">
          <div className="lognLogo">
            <img src={require("../img/logo.png")} alt="" />
          </div>
          <div className="lognInput">
            <input type="number" value={this.state.userName} />
            <em className="iconImg">
              <img src={require("../img/icon.jpg")} alt="" />
            </em>
            <img
              src={require("../img/down.png")}
              className="dropdownArrow"
              alt=""
            />
            <input type="password" value={this.state.passWord} />
          </div>
          <div className="lognButDiv">
            <div className="lognBut" onClick={this.lognFn}>
              登录
            </div>
            <div className="remindTitle">
              <span>忘记密码？</span>
              <span>新用户注册</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logn;
