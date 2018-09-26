import React, { Component } from "react";
import "../css/navConfig.less";
import contacts from "./contacts/index.js"; //联系人
import message from "./message/index.js"; //消息
import news from "./news/index.js"; //看点
import { Route } from "react-router-dom";
class navConfig extends Component {
  constructor(porps) {
    super(porps);
    this.goHerf = this.goHerf.bind(this);
  }
  componentDidMount() {
    this.updateImg(this.props);
  }
  componentWillUpdate(nextProps) {
    this.updateImg(nextProps);
  }
  updateImg(path){
    if(path.location.pathname){
      let lis = document.getElementsByClassName('navul')[0].children
      lis[0].children[0].src = require('./../img/nav/mes.png')
      lis[1].children[0].src = require('./../img/nav/lxr.png')
      lis[2].children[0].src = require('./../img/nav/see.png')
      lis[3].children[0].src = require('./../img/nav/star.png')
      switch(path.location.pathname){
        case '/navConfig/message':
          lis[0].children[0].src = require('./../img/nav/mes1.png')
          break
        case '/navConfig/contacts':
          lis[1].children[0].src = require('./../img/nav/lxr1.png')
          break
        case '/navConfig/news':
          lis[2].children[0].src = require('./../img/nav/see1.png')
          break
        case '/navConfig/png':
          lis[3].children[0].src = require('./../img/nav/star1.png')
          break
        default:
          break
      }
    }
  }
  goHerf(itme, e) {
    this.props.history.push("/navConfig/" + itme);
  }
  render() {
    return (
      <div className="navConfig">
        <div className="indexHeader">
          <div className="iconContiner">
            <img src={require("./../img/icon.jpg")} alt="" />
            <em />
          </div>
          <span>消息</span>
          <img src={require("./../img/nav/Plus.png")} alt="" />
        </div>
        <div id="navConfigcont">
          <Route path="/navConfig/contacts" component={contacts} />
          <Route path="/navConfig/message" component={message} />
          <Route path="/navConfig/news" component={news} />
        </div>
        <div className="bottomNav">
          <ul className="navul">
            <li onClick={this.goHerf.bind(this, "message")}>
              <img src={require("./../img/nav/mes.png")} alt="" />
              <span>消息</span>
            </li>
            <li onClick={this.goHerf.bind(this, "contacts")}>
              <img src={require("./../img/nav/lxr.png")} alt="" />
              <span>联系人</span>
            </li>
            <li onClick={this.goHerf.bind(this, "news")}>
              <img src={require("./../img/nav/see.png")} alt="" />
              <span>看点</span>
            </li>
            <li onClick={this.goHerf.bind(this, "star")}>
              <img src={require("./../img/nav/star.png")} alt="" />
              <span>动态</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default navConfig;
