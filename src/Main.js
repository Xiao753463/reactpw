import React from 'react';
import {Routes,Route} from 'react-router'
import {Link} from 'react-router-dom'
import PortfolioList from './PortfolioList';
import './Main.css';
class Main extends React.Component {
  
  render() {
    return(
      <div>
        
    <div id="main">
        <div id='banner'>
            <div id="banner-div">
                <div id="picture-column"><div id="picture"></div></div>
                <div id="MyName">XIAO CHUN-YUN</div>
            </div>
            <div id="scroll">
                <p>繼續往下</p>    
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div className="title"><h2>WORKS</h2></div>
        <div id="works">
            
            <PortfolioList />
        </div>
        

    </div>
      </div>
    );
  }
}
window.addEventListener('DOMContentLoaded', async () => {
  const hasSupport = await new Promise((resolve) => {
    const imgSrc = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA';
    const pixel = new Image();
    pixel.addEventListener('load', () => {
      const isSuccess = pixel.width > 0 && pixel.height > 0;
      resolve(isSuccess);
    });
    pixel.addEventListener('error', () => {
      resolve(false);
    });
    pixel.setAttribute('src', imgSrc); // 開始載入測試圖
  });
  document.documentElement.classList.add(hasSupport ? 'webp' : 'no-webp');
});
export default Main;