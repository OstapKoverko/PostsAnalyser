app.directive("pagination", function() {
	return function (items, totallItems, currentPage, onSelectPage) {
		var pages = [];
		var i = 1;
		var k = totallItems / items;
		for (i; i <= k; i++) {
			pages.push(i);
		}
		onSelectPage(pages);
		templateUrl : "app/Pagination/_pagination.html";
	};
});