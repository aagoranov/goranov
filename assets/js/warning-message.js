	function showWarningMessage() {
		document.getElementById("warning-message").style.display = "block";
		document.getElementById("wrapper").style.display = "none";
	}

	function hideWarningMessage() {
		document.getElementById("warning-message").style.display = "none";
		document.getElementById("wrapper").style.display = "block";
	}

	function checkScreenSize() {
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;
		const minScreenWidth = 250;

		if (screenWidth < minScreenWidth) {
			showWarningMessage();
		} else {
			hideWarningMessage();
		}
	}

	checkScreenSize();

	window.addEventListener("resize", checkScreenSize);