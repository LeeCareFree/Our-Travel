import React, { Component } from 'react';
import './AppFooter.css'
class App extends Component {
  render() {
    return (
      <footer className='footer-container'>
        <div className='footer-top'>
          <div className='footer-bottom'></div>
        </div>
        <img src='../logo.png' alt="logo"/>
        <div className='footer-content'><strong>有趣的人生，一半爱恨情仇，一半山川湖海。</strong></div>

      </footer>
    );
  }
}
export default App;
