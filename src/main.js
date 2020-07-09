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
// NAV BAR LOADERS
  $('#home').click(function() {
    $("#overall-container").children().hide();
    addLoginDetails();
    addDashboardDetails();
    addRecipeFields(userdb.users[userdb.currentUser]);
    $("#landing-dashboard-overall-container").show();
    $("#header-container").show();
  });

  $('#user-profile').click(function() {
    $("#overall-container").children().hide();
    addLoginDetails();
    addDashboardDetails();
    addRecipeFields(userdb.users[userdb.currentUser]);
    $("#user-profile-overall-container").show();
    $("#header-container").show();
  });

  $('#add-event').click(function() {
    $("#overall-container").children().hide();
    $("#eventDate").val('');
    $("#eventName").val('');
    $("#eventLocation").val('');
    $("#eventDesc").val('');
    $("#update-event").hide();
    $("#add-event-page").show();
    $("#header-container").show();
  });

  //$('#about').click(function() {
  //$("#overall-container").children().hide();
  //$("#landing-dashboard-overall-container").show();
  //$("#header-container").show();
  //});

  // LOGIN / SIGN UP PAGE
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
    $('#new-user-form h4').text("Sign up!");
    $('#name').val('');
    $('#aboutMe').val('');
    $('#location').val('');
    $('#user-profile-events-list').empty();
    $('#user-profile-recipe-list').empty();
    $('#create-user').show();
    $('#cancel-user-create').show();
    $('#update-user').hide();
    $('#cancel-user-update').hide();
    $('#main-container').hide();
  });
});

//USER PROFILE PAGE
$('#modify-user').click(function(event){
  event.preventDefault();
  let currentUser = userdb.users[userdb.currentUser];
  $('#new-user-overall-container').show();
  $('#new-user-form h4').text("Update User Profile");
  $('#name').val(currentUser.name);
  $('#aboutMe').val(currentUser.aboutMe);
  $('#location').val(currentUser.location);
  $('#create-user').hide();
  $('#cancel-user-create').hide();
  $('#update-user').show();
  $('#cancel-user-update').show();
  $('#user-profile-overall-container').hide();
});

$('#delete-profile').click(function(event){
  event.preventDefault();
  let currentUser = userdb.users[userdb.currentUser];
  userdb.deleteUser(currentUser.id);
  $('#main-container').show();
  $('#header-container').hide();
  $('#user-profile-overall-container').hide();
});

$('#add-new-recipe').click(function(event){
  event.preventDefault();
  $('#add-recipe-overall-container').show();
  $('#recipe-name').val('');
  $('#recipe-description').val('');
  $('#recipe-yield').val('');
  $('#recipe-time').val('');
  $('#recipe-ingredients').val('');
  $('#recipe-steps').val('');
  $('#recipeID').text('');
  $('#create-recipe').show();
  $('#cancel-recipe').show();
  $('#update-recipe').hide();
  $('#user-profile-overall-container').hide();
});

$("#user-profile-events-list").on("click", "li", function(event){
  event.preventDefault();
  $("#user-profile-events-list li").children().hide();
  let eventID = $(this).attr('id');
  let user = userdb.users[userdb.currentUser];
  let userEvent = user.events[idSplit(eventID)[0]];
  $(this).html(`${userEvent.eventName}
    <p>Description: ${userEvent.desc}</p><br>
    <p>Location: ${userEvent.location}</p><br>
    <p>Date: ${userEvent.dateTime}</p>
    <button id='${userEvent.id},prof'>modify</button>
    `);
});

$("#user-profile-recipe-list").on("click", "li", function(event){
  event.preventDefault();
  $("#user-profile-recipe-list li").children().hide();
  let recipeID = $(this).attr('id');
  let user = userdb.users[userdb.currentUser];
  let userRecipe = user.recipes[recipeID];
  $(this).html(`${userRecipe.name}
    <p>Description: ${userRecipe.description}</p><br>
    <p>Difficulty: ${userRecipe.difficulty}</p><br>
    <p>Yield: ${userRecipe.yield}</p><br>
    <p>Time to Cook: ${userRecipe.timeToCook}</p><br>
    <p>Ingredients: ${userRecipe.ingredients}</p><br>
    <p>Instructions: ${userRecipe.instructions}</p><br>
    <button id='${userRecipe.id}-btn'>modify</button>
    `);
});

// NEW/MODIFY EVENT PAGE
function addEventFields(user){
  $("#user-profile-events-list").empty();
  addDashboardDetails();
  user.events.forEach(userEvent => {
    $("#user-profile-events-list").append(`<li id='${userEvent.id}-prof'>${userEvent.eventName}</li>`);
  });
}

$('#create-event').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const newEvent = new Event($('#eventName').val(), $('#eventDesc').val(), $('#eventLocation').val(), $('#eventDate').val());
  userDetails.addEvent(newEvent);
  addEventFields(userDetails);
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
  addEventFields(userDetails);
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
    $("#user-profile-recipe-list").append(`<li id=${recipe.id}>${recipe.name}</li>`);
  });
}

function updateRecipeValues(recipe){
  recipe.name = $('#recipe-name').val();
  recipe.description = $('#recipe-description').val();
  recipe.difficulty = $('#recipe-difficulty-level').val();
  recipe.yield = $('#recipe-yield').val();
  recipe.timeToCook = $('#recipe-time').val();
  recipe.ingredients = $('#recipe-ingredients').val();
  recipe.instructions = $('#recipe-steps').val();
}

$('#create-recipe').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const newRecipe = new Recipe();
  updateRecipeValues(newRecipe);
  userDetails.addRecipe(newRecipe);
  addRecipeFields(userDetails);
  $('#add-recipe-overall-container').hide();
  $('#user-profile-overall-container').show();
});

$('#update-recipe').click(function(event){
  event.preventDefault();
  const userDetails = userdb.users[userdb.currentUser];
  const recipeToUpdate = userDetails.recipes[parseInt($('#recipeID').text())];
  updateRecipeValues(recipeToUpdate);
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
    if (user) {
      let userID = user.id;
      $("#all-users-list").append(`<li>${user.name}</li>`);
      user.events.forEach(event => {
        let uniqueID = userID + "-" + event.id;
        $("#all-events-list").append(`<li id='${uniqueID}'>${event.eventName}</li>`);
      });
    }
  });
  const ourUser = userdb.users[userdb.currentId];
  ourUser.events.forEach(userEvent => {
    $("#your-events-list").append(`<li id='${userEvent.id}'>${userEvent.eventName}</li>`);
  });
}

$("#all-events-list").on("click", "li", function(event){
  event.preventDefault();
  $("#all-events-list li").children().empty();
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
    <div class="fb-share-button" data-href="https://github.com/hubba180/potluck-planner" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fhubba180%2Fpotluck-planner&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
    `);
});

$("#your-events-list").on("click", "li", function(event){
  event.preventDefault();
  $("#your-events-list li").children().hide();
  let eventID = $(this).attr('id');
  let user = userdb.users[userdb.currentUser];
  let userEvent = user.events[eventID];
  $(this).html(`${userEvent.eventName}
    <p>Description: ${userEvent.desc}</p><br>
    <p>Location: ${userEvent.location}</p><br>
    <p>Date: ${userEvent.dateTime}</p>
    <button id='${userEvent.id}'>modify</button>
    <div class="fb-share-button" data-href="https://github.com/hubba180/potluck-planner" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fhubba180%2Fpotluck-planner&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
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

$("#all-events-list li button").on("click", function(event){
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