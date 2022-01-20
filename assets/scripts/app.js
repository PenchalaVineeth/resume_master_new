const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Land Use Land Cover in GEE",
				weight: 12.3
			}, {
				text: "Crop acerage estimation in GEE",
				weight: 8
			}, {
				text: "Soil Erosion Estimation using RUSLE",
				weight: 14
			}, {
				text: "Mapping of Irrigated crop area",
				weight: 3
			}, {
				text: "Flood mapping and damage assessment in GEE",
				weight: 7
			}, {
				text: "Coral reefs mapping",
				weight: 10
			}, {
				text: "Wasteland Change Analysis",
				weight: 9
			}, {
				text: "Training to Agricultural departments in MPAE",
				weight: 15
			}, 
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Highly qualified GIS professional with experience in the Government Organizations. Having exposure in multiple projects as a team lead, creative in problem solving and used my professional skills in organized manner. Always shows enthusiasm towards learning new skills which helps in self-growth and growth of organization."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "000"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
