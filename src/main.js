import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AggregateUsers } from './aggregateUsers.js';
import { User } from './user-object';

let userdb = new AggregateUsers();

$(document).ready(function() {
// TOP NAV LOADERS
  $('#home').click(function() {
    $('#content-container').load('landing-dashboard.html');
  });
  $('#user-profile').click(function() {
    $('#content-container').load('user-profile.html');
  });
  $('#add-event').click(function() {
    $('#content-container').load('add-event-page.html');
  });
  //  $('#about').click(function() {
  //  $('#content-container').load();
  //});

  // PAGE BUTTON LOADERS
  $('.login-button').click(function(event) {
    event.preventDefault();
    const login = $("#username").val();
    let valid; 
    userdb.users.forEach(element => {
      if (element.username === login) {
        valid = true;
      }
    });
    if (valid === true) {
      $('#header-container').show();
      $('#content-container').load('landing-dashboard.html');
    } else {
      $('#not-valid-user').fadeIn();
    }
  });

  $('.join-button').click(function(event) {
    event.preventDefault();
    $('#content-container').load('new-user.html');
    
  });
});



$('#create-user').on("click", function (event) {
  event.preventDefault();
  const newUser = new User($("#name").val(), $("#aboutMe").val(), $("#location").val());
  userdb.addUser(newUser);
  $("#header-container").show();
  $("#content-container").load('user-profile.html');
  console.log(userdb.users);
})
