function SetTimer(callback, interval) {
	var timerId = 0;
	var	timeoutId = 0;
	var	startTime = 0;
	var	remainingTime = 0;
	var	status = 0; // 0-idle, 1-running, 2-paused, 3-resumed

	this.pause = function() {
		if (status != 1){
      return; // Exit if it's not running
    }
		// Tries to reset any timeout or interval previously set
		window.clearTimeout(timeoutId);
		window.clearInterval(timerId);
		// Find the remaining time left in the interval
		remainingTime = interval - ((new Date() - startTime) % interval);
		status = 2;
	};

	this.resume = function() {
		if (status != 2) return; // Exit if it's not paused
		timeoutId = window.setTimeout(this.delayedCallback, remainingTime);
		status = 3;
	};

	this.delayedCallback = function() {
		if (status != 3) return;
		callback();
		//
		startTime = new Date();
		timerId = window.setInterval(callback, interval);
		status = 1;
	};

	startTime = new Date();
	timerId = window.setInterval(callback, interval);
	status = 1;
}

exports.SetTimer = SetTimer;

// http://stackoverflow.com/questions/3969475/javascript-pause-settimeout
