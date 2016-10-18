import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import $ from 'jquery';

if (process.env.BROWSER) {
  require('./home.scss');
}

class Users extends Component {
  constructor (props) {
    super(props);
    this.state = {users:[]};
  }
  componentDidMount(props) {
    this.listUsers();
  }
  static getActions() {
    return [new Actions().Home.users()];
  }
  listUsers() {
    var _this = this;
    $.getJSON('http://127.0.0.1:8000/users', function (data) {
      _this.setState({users: data});
    });
  }
  render() {
    var users = this.state.users.map (function (u){
        return (
          <li key={u.id}>
            <a href={'/user/'+u.id}>
              <img className="profile-pic" src={u.picture} />
              <span className="capitalized">{u.title+' '+u.first+' '+u.last+' ('+u.username+') '}
              </span> View
            </a>
          </li>
        );
      }
    );
    return (
      <div className="Users">
        <div className="navigation-buttons">
          <a href="/">Home</a>
          <a href="getAllUsers">Users</a>
        </div>
        <ul className="users-list">{users}</ul>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
  };
}

export default connect(stateToProps)(Users);
