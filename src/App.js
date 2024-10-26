import React from 'react';
import './style.css';
import Menu from './Menu';
import Main from './Main';
import Work from './Work';
import { Routes, Route } from 'react-router'
class App extends React.Component {

  render() {
    return (
      <div>
        <Menu />
        <Routes>
          <Route path='' element={<Main />} />
          <Route path="/work/:id" element={<Work />} />
        </Routes>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DY9ELRDH04"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-DY9ELRDH04');
        </script>
      </div>
    );
  }
}

export default App;