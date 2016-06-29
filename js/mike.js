// MIKE.JS
// Mike Budahn, 6/2016
//
// ON LOAD
$(function() {
	// Build drop-down navigation menu
	var menuItems = "/menu/menu-items.js";
	$.getJSON(menuItems, function(data) {
		$.each(data, function( i, item ) {
			$("#myNavigation .dropdown-menu").append("<li><a href='" + item + "'>" + i + "</a></li>");
		});
	});
	//
});
