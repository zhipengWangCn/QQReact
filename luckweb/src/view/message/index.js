import React, { Component } from 'react';
import '../../css/navConfig.less';
class messageIndex extends Component { 
    constructor(props) { 
      super(props);
      this.news = [
        {name: '小傻子',
         title: '22',
         src: require('./../../img/message/2bIcon.jpg')
        },
        {name: '小傻子',
         title: '2233',
         src: require('./../../img/message/2bIcon.jpg')
        },
      ] 
      this.newsList = this.news.map((item) =>
      <div className='mesageContiner'>
           <div className='main'>
                <div className='messageMain'>
                     <p>{item.name}</p>
                     <p>{item.title}</p>
                 </div>
            </div>
      <div className='imgContiner'>
              <img src={item.src}  alt=""/> 
      </div>
      <div className='contMessage'>
            <p>下午6:02</p>
            <p>99+</p>
      </div>
      </div>
      );
    }
    render() {
        return (
         <div className='message'>
             <div className='messageSeach'>
                 <input type='text' placeholder='搜索'/>
             </div>
             {this.newsList}
         </div>
        )
    }
}
export default messageIndex;