import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import $ from 'jquery';

if (process.env.BROWSER) {
  require('./home.scss');
}

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {user:false};
  }
  componentDidMount () {
    var _this = this; var id = this.props.params.id;
    $.getJSON('http://127.0.0.1:8000/user/'+id, function (data) {
      _this.setState({user: data});
    });
  }
  deleteUser (id) {}
  static getActions() {
    return [new Actions().Home.users()];
  }
  render() {
    if (this.state.user) {
      var t = new Date(this.state.user.registered);
      var formatted = t.toISOString();
      var dobt = new Date(this.state.user.registered);
      var dob = t.toISOString();
    }
    return (
      <div>
        <div className="User">
          <div className={this.state.user?'':'hidden'}>
            <img className="profile-pic" src={this.state.user.picture} />
            <div className="contact-info">
              <div className="actions">
                <a href="../addUser">Add</a>
                <a href={"../editUser/"+this.state.user.id}>Edit</a>
                <a href="#" onClick={this.deleteUser.bind(this, this.state.user.id)}>Delete</a>
              </div>
              <p><span className="capitalized"><strong>{this.state.user.title} {this.state.user.first}, {this.state.user.last}</strong></span></p>
              <p><strong>Cell</strong>: {this.state.user.cell}, <strong>Phone</strong>: {this.state.user.phone}</p>
              <p><strong>Email</strong>: {this.state.user.email}</p>
            </div>
            <div className="extra-info">
              <p><strong>{this.state.user.username}</strong></p>
              <p><strong>Date of birth</strong>: {dob}</p>
              <p><strong>Created at</strong>: {this.state.user.createdAt}, <strong>Updated at</strong>: {this.state.user.updatedAt}</p>
              <p><strong>Registered</strong>: {formatted}</p>
            </div>
          </div>
        </div>
        <div className="navigation-buttons">
          <a href="../getAllUsers">Back</a>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
  };
}

export default connect(stateToProps)(User);
