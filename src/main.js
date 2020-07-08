import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AggregateUsers } from './aggregateUsers.js'

let userdb = new AggregatUsers();

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
  $('#about').click(function() {
    $('#content-container').load();
  });

// PAGE BUTTON LOADERS
  $('.login-button').click(function() {
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

  $('.join-button').click(function() {
    $('#content-container').load('new-user.html');
  });
});
