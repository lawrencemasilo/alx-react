import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  const count = parseInt($('#count').text()) || 0;
  $('#count').text(`${count + 1} clicks on the button`);
}, 1000);

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#startButton').click(() => {
    updateCounter();
  });
});