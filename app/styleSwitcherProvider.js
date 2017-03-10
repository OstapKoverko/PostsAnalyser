app.provider("styleSwitcher", function() {
	var materialDesign = true;
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