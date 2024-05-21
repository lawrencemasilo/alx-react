import $ from 'jquery';
import { debounce } from 'lodash';
import logo from '../assets/holberton-logo.jpg';

$(document).ready(function() {
  $('body').append('<img src="' + logo + '" alt="Holberton Logo">');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  $('#btn').on('click', debounce(updateCounter, 300));
});
