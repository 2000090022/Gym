/*
	Main JS
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

			// Add a 1-second delay before starting the 2-minute timer
			setTimeout(() => {
				// Change the button text to indicate the timer is running
				button.textContent = "2:00"; // Initial time display

				button.style.backgroundColor = "#000000";
				const startTime = Date.now();
				const timerInterval = setInterval(() => {
					const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
					const remainingSeconds = 120 - elapsedSeconds;



					if (remainingSeconds <= 0) {
						button.style.backgroundColor = "#013220";
						clearInterval(timerInterval);
						button.textContent = "Cool..!";
						navigator.vibrate(200);
					} else {
						const minutes = Math.floor(remainingSeconds / 60);
						const seconds = remainingSeconds % 60;
						button.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
					}
				}, 1000); // Update the timer every second
			}, 1000); // Wait 1 second before starting the timer
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
