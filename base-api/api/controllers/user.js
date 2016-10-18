var Repository = require('../../repository/repository');
var repo = new Repository();
var User = repo.models.User;

function getAllUsers(req, res) {
  User.findAll({})
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

function getUser(req, res) {
  User.findOne({
    where: {
      id: req.swagger.params.id.value,
    }
  })
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

function addUser (req, res) {
  req.swagger.params.data.value.split('&').forEach(function (k){
    // Add the option to receive the user Image here
    // Manage parameters with swagger instead of spliting params
    console.log(k.split('='));
  });
}

// Add the option of delete users here (receive ID, check if user exists, and delete it)

module.exports = {
  getAllUsers: getAllUsers,
  getUser: getUser,
  addUser: addUser
};
