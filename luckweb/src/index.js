import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.less';
import App from './App';
import Logn from './view/logn';//注册页面
import activity from './view/activity';//活动页
import navConfig from './view/navConfig';//导航骨架
import xszHttp from './asset/axios'
import './index.min.js';
import {
    BrowserRouter,
    Route
  } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

global.$XszHttp = xszHttp

ReactDOM.render((
  <BrowserRouter>
<div className='continer'>
  <Route exact path="/" component={Logn} />
  <Route path="/app" component={App}/>
  <Route path="/activity" component={activity} />
  <Route path="/navConfig" component={navConfig} >
  </Route>
</div>
</BrowserRouter>), document.getElementById('root'));

registerServiceWorker();
 