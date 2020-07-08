import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AggregateUsers } from './aggregateUsers.js';
import { User } from './user-object';

const userdb = new AggregateUsers();

$(document).ready(function() {
// TOP NAV LOADERS
  $('#home').click(function() {
   // $('#content-container').load('landing-dashboard.html');
  });
  $('#user-profile').click(function() {
    //$('#content-container').load('user-profile.html');
  });
  $('#add-event').click(function() {
    //$('#content-container').load('add-event-page.html');
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
      $('#landing-dashboard-overall-container').show();
      $('#main-container').hide();
      addLoginDetails();
    } else {
      $('#not-valid-user').fadeIn();
    }
  });

  $('.join-button').click(function(event) {
    event.preventDefault();
    $('#new-user-overall-container').show();
    $('#main-container').hide();
  });

  // LANDING DASHBOARD
  $('#landing-dashboard-overall-container').hide();
  $('#user-profile-overall-container').show();
});


// NEW/MODIFY EVENT PAGE
function addEventFields(user){
  $("#user-profile-events-list").empty();
  $('#your-events').empty();
  user.events.forEach(event => {
    $("#user-profile-event-list").append(`<li>${event}</li>`);
    $("#your-events").append(`<li>${event}</li>`);
  })
}

$('#create-event').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const newEvent = new Event();
  newEvent.eventName = $('#eventName').val();
  newEvent.desc = $('#eventDesc').val();
  newEvent.location = $('#eventLocation').val();
  newEvent.dateTime = $('#eventDate').val();
  userDetails.addEvent(newEvent);
  addEventFields(userDetails);
  $('#add-event-page').hide();
  $('#landing-dashboard-overall-container').show();
})

$('#update-event').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const eventToUpdate = userDetails.events[parseInt($('#eventID').text())];
  eventToUpdate.eventName = $('#eventName').val();
  eventToUpdate.desc = $('#eventDesc').val();
  eventToUpdate.location = $('#eventLocation').val();
  eventToUpdate.dateTime = $('#eventDate').val();
  addEventFields(userDetails);
  $('#add-event-page').hide();
  $('#landing-dashboard-overall-container').show();
})

$('#cancel-event').click(function(event){
  event.preventDefault();
  $('#add-event-page').hide();
  $('#landing-dashboard-overall-container').show();
})

// NEW/MODIFY RECIPE PAGE
function addRecipeFields(user){
  $("#user-profile-recipe-list").empty();
  user.recipes.forEach(recipe => {
    $("#user-profile-recipe-list").append(`<li>${recipe}</li>`);
  })
}

$('#create-recipe').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const newRecipe = new Recipe();
  newRecipe.name = $('#recipe-name').val();
  newRecipe.description = $('#recipe-description').val();
  newRecipe.difficulty = $('#recipe-difficulty-level').val();
  newRecipe.yield = $('#recipe-yield').val();
  newRecipe.timeToCook = $('#recipe-time').val();
  newRecipe.ingredients = $('#recipe-ingredients').val();
  newRecipe.instructions = $('#recipe-steps').val();
  userDetails.addRecipe(newRecipe);
  addRecipeFields(userDetails);
  $('#add-recipe-overall-container').hide();
  $('#user-profile-overall-container').show();
})

$('#update-recipe').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const recipeToUpdate = userDetails.recipes[parseInt($('#recipeID').text())];
  recipeToUpdate.name = $('#recipe-name').val();
  recipeToUpdate.description = $('#recipe-description').val();
  recipeToUpdate.difficulty = $('#recipe-difficulty-level').val();
  recipeToUpdate.yield = $('#recipe-yield').val();
  recipeToUpdate.timeToCook = $('#recipe-time').val();
  recipeToUpdate.ingredients = $('#recipe-ingredients').val();
  recipeToUpdate.instructions = $('#recipe-steps').val();
  addRecipeFields(userDetails);
  $('#add-recipe-overall-container').hide();
  $('#user-profile-overall-container').show();
})

$('#cancel-recipe').click(function(event){
  event.preventDefault();
  $('#add-recipe-overall-container').hide();  
  $('#user-profile-overall-container').show();
})

// NEW/MODIFY USER PAGE
function addLoginDetails() {
  const userDetails = userdb.users[userdb.currentUser];
  $('#user-profile-name').html(userDetails.name);
  $('#user-profile-about-me').html(userDetails.aboutMe);
  $('#user-profile-location').html(userDetails.location);
  userDetails.recipes.forEach(element => {
    $("#user-profile-recipe-list").append(`<li>${element.name}</li>`);
  });
}

$('#create-user').click(function(event) {
  event.preventDefault();
  const newUser = new User($("#name").val(), $("#aboutMe").val(), $("#location").val());
  userdb.addUser(newUser);
  userdb.currentUser = newUser.id;
  addLoginDetails();
  addDashboardDetails();
  $("#header-container").show();
  $('#new-user-overall-container').hide();
  $('#user-profile-overall-container').show();
})

$('#update-user').click(function(event) {
  event.preventDefault();
  userdb.users[userdb.currentUser].name = $("#name").val();
  userdb.users[userdb.currentUser].aboutMe = $("#aboutMe").val();
  userdb.users[userdb.currentUser].location = $("#location").val();
  addLoginDetails();
  $('#new-user-overall-container').hide();
  $('#user-profile-overall-container').show();
})

$('#cancel-user-create').click(function(event){
  event.preventDefault();
  $('#new-user-overall-container').hide();  
  $('#main-container').show();
})

$('#cancel-user-update').click(function(event){
  event.preventDefault();
  $('#new-user-overall-container').hide();  
  $('#user-profile-overall-container').show();
})

// Dashboard 

function addDashboardDetails() {
  userdb.users.forEach(element => {
    let i = 0;
    element.events.forEach(userEvent => {
      $("#all-events-list").append(`<li id='${i++}'>${userEvent.name}</li>
      <div class='collapsed-event' id="${}">
        <p>Description: ${userEvent.desc}</p><br>
        <p>Location: ${userEvent.location}</p><br>
        <p>Date: ${userEvent.date}</p>`)
    });
  });
  userdb.users.forEach(element => {
    $("#all-users-list").append(`<li>${element.name}</li>`)
  });
  const ourUser = userdb.users[userdb.currentId];
  ourUser.events.forEach(element => {
    $("#your-events-list").append(`<li id='${element.id}'>${element.name}</li>`)
  });
}

function attachContactListeners() {
  $("ul#all-events-list").on("click", "li", function() {
    $(this).toggleClass('collapsed-event');
  });
};