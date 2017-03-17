app.service('UpgradeDomService', function() {
  // ###########################
	// ###     For MDL only    ###
	// ### Update new elements ###
	// ###########################
	// Drestin commented on 7 Aug 2015
	// @liuyuanhuo
	// I had a similar problem and came up with following solution taking advantage of Mutation Observers.
	// It is still not perfect but it is certainly less memory consuming than calling a function which check all the DOM every 200ms.
	// In my use-case, the classes don't change, so I check only for new elements.
	// But the Mutation Observer API is able to also detect attribute changes. Just adapt the callback to your needs.
	// Again, it is only a workaround, until MDL supports "automatically dynamic" websites.
	// See details on https://github.com/google/material-design-lite/issues/917
	
	this.upgradeDom = function () {
  	var observer = new window.MutationObserver(function(mutations) {
  		var upgrade = false;
  		for (var i = 0; i < mutations.length; i++) {
  			if (mutations[i].addedNodes.length > 0) {
  				upgrade = true;
  				break;
  			} 
  		}
  		if (upgrade) {
  			// If there is at least a new element, upgrade the DOM.
  			// Note: upgrading elements one by one seems to insert bugs in MDL 
  			window.componentHandler.upgradeDom();
  			debugger;
  		}
  	});
  	observer.observe(document, {
  		childList : true,
  		subtree : true
  	});
	};	
	// Material Design Lite will automatically register and render all elements
	// marked with MDL classes upon page load. However in the case where you are 
	// creating DOM elements dynamically you need to register new elements 
	// using the upgradeElement function.
});