// Read eigenvalues from csv
$.ajax({
	url: "eigenvals.csv",
	async: false,
	success: function (csvd) {
		eigenvals = [].concat(...$.csv.toArrays(csvd)).map(x => parseFloat(x));
		a = eigenvals.pop();
	},
	dataType: "",
	complete: function () {
		// call a function on complete 
	}
});


// Define pdf
var density = function (x, a) {
	let lb = (1 - Math.sqrt(a)) ** 2;
	let ub = (1 + Math.sqrt(a)) ** 2;

	if (0 < a && a < 1) {
		if (lb <= x && x <= ub) {
			return 1 / (2 * Math.PI * x * a) * Math.sqrt((ub - x) * (x - lb));
		} else {
			return 0;
		}
	} else if (1 <= a) {
		if (lb <= x && x <= ub) {
			return 1 / (2 * Math.PI * x * a) * Math.sqrt((ub - x) * (x - lb));
		} else if (x == 0) {
			return 1 - 1 / a;
		} else {
			return 0;
		}
	} else {
		console.error("a must satisfy a > 0");
	}
}

// Define parameters
const domain = [0, Math.max(...eigenvals) + 1];
const step = 0.01;
const n = parseInt(domain[1] - domain[0]) / step;

const x = [...Array(n).keys()].map(function (x) { return x * step; });
const y = x.map(x => density(x, a));


// Define layout of plot
var layout = {
	xaxis: {
		type: "linear", autorange: true, mirror: 'all'
	},
	yaxis: {
		type: "linear", autorange: true, mirror: 'all'
	},
	margin: { t: 0 }
};

var layout_icon = {
	xaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	yaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	margin: { t: 0 },
};


// Line
lineplot = document.getElementById('lineplot');
var trace1 = {
	x: x,
	y: y,
	line: {
		color: 'rgba(0, 0, 255)',
	},
}
Plotly.plot(lineplot, [trace1], layout, { showSendToCloud: false });


// Fill
fillplot = document.getElementById('fillplot');
var trace2 = {
	x: x,
	y: y,
	fill: 'tonexty',
	fillcolor: 'rgba(120, 120, 255, 0.75)',
	line: {
		color: 'rgba(0, 0, 255)',
	},
}

Plotly.plot(fillplot, [trace2], layout, { showSendToCloud: false });


// icon
iconplot = document.getElementById('iconplot');
Plotly.plot(iconplot, [trace2], layout_icon, { staticPlot: true });


// Histogram
histgram = document.getElementById('histgram');
var trace3 = {
	x: eigenvals,
	type: 'histogram',
	histnorm: 'probability density',
	marker: {
		color: "rgba(120, 120, 255, 1)",
		line: {
			color: "rgba(0, 0, 255, 1)",
			width: 1
		}
	},
	opacity: 0.75,
	autobinx: false,
}
Plotly.plot(histgram, [trace3], layout, { showSendToCloud: false });


// Overlay
overlayplot = document.getElementById('overlayplot');
Plotly.plot(overlayplot, [trace2, trace3], layout, { showSendToCloud: false });

