import React, { useState } from "react";
import { portfolioItems } from './data';
import { Link } from "react-router-dom";

const Menu = () => {
  const [bg, setBg] = useState(""); // 控制背景圖片

  // 模擬 menu-list 資料
  const menuItems = portfolioItems.reduce((acc, item) => {
    const { category, id, title } = item;
    if (!acc[category]) {
      acc[category] = { works: [], links: [] };
    }
    acc[category].works.push(title);
    acc[category].links.push(`#/work/${id}`);
    return acc;
  }, {});

  const socialMediaLinks = [
    { imgSrc: "imgs/FB-Icon.png", url: "https://www.facebook.com/hsiao.chunyun/" },
    { imgSrc: "imgs/instagram_PNG9.png", url: "https://www.instagram.com/xiao753463/" },
    { imgSrc: "imgs/instagram_PNG9.png", url: "https://www.instagram.com/peco.x1101/" },
  ];

  const handleMouseOver = (index) => {
    const backgroundImage = `Cover-${index}.png`;
    setBg(backgroundImage); // 更新背景圖片
  };

  const handleMouseOut = () => {
    setBg(""); // 清空背景圖片
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <menu>
      <div>
        <Link to="" className="link">Xiao's Resume</Link>
        <button className="menu">
          作品集

          <ul role="menu" className="dropdown-menu">
            {Object.keys(menuItems).map((category) => (
              <>
                <li className="subtitle">
                  <span>— {category} ———</span>
                </li>
                {menuItems[category].works.map((work, index) => (
                  <li className="menu-list" key={index}>
                    <a href={menuItems[category].links[index]}>{work}</a>
                  </li>
                ))}
              </>))}

          </ul>
        </button>

        <button className="menu">
          關於我
          <ul role="menu" className="dropdown-menu">
            <span id="name">蕭淳云 XIAO CHUN-YUN</span>
            <br />
            國立成功大學製造資訊與系統研究所碩士 在學中
            <br />
            <b>HTML / CSS / javascript / React / Node.js / Python / Flask / C# / VBA / SQL</b>
            <div id="socialmedia">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  className="socialimg"
                  onClick={() => openLink(link.url)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={link.imgSrc} alt="Social Media" />
                </a>
              ))}
            </div>
          </ul>
        </button>

        {/* 背景圖片顯示 */}
        <div
          className="dropdown-menu"
          style={{
            width: "300px",
            height: "200px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
          }}
        >
          Dropdown content
        </div>
      </div>
    </menu>
  );
};

export default Menu;
