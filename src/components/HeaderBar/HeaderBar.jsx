import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './headerbar.css'

class _HeaderBar extends Component {

  /**
   * Render and return the login tab on the right on the navbar
   */
  renderLoginOptions() {
    if (this.props.userState.loggedIn) {
      return (
        <nav className="" id="">
          <img id="user-icon" src="/images/unknowUser.png" width="30" height="30" className="d-inline-block align-middle" alt="" />
          <div className="nav-item" id="navbar-username">
            Hi, Kolijn
        </div>
        </nav>
      )
    }
    else {
      return (
        <nav className="navbar-nav user-nav" id="navbarLoginPanel">
          <div className="nav-item" id="navbar-username">
            <a href="" className="nav-link" >Login</a>
          </div>
        </nav>
      )
    }
    return ""
  }

  render() {
    let menuOptions = [
      (<li key="aboutlink" className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>),
      (<li key="leaderboardlink" className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leader Board</NavLink></li>)
    ]
    let optionalUserDetails = this.renderLoginOptions()
    if (this.props.userState.loggedIn) {
      menuOptions.push(<li className="nav-item"><NavLink className="nav-link" to="/user">My Data</NavLink></li>)
    }

    return (
      <nav id="navbar" className="navbar navbar-dark navbar-expand-xl">
        <nav id="navbar-brand">
          <div className="nav-item">
            <NavLink className="nav-link" to="/">
              <img id="branding-icon" src="/images/logo.png" width="30" height="30" className="d-inline-block align-middle" alt="" />
              TTN Mapper
          </NavLink>
          </div>
        </nav>
        <nav id="navbar-navigation" className="collapse navbar-collapse">
          <ul className="navbar-nav user-nav">
            {menuOptions}
          </ul>
        </nav>
        {optionalUserDetails}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsable" aria-controls="navbarCollapsable" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      return true
    }
    return false
  }

}



const mapStateToProps = state => ({
  userState: state.userData.userState
})

const HeaderBar = connect(
  mapStateToProps
)(_HeaderBar)

export default HeaderBar
export { _HeaderBar }
