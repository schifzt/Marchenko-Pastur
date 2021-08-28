// Read eigenvalues from csv
$.ajax({
	url: 'eigenvals.csv',
	async: false,
	success: function (csvd) {
		eigenvals = [].concat(...$.csv.toArrays(csvd)).map(x => parseFloat(x));
		a = eigenvals.pop();
	},
	dataType: 'text',
	complete: function () {
		// call a function on complete 
	}
});


// Define p.d.f.
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


// Define color pallet
const blue = { line: 'rgba(0, 0, 255, 1)', fill: 'rgba(120, 120, 255, 0.75)' }
const red = { line: 'rgba(255, 0, 0, 1)', fill: 'rgba(255, 128, 128, 0.75)' }


// Define layout of plot
var layout = {
	xaxis: {
		type: "linear", autorange: true, mirror: 'all',
		ticks: 'inside', tick0: '0', dtick: '0.5',
		rangemode: 'nonnegative',
		showgrid: true, showline: true, showticklabels: true
	},
	yaxis: {
		type: "linear", autorange: true, mirror: 'all',
		ticks: 'inside', tick0: '0', dtick: '0.2',
		rangemode: 'nonnegative',
		showgrid: true, showline: true, showticklabels: true
	},
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
		color: red.line,
		dash: 'dot'
	},
	name: 'p.d.f.',
}
Plotly.plot(lineplot, [trace1], layout, { showSendToCloud: false });


// Fill
fillplot = document.getElementById('fillplot');
var trace2 = {
	x: x,
	y: y,
	fill: 'tonexty',
	fillcolor: red.fill,
	line: {
		color: red.line,
	},
	name: 'p.d.f.',
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
		color: red.fill,
		line: {
			color: red.line,
			width: 1
		}
	},
	autobinx: false,
	name: 'empirical',
}
Plotly.plot(histgram, [trace3], layout, { showSendToCloud: false });


// Overlay
overlayplot = document.getElementById('overlayplot');
Plotly.plot(overlayplot, [trace1, trace3], layout, { showSendToCloud: false });

