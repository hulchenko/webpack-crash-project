import $, { removeData } from 'jquery';

//jquery code below:

$('<h1 />')
    .text('Hello World from JQuery')
    .css({
        textAlign: 'center',
        color: 'red'
    })
    .appendTo($('header'));
