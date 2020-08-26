// <![CDATA[

/*
 * Author: Simon Mettler
 * https://github.com/simon-mettler
 */

let watchParts = {
	lineToggle: {
		h: 0,
		j: 0,
		k: 0,
		l: 0
	},
	watchToggle: {
		q: 0,	w: 0, e: 0, r: 0, t: 0,
		y: 0,	u: 0, i: 0, o: 0, p: 0,
		a: 0,	s: 0, d: 0, f: 0, g: 0,
		z: 0,	x: 0, c: 0, v: 0, b: 0,
		1: 0, 2: 0, teams: 0
	},
	pauseToggle: {
		q: 0,	w: 0, e: 0, r: 0, t: 0,
		y: 0,	u: 0, i: 0, o: 0, p: 0,
		a: 0,	s: 0, d: 0, f: 0, g: 0,
		z: 0,	x: 0, c: 0, v: 0, b: 0,
		1: 0, 2: 0, all: 0
	},
	pauseSwitch: {
		q: 0,	w: 0, e: 0, r: 0, t: 0,
		y: 0,	u: 0, i: 0, o: 0, p: 0,
		a: 0,	s: 0, d: 0, f: 0, g: 0,
		z: 0,	x: 0, c: 0, v: 0, b: 0,
		1: 0, 2: 0, all: 0
	},
	watchCounter: {
		q: 0,	w: 0, e: 0, r: 0, t: 0,
		y: 0,	u: 0, i: 0, o: 0, p: 0,
		a: 0,	s: 0, d: 0, f: 0, g: 0,
		z: 0,	x: 0, c: 0, v: 0, b: 0,
	}
};

function assignHotkey(watch, hotkey) {

	hotkeys(hotkey, function(event, handler){

		if(watchParts.pauseToggle.all == 1) {
			if(watchParts.pauseToggle[hotkey] == 0) {
				holdWatch(window[watch], hotkey)
			} else {
				discardWatch(window[watch], hotkey)
			}
		} else {
		if(watchParts.watchToggle[hotkey] == 0) {
			startWatch(window[watch], hotkey)
		} else {
			stopWatch(window[watch], hotkey)
		}
		}
	});

}


function createWatch(watch, hotkey) {
	
	window[watch] = new Stopwatch(	function(watch) {
		document.getElementById('wd-' + hotkey).innerHTML = watch.toString();
	}, 50);

}


function startWatch(watch, hotkey) {
	
	if(watchParts.watchToggle[hotkey] == 0) {
		console.log('normal start ' + hotkey);
		event.preventDefault();
		watch.start();
		watchParts.watchToggle[hotkey] = 1;
		document.getElementById('blink-' + hotkey).classList.add("blink");
		document.getElementById('blink-' + hotkey).classList.remove('hold');
	}

}


function stopWatch(watch, hotkey) {

	if(watchParts.watchToggle[hotkey] == 1) {
		console.log('normal stop ' + hotkey);
		event.preventDefault();
		watch.stop();
		watchParts.watchToggle[hotkey] = 0;
		watchParts.watchCounter[hotkey] += 1;
		document.getElementById('c-' + hotkey).innerHTML = watchParts.watchCounter[hotkey];
		document.getElementById('blink-' + hotkey).classList.remove("blink");
	}

}

function holdWatch(watch, hotkey) {

		console.log('hold ' + hotkey);
		watchParts.pauseToggle[hotkey] = 1;
		document.getElementById('c-' + hotkey).innerHTML = watchParts.watchCounter[hotkey];
		document.getElementById('blink-' + hotkey).classList.add('hold');

}


function discardWatch(watch, hotkey) {

		console.log('discard ' + hotkey);
		watchParts.pauseToggle[hotkey] = 0;
		watchParts.watchCounter[hotkey] += 1;
		document.getElementById('c-' + hotkey).innerHTML = watchParts.watchCounter[hotkey];
		document.getElementById('blink-' + hotkey).classList.remove('hold');
}

function pauseGlobal(watch, hotkey) {
	if(watchParts.watchToggle[hotkey] == 1 && watchParts.pauseToggle.all == 1 ) {
		console.log('------ xxx ------');
		watchParts.watchToggle[hotkey] = 0;
		event.preventDefault();
		watch.stop();
		watchParts.pauseToggle[hotkey] = 1;
		// watchParts.watchCounter[hotkey] += 1;
		document.getElementById('c-' + hotkey).innerHTML = watchParts.watchCounter[hotkey];
		document.getElementById('blink-' + hotkey).classList.remove('blink');
		document.getElementById('blink-' + hotkey).classList.add('hold');

	} else if(watchParts.pauseToggle[hotkey] == 1) {
		console.log('------ XXX ------');
		event.preventDefault();
		watch.start();
		watchParts.watchToggle[hotkey] = 1;
		watchParts.pauseToggle[hotkey] = 0;
		document.getElementById('blink-' + hotkey).classList.add('blink');
		document.getElementById('blink-' + hotkey).classList.remove('hold');
	}

}


// Start/Stop Line h
function starth() {
	startWatch(watchQ, 'q');
	startWatch(watchW, 'w');
	startWatch(watchE, 'e');
	startWatch(watchR, 'r');
	startWatch(watchT, 't');
} 

function holdh() {
	holdWatch(watchQ, 'q');
	holdWatch(watchW, 'w');
	holdWatch(watchE, 'e');
	holdWatch(watchR, 'r');
	holdWatch(watchT, 't');
} 

function stoph() {
	stopWatch(watchQ, 'q');
	stopWatch(watchW, 'w');
	stopWatch(watchE, 'e');
	stopWatch(watchR, 'r');
	stopWatch(watchT, 't');
}

function discardh() {
	discardWatch(watchQ, 'q');
	discardWatch(watchW, 'w');
	discardWatch(watchE, 'e');
	discardWatch(watchR, 'r');
	discardWatch(watchT, 't');
}

hotkeys('h', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			holdh();
		} else {
			starth();
		}
});

hotkeys('shift+h', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			discardh();
		} else {
			stoph();
		}
});


// Start/Stop Line j
function startj() {
	startWatch(watchY, 'y');
	startWatch(watchU, 'u');
	startWatch(watchI, 'i');
	startWatch(watchO, 'o');
	startWatch(watchP, 'p');
}

function holdj() {
	holdWatch(watchY, 'y');
	holdWatch(watchU, 'u');
	holdWatch(watchI, 'i');
	holdWatch(watchO, 'o');
	holdWatch(watchP, 'p');
}

function stopj() {
	stopWatch(watchY, 'y');
	stopWatch(watchU, 'u');
	stopWatch(watchI, 'i');
	stopWatch(watchO, 'o');
	stopWatch(watchP, 'p');
}

function discardj() {
	discardWatch(watchY, 'y');
	discardWatch(watchU, 'u');
	discardWatch(watchI, 'i');
	discardWatch(watchO, 'o');
	discardWatch(watchP, 'p');
}

hotkeys('j', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			holdj();
		} else {
			startj();
		}
});

hotkeys('shift+j', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			discardj();
		} else {
			stopj();
		}
});


// Start/Stop Line k
function startk() {
	startWatch(watchA, 'a');
	startWatch(watchS, 's');
	startWatch(watchD, 'd');
	startWatch(watchF, 'f');
	startWatch(watchG, 'g');
}

function holdk() {
	holdWatch(watchA, 'a');
	holdWatch(watchS, 's');
	holdWatch(watchD, 'd');
	holdWatch(watchF, 'f');
	holdWatch(watchG, 'g');
}

function stopk() {
	stopWatch(watchA, 'a');
	stopWatch(watchS, 's');
	stopWatch(watchD, 'd');
	stopWatch(watchF, 'f');
	stopWatch(watchG, 'g');
}

function discardk() {
	discardWatch(watchA, 'a');
	discardWatch(watchS, 's');
	discardWatch(watchD, 'd');
	discardWatch(watchF, 'f');
	discardWatch(watchG, 'g');
}

hotkeys('k', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			holdk();
		} else {
			startk();
		}
});

hotkeys('shift+k', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			discardk();
		} else {
			stopk();
		}
});


// Start/Stop Line l
function startl() {
	startWatch(watchZ, 'z');
	startWatch(watchX, 'x');
	startWatch(watchC, 'c');
	startWatch(watchV, 'v');
	startWatch(watchB, 'b');
}

function holdl() {
	holdWatch(watchZ, 'z');
	holdWatch(watchX, 'x');
	holdWatch(watchC, 'c');
	holdWatch(watchV, 'v');
	holdWatch(watchB, 'b');
}

function stopl() {
	stopWatch(watchZ, 'z');
	stopWatch(watchX, 'x');
	stopWatch(watchC, 'c');
	stopWatch(watchV, 'v');
	stopWatch(watchB, 'b');
}

function discardl() {
	discardWatch(watchZ, 'z');
	discardWatch(watchX, 'x');
	discardWatch(watchC, 'c');
	discardWatch(watchV, 'v');
	discardWatch(watchB, 'b');
}

hotkeys('l', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			holdl();
		} else {
			startl();
		}
});

hotkeys('shift+l', function(event, handler){
		if(watchParts.pauseToggle.all == 1) {
			discardl();
		} else {
			stopl();
		}
});


// Global pause
function globalPause() {

	if(watchParts.pauseToggle.all == 0) {
		console.log('------ pause started ------');
		watchParts.pauseToggle.all = 1;
	} else { 
		console.log('------ pause stopped ------');
		watchParts.pauseToggle.all = 0; 
	}

	pauseGlobal(watchQ, 'q');
	pauseGlobal(watchW, 'w');
	pauseGlobal(watchE, 'e');
	pauseGlobal(watchR, 'r');
	pauseGlobal(watchT, 't');

	pauseGlobal(watchY, 'y');
	pauseGlobal(watchU, 'u');
	pauseGlobal(watchI, 'i');
	pauseGlobal(watchO, 'o');
	pauseGlobal(watchP, 'p');

	pauseGlobal(watchA, 'a');
	pauseGlobal(watchS, 's');
	pauseGlobal(watchD, 'd');
	pauseGlobal(watchF, 'f');
	pauseGlobal(watchG, 'g');

	pauseGlobal(watchZ, 'z');
	pauseGlobal(watchX, 'x');
	pauseGlobal(watchC, 'c');
	pauseGlobal(watchV, 'v');
	pauseGlobal(watchB, 'b');

	pauseGlobal(watch1, '1');
	pauseGlobal(watch2, '2');

}

hotkeys('m', function(event, handler){
	globalPause();
});


// Line h
createWatch('watchQ', 'q');
assignHotkey('watchQ', 'q');

createWatch('watchW', 'w');
assignHotkey('watchW', 'w');

createWatch('watchE', 'e');
assignHotkey('watchE', 'e');

createWatch('watchR', 'r');
assignHotkey('watchR', 'r');

createWatch('watchT', 't');
assignHotkey('watchT', 't');


// Line j
createWatch('watchY', 'y');
assignHotkey('watchY', 'y');

createWatch('watchU', 'u');
assignHotkey('watchU', 'u');

createWatch('watchI', 'i');
assignHotkey('watchI', 'i');

createWatch('watchO', 'o');
assignHotkey('watchO', 'o');

createWatch('watchP', 'p');
assignHotkey('watchP', 'p');


// Line k
createWatch('watchA', 'a');
assignHotkey('watchA', 'a');

createWatch('watchS', 's');
assignHotkey('watchS', 's');

createWatch('watchD', 'd');
assignHotkey('watchD', 'd');

createWatch('watchF', 'f');
assignHotkey('watchF', 'f');

createWatch('watchG', 'g');
assignHotkey('watchG', 'g');


// Line l
createWatch('watchZ', 'z');
assignHotkey('watchZ', 'z');

createWatch('watchX', 'x');
assignHotkey('watchX', 'x');

createWatch('watchC', 'c');
assignHotkey('watchC', 'c');

createWatch('watchV', 'v');
assignHotkey('watchV', 'v');

createWatch('watchB', 'b');
assignHotkey('watchB', 'b');


// Ball possession stopwatch. 
createWatch('watch1', '1');
createWatch('watch2', '2');

function ballposs() {

		if(watchParts.pauseToggle.all == 0) {
	if(watchParts.watchToggle.teams == 0) {
		event.preventDefault();
		watch1.start();
		watch2.stop();
		watchParts.watchToggle.teams = 1;
		watchParts.watchToggle['1'] = 1;
		watchParts.watchToggle['2'] = 0;
		document.getElementById('line-bp').innerHTML = '&#8592;';
		document.getElementById('line-bp').classList.remove('ball-switch');
		document.getElementById('blink-1').classList.add('blink');
		document.getElementById('blink-2').classList.remove('blink');
	} else {
		event.preventDefault();
		watch2.start();
		watch1.stop();
		watchParts.watchToggle.teams = 0;
		watchParts.watchToggle['1'] = 0;
		watchParts.watchToggle['2'] = 1;
		document.getElementById('line-bp').innerHTML = '&#8594;';
		document.getElementById('line-bp').classList.add('ball-switch');
		document.getElementById('blink-1').classList.remove('blink');
		document.getElementById('blink-2').classList.add('blink');
	}
		}
}

hotkeys('n', function(event, handler){
	ballposs();
});

// ]]&gt;
