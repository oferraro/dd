import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import $ from 'jquery';

if (process.env.BROWSER) {
  require('./home.scss');
}

class addUser extends Component {
  static getActions() {
    return [new Actions().Home.test()];
  }
  handleSubmit (event) {
    event.preventDefault();
    var _this = this;
    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        url: 'http://127.0.0.1:8000/addUser',
        data:$(event.target).serialize(), cache:false
    }).then (function (response) {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="addUser">
        <div className="navigation-buttons">
          <div className="row">
            <a href="../">Home</a>
          </div>
          <div className="col-md-6 main-box">
            <form onSubmit={this.handleSubmit}>
              <input className="form-control" type="text" placeholder="username" />
              <input className="form-control" type="text" placeholder="First" />
              <input className="form-control" type="text" placeholder="Last" />
              <input className="form-control" type="text" placeholder="E-mail" />
              <input className="form-control" type="text" placeholder="Cell" />
              <input className="form-control" type="text" placeholder="phone" />
              <div className="row">
                <div className="col-md-6">
                  <select className="form-control" name="gender">
                    <option>gender</option>
                    <option>male</option>
                    <option>famale</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-control col-md-6" name="title">
                    <option>Title</option>
                    <option>miss</option>
                    <option>mr</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Picture: <input className="form-control" type="file" /></label>
              </div>
              <div><input className="form-control" type="submit" /></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
  };
}

export default connect(stateToProps)(addUser);
