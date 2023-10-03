/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center',
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// //pushups
	// // Get the button element by its id
	// const button = document.getElementById("myButton");

	// // Check if there's a stored value in session storage for text and background color
	// const storedText = sessionStorage.getItem("buttonText");
	// const storedColor = sessionStorage.getItem("buttonColor");

	// // Set the initial text and background color of the button based on the stored values or defaults
	// if (storedText) {
	// 	button.textContent = storedText;
	// }

	// if (storedColor) {
	// 	button.style.backgroundColor = storedColor;
	// }


	// // Add a click event listener to the button
	// button.addEventListener("click", function () {
	// 	// Change the text content of the button

	// 	button.textContent = "Yeahh buddy light weight";
	// 	navigator.vibrate(50);

	// 	// Update the background color to match the :active style
	// 	button.style.backgroundColor = "#00f819";

	// 	button.classList.add("unselectable");

	// 	// Store the updated text content and background color in session storage
	// 	sessionStorage.setItem("buttonText", button.textContent);
	// 	sessionStorage.setItem("buttonColor", button.style.backgroundColor);

	// });

	// Function to handle a button
	function handleButton(buttonId) {
		const button = document.getElementById(buttonId);
		const storedText = sessionStorage.getItem(`${buttonId}-text`);
		const storedColor = sessionStorage.getItem(`${buttonId}-color`);

		if (storedText) {
			button.textContent = storedText;
		} else {
			button.textContent = `Done 🕊`;
		}

		if (storedColor) {
			button.style.backgroundColor = storedColor;
		}

		button.addEventListener("click", function () {
			console.log("Button clicked");
			button.textContent = "Yeahh buddy light weight";
			navigator.vibrate(50);
			button.style.backgroundColor = "#00f819";
			button.classList.add("unselectable");
			sessionStorage.setItem(`${buttonId}-text`, button.textContent);
			sessionStorage.setItem(`${buttonId}-color`, button.style.backgroundColor);
		});
	}

	// Call the function for each button

	handleButton("pushups")
	handleButton("bench")


	handleButton("cablec");
	handleButton("midc");

	handleButton("dbpress");
	handleButton("incpress");
	handleButton("butterfly");

	handleButton("onearmt");
	handleButton("tez");
	handleButton("rope");
	handleButton("lean");
	handleButton("onearmc");

	handleButton("dips");
	// handleButton("chestfly");
	// handleButton("decfly");



	// handleButton("decfly");








	// Add more buttons as needed





})(jQuery);