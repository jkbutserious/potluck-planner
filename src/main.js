import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AggregateUsers } from './aggregateUsers.js';
import { User } from './user-object';
import { Recipe } from './recipe-object.js';
import { Event } from './eventObject.js';

const userdb = new AggregateUsers();

$(document).ready(function() {
// TOP NAV LOADERS
  $('#home').click(function() {
    $("#overall-container").children().hide();
    $("#landing-dashboard-overall-container").show();
    $("#header-container").show();
  });
  $('#user-profile').click(function() {
    $("#overall-container").children().hide();
    $("#user-profile-overall-container").show();
    $("#header-container").show();
  });
  $('#add-event').click(function() {
    $("#overall-container").children().hide();
    $("#eventDate").val('');
    $("#eventName").val('');
    $("#eventLocation").val('');
    $("#eventDesc").val('');
    $("#add-event-page").show();
    $("#header-container").show();
  });
  //$('#about').click(function() {
  //$("#overall-container").children().hide();
  //$("#landing-dashboard-overall-container").show();
  //$("#header-container").show();
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
  //$('#landing-dashboard-overall-container').hide();
  //$('#user-profile-overall-container').show();
});


// NEW/MODIFY EVENT PAGE
function addEventFields(){
  $("#user-profile-events-list").empty();
  $('#your-events-list').empty();
  $('#all-events-list').empty();
  addDashboardDetails();
}

$('#create-event').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const newEvent = new Event($('#eventName').val(), $('#eventDesc').val(), $('#eventLocation').val(), $('#eventDate').val());
  userDetails.addEvent(newEvent);
  addEventFields();
  $('#add-event-page').hide();
  $('#landing-dashboard-overall-container').show();
});

$('#update-event').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const eventToUpdate = userDetails.events[parseInt($('#eventID').text())];
  eventToUpdate.eventName = $('#eventName').val();
  eventToUpdate.desc = $('#eventDesc').val();
  eventToUpdate.location = $('#eventLocation').val();
  eventToUpdate.dateTime = $('#eventDate').val();
  addEventFields();
  $('#add-event-page').hide();
  $('#landing-dashboard-overall-container').show();
});

$('#cancel-event').click(function(event){
  event.preventDefault();
  $('#add-event-page').hide();
  $('#landing-dashboard-overall-container').show();
});

// NEW/MODIFY RECIPE PAGE
function addRecipeFields(user){
  $("#user-profile-recipe-list").empty();
  user.recipes.forEach(recipe => {
    $("#user-profile-recipe-list").append(`<li>${recipe}</li>`);
  });
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
});

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
});

$('#cancel-recipe').click(function(event){
  event.preventDefault();
  $('#add-recipe-overall-container').hide();  
  $('#user-profile-overall-container').show();
});

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
});

$('#update-user').click(function(event) {
  event.preventDefault();
  userdb.users[userdb.currentUser].name = $("#name").val();
  userdb.users[userdb.currentUser].aboutMe = $("#aboutMe").val();
  userdb.users[userdb.currentUser].location = $("#location").val();
  addLoginDetails();
  $('#new-user-overall-container').hide();
  $('#user-profile-overall-container').show();
});

$('#cancel-user-create').click(function(event){
  event.preventDefault();
  $('#new-user-overall-container').hide();  
  $('#main-container').show();
});

$('#cancel-user-update').click(function(event){
  event.preventDefault();
  $('#new-user-overall-container').hide();  
  $('#user-profile-overall-container').show();
});

// Dashboard 

function addDashboardDetails() {
  $("#all-users-list").empty();
  $("#all-events-list").empty();
  $("#your-events-list").empty();

  userdb.users.forEach(user => {
    let userID = user.id;
    $("#all-users-list").append(`<li>${user.name}</li>`);
    user.events.forEach(event => {
      let uniqueID = userID + "-" + event.id;
      $("#all-events-list").append(`<li id='${uniqueID}'>${event.eventName}</li>`);
    });
  });
  const ourUser = userdb.users[userdb.currentId];
  ourUser.events.forEach(userEvent => {
    $("#your-events-list").append(`<li id='${userEvent.id}'>${userEvent.eventName}</li>`);
  });
}

$("#all-events-list").on("click", "li", function(event){
  event.preventDefault();
  $("#all-events-list li").children().hide();
  let rawID = $(this).attr('id');
  let userID = idSplit(rawID)[0];
  let eventID = idSplit(rawID)[1];
  let user = userdb.users[userID];
  let userEvent = user.events[eventID];
  $(this).html(`${userEvent.eventName}
    <p>Description: ${userEvent.desc}</p><br>
    <p>Location: ${userEvent.location}</p><br>
    <p>Date: ${userEvent.dateTime}</p>
    <button id='${idSplit(rawID).join(',')}'>modify</button>
    `);
});

$("#your-events-list").on("click", "li", function(event){
  event.preventDefault();
  $("#your-events-list li").children().empty();
  let eventID = $(this).attr('id');
  let user = userdb.users[userdb.currentUser];
  let userEvent = user.events[eventID];
  $(this).html(`${userEvent.eventName}
    <p>Description: ${userEvent.desc}</p><br>
    <p>Location: ${userEvent.location}</p><br>
    <p>Date: ${userEvent.dateTime}</p>
    <button id='${userEvent.id}'>modify</button>
    `);
});

function idSplit(id){
  if (id.includes("-")){
    let idArray = id.split("-");
    return idArray;
  } else if (id.includes(",")){
    let idArray = id.split(",");
    return idArray;
  }
}

$("#all-events-list li").on("click", "button", function(event){
  event.preventDefault();
  let rawID = $(this).attr('id');
  let userID = idSplit(rawID)[0];
  let eventID = idSplit(rawID)[1];
  let eventToModify = userdb.users[userID].events[eventID];
  $("#eventDate").val(eventToModify.dateTime);
  $("#eventName").val(eventToModify.eventName);
  $("#eventLocation").val(eventToModify.location);
  $("#eventDesc").val(eventToModify.desc);
  $("#eventID").text(eventID);
  $("#landing-dashboard-overall-container").hide();
  $("#add-event-page").show();
});