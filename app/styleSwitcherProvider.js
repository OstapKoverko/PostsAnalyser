app.provider("styleSwitcher", function() {
	var materialDesign = false;
	return {
		materialDesign: materialDesign,
		$get: function() {
			return {
				styleChange: function() {
					materialDesign = !materialDesign;
				} 
			};
		}
	};
})