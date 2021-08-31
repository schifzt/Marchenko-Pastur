// Read eigenvalues from csv
const eigenvals = new Points2D('eigenvals.csv');
const a = read_csv('params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const curve = new Points2D('density.csv');


// Define color color
const color = blue;

// Line
lineplot = document.getElementById('ax0');
trace1 = density1d(curve, color);
Plotly.plot(lineplot, [trace1], template);


// Fill
fillplot = document.getElementById('ax1');
trace2 = density1d(curve, color, fill = true);
Plotly.plot(fillplot, [trace2], template);


// icon
iconplot = document.getElementById('ax2');
Plotly.plot(iconplot, [trace2], template_icon);


// Histogram
histogram = document.getElementById('ax3');
trace3 = histogram1d(eigenvals.x, color);
Plotly.plot(histogram, [trace3], template);

// Overlay
overlayplot = document.getElementById('ax4');
Plotly.plot(overlayplot, [trace1, trace3], template);

