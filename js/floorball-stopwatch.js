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
	globalToggle: {
		q: 0,	w: 0, e: 0, r: 0, t: 0,
		y: 0,	u: 0, i: 0, o: 0, p: 0,
		a: 0,	s: 0, d: 0, f: 0, g: 0,
		z: 0,	x: 0, c: 0, v: 0, b: 0,
		1: 0, 2: 0
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

		if(watchParts.watchToggle[hotkey] == 0) {
			startWatch(window[watch], hotkey)
		} else {
			stopWatch(window[watch], hotkey)
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
		event.preventDefault();
		watch.start();
		watchParts.watchToggle[hotkey] = 1;
		document.getElementById('blink-' + hotkey).classList.add("blink");
	}

}


function stopWatch(watch, hotkey) {

	if(watchParts.watchToggle[hotkey] == 1) {
		event.preventDefault();
		watch.stop();
		watchParts.watchToggle[hotkey] = 0;
		watchParts.watchCounter[hotkey] += 1;
		document.getElementById('c-' + hotkey).innerHTML = watchParts.watchCounter[hotkey];
		document.getElementById('blink-' + hotkey).classList.remove("blink");
	}

}


function pauseGlobal(watch, hotkey) {

	if(watchParts.watchToggle[hotkey] == 1) {

		event.preventDefault();
		watch.stop();
		watchParts.watchToggle[hotkey] = 0;
		watchParts.globalToggle[hotkey] = 1;
		watchParts.watchCounter[hotkey] += 1;
		document.getElementById('c-' + hotkey).innerHTML = watchParts.watchCounter[hotkey];
		document.getElementById('blink-' + hotkey).classList.remove("blink");

	} else if(watchParts.globalToggle[hotkey] == 1) {

		event.preventDefault();
		watch.start();
		watchParts.watchToggle[hotkey] = 1;
		watchParts.globalToggle[hotkey] = 0;
		document.getElementById('blink-' + hotkey).classList.add("blink");

	}

}


// Start/Stop Line h
function  starth() {
	startWatch(watchQ, 'q');
	startWatch(watchW, 'w');
	startWatch(watchE, 'e');
	startWatch(watchR, 'r');
	startWatch(watchT, 't');
} 

function stoph() {
	stopWatch(watchQ, 'q');
	stopWatch(watchW, 'w');
	stopWatch(watchE, 'e');
	stopWatch(watchR, 'r');
	stopWatch(watchT, 't');
}

hotkeys('h', function(event, handler){
	starth();
});

hotkeys('shift+h', function(event, handler){
	stoph();
});


// Start/Stop Line j
function startj() {
	startWatch(watchY, 'y');
	startWatch(watchU, 'u');
	startWatch(watchI, 'i');
	startWatch(watchO, 'o');
	startWatch(watchP, 'p');
}

function stopj() {
	stopWatch(watchY, 'y');
	stopWatch(watchU, 'u');
	stopWatch(watchI, 'i');
	stopWatch(watchO, 'o');
	stopWatch(watchP, 'p');
}

hotkeys('j', function(event, handler){
	startj();
});

hotkeys('shift+j', function(event, handler){
	stopj();
});


// Start/Stop Line k
function startk() {
	startWatch(watchA, 'a');
	startWatch(watchS, 's');
	startWatch(watchD, 'd');
	startWatch(watchF, 'f');
	startWatch(watchG, 'g');
}

function stopk() {
	stopWatch(watchA, 'a');
	stopWatch(watchS, 's');
	stopWatch(watchD, 'd');
	stopWatch(watchF, 'f');
	stopWatch(watchG, 'g');
}

hotkeys('k', function(event, handler){
	startk();
});

hotkeys('shift+k', function(event, handler){
	stopk();
});


// Start/Stop Line l
function startl() {
	startWatch(watchZ, 'z');
	startWatch(watchX, 'x');
	startWatch(watchC, 'c');
	startWatch(watchV, 'v');
	startWatch(watchB, 'b');
}

function stopl() {
	stopWatch(watchZ, 'z');
	stopWatch(watchX, 'x');
	stopWatch(watchC, 'c');
	stopWatch(watchV, 'v');
	stopWatch(watchB, 'b');
}

hotkeys('l', function(event, handler){
	startl();
});

hotkeys('shift+l', function(event, handler){
	stopl();
});


// Global pause
function globalPause() {

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

hotkeys('n', function(event, handler){
	ballposs();
});

// ]]&gt;
