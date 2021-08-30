// Read eigenvalues from csv
const eigenvals = read_csv('eigenvals.csv')
const eigenvals_real = eigenvals[0].map(x => parseFloat(x));
const eigenvals_imag = eigenvals[1].map(x => parseFloat(x));

// const a = read_csv('params.csv').map(x => parseFloat(x))[0];

// Read pdf from csv
const points = read_csv('density.csv');
const x = points[0].map(x => parseFloat(x));
const y = points[1].map(x => parseFloat(x));

// Define color theme
const theme = red;


// Define layout of plot
var layout = {
	xaxis: {
		type: "path", autorange: true, mirror: 'all',
		ticks: 'inside', nticks: 10,
		showgrid: true, showline: true, showticklabels: true
	},
	yaxis: {
		type: "path", autorange: true, mirror: 'all',
		ticks: 'inside', nticks: 10,
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
	name: 'p.d.f.',
	x: x,
	y: y,
	line: {
		color: theme.line,
		width: 2
	}
}
Plotly.plot(lineplot, [trace1], layout, { showSendToCloud: false });


// Fill
fillplot = document.getElementById('fillplot');
var trace2 = {
	name: 'p.d.f.',
	x: x,
	y: y,
	fill: 'tonexty',
	fillcolor: theme.fill,
	line: {
		color: theme.line,
		width: 2
	}
}

Plotly.plot(fillplot, [trace2], layout, { showSendToCloud: false });


// icon
iconplot = document.getElementById('iconplot');
Plotly.plot(iconplot, [trace2], layout_icon, { staticPlot: true });


// Scatter
scatterplot = document.getElementById('scatterplot');
var trace3 = {
	name: 'empirical',
	x: eigenvals_real,
	y: eigenvals_imag,
	mode: 'markers',
	type: 'scatter',
	marker: {
		color: theme.fill,
		size: 2
	}
}
Plotly.plot(scatterplot, [trace3], layout, { showSendToCloud: false });


// Overlay
overlayplot = document.getElementById('overlayplot');
Plotly.plot(overlayplot, [trace1, trace3], layout, { showSendToCloud: false });

