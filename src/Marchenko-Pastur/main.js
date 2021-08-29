// Read eigenvalues from csv
const eigenvals = read_csv('eigenvals.csv').map(x => parseFloat(x));
const a = read_csv('params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const points = read_csv('density.csv');
const x = points[0].map(x => parseFloat(x));
const y = points[1].map(x => parseFloat(x));

// Define color theme
const theme = theme;


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
		color: theme.line,
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
	fillcolor: theme.fill,
	line: {
		color: theme.line,
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
		color: theme.fill,
		line: {
			color: theme.line,
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

