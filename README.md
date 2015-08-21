meteor-jquery-ui-droppable
=========================

[Droppable](http://jqueryui.com/droppable) is a jQuery UI behaviour for
interactively dropping any element. This is from jQueryUI 1.10.4.

## Why separate?

This is a fork of [dbernhard/meteor-jquery-ui-draggable](https://github.com/dbernhard/meteor-jquery-ui-draggable) which is a fork of [rgm/meteor-jquery-ui-sortable](https://github.com/rgm/meteor-jquery-ui-sortable), and does basically the same thing, except this pacakge isolates the Droppable interaction, not the Sortable or Draggable interaction.

## How to install
1. `meteor add drewproud:jquery-ui-droppable`
3. `$('#someElem').droppable()` in the  `Template.foo.rendered()` callback.

## Documentation

http://api.jqueryui.com/droppable/


