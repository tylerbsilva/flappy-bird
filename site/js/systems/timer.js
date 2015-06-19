var SetTimer = function(callback, interval) {
	this.callback = callback;
	this.interval = interval;

	this.timerId = 0;
	this.timeoutId = 0;
	this.startTime = 0;
	this.remainingTime = 0;
	this.status = 0; // 0-idle, 1-running, 2-paused, 3-resumed

	this.startTime = new Date();
	this.timerId = window.setInterval(this.callback, this.interval);
	this.status = 1;
};

SetTimer.prototype.pause = function() {
	if (this.status != 1){
    return; // Exit if it's not running
	}
	// Tries to reset any timeout or interval previously set
	window.clearTimeout(this.timeoutId);
	window.clearInterval(this.timerId);
	// Find the remaining time left in the interval
	this.remainingTime = this.interval - ((new Date() - this.startTime) % this.interval);
	this.status = 2;
};

SetTimer.prototype.resume = function() {
	if (this.status != 2) {
		return; // Exit if it's not paused
	}
	this.timeoutId = window.setTimeout(this.offset.bind(this), this.remainingTime);
	this.status = 3;
};

SetTimer.prototype.offset = function() {
	if (this.status != 3) {
		return;// Exit if it's not resumed
	}
	this.startTime = new Date();
	this.timerId = window.setInterval(this.callback, this.interval);
	this.status = 1;
};

exports.SetTimer = SetTimer;

// http://stackoverflow.com/questions/3969475/javascript-pause-settimeout
