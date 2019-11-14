import React, { Component } from 'react';
import { Subscribe, State } from '../store';
import './AppNavigation.css';
import { TweenMax, Sine } from 'gsap';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../logo.png'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AppStats from '../components/AppStats';
import { IconBase } from '../components/Icons';
import AppMenuDrawer from '../components/AppMenuDrawer';
import AppNavTransition from './AppNavTransition';

class Header extends Component {
  state = {
    saved: false,
    menuOpened: false
  };

  toggleMenu = () => {
    this.setState(
      state => ({ menuOpened: !state.menuOpened }),
      () => {
        if (this.state.menuOpened) {
          this.openMenu();
        } else {
          this.closeMenu();
        }
      }
    );
  };
  openMenu() {
    TweenMax.to('.first', 0.2, {
      x: 18,
      ease: Sine.easeOut
    });
    TweenMax.to('.last', 0.2, {
      x: -18,
      ease: Sine.easeOut
    });
    TweenMax.staggerTo(
      '.first, .middle, .last',
      0.2,
      {
        fill: '#7eebe6',
        ease: Sine.easeOut
      },
      0.04
    );
  }
  closeMenu() {
    TweenMax.to('.first', 0.2, {
      x: 0,
      ease: Sine.easeIn
    });
    TweenMax.to('.last', 0.2, {
      x: 0,
      ease: Sine.easeIn
    });
    TweenMax.to('.first, .middle, .last', 0.2, {
      fill: '#fff'
    });
  }
  render() {
    return (
      <Subscribe to={[State]}>
        {$ => {
          const page =
            {
              '/': 'index',
              '/place': 'place',
              '/group': 'group'
            }[this.props.location.pathname]; // dont really ever need this fallback but just in case
          const selectedUser = $.selectedUser();
          const firstName = selectedUser.name;
          const { menuOpened } = this.state;
          const bkmap = {
            index: 'header-img1',
            place: 'header-img2',
            group: 'header-img3'
          };

          return (
            <header className={page}>
              <TransitionGroup className="bk-img">
                <CSSTransition key={page} timeout={400} classNames="bk">
                  <div className={bkmap[page]} />
                </CSSTransition>
              </TransitionGroup>

              <div className="nav-wrapper">
                <nav>
                  <NavLink to="/"><img className='logo' src={logo} alt="Travel" /></NavLink>
                  <ul>
                    <li>
                      <NavLink activeClassName="nav-router" exact to="/">
                        {firstName}-主页
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="nav-router" to="/place">
                        {firstName}-推荐
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="nav-router" to="/group">
                        {firstName}-旅行团
                      </NavLink>
                    </li>
                  </ul>

                  <div onClick={this.toggleMenu}>
                    <IconBase className="menu" iconName="menu" iconColor="white" width="28" height="28">
                      <IconThreeDot />
                    </IconBase>
                  </div>
                  {menuOpened && <AppMenuDrawer firstName={firstName} menuOpened={menuOpened} />}
                  <AppNavTransition pathname={page} />
                  {page === 'index' && <AppStats selectedUser={selectedUser} />}
                </nav>
              </div>
            </header>
          );
        }}
      </Subscribe>
    );
  }
}

export default withRouter(Header);

// function fName(input) {
//   var lastIndex = input.lastIndexOf(' ');
//   return input.substring(0, lastIndex);
// }

function IconThreeDot() {
  return (
    <g>
      <circle className="first" cx="3" cy="12" r="3" />
      <circle className="middle" cx="12" cy="12" r="3" />
      <circle className="last" cx="21" cy="12" r="3" />
    </g>
  );
}
