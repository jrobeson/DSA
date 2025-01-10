//O(n)
function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}
// logItems(10);

function logExpoItems(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

// logExpoItems(10)

//drop constatns
function dropConstants(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	for (let j = 0; j < n; j++) {
		console.log(j);
	}
}
// dropConstants(3);

function dropNonDominants(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
	for (let k = 0; k < n; k++) {
		console.log(k);
	}
}

// dropNonDominants(10);

function addItems(n) {
	return n + n;
}

// addItems(10);

