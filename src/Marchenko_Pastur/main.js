// Read eigenvalues from csv
const eigenvals = new Points2D('Marchenko_Pastur/eigenvals.csv');
const a = read_csv('Marchenko_Pastur/params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const curve = new Points2D('Marchenko_Pastur/density.csv');


// Define color color
const color = blue;

// Line
lineplot = document.getElementById('ax0');
trace1 = density1d(curve, color);
Plotly.newPlot(lineplot, [trace1], template, config);


// Fill
fillplot = document.getElementById('ax1');
trace2 = density1d(curve, color, fill = true);
Plotly.newPlot(fillplot, [trace2], template, config);


// icon
iconplot = document.getElementById('ax2');
Plotly.newPlot(iconplot, [trace2], template_icon, config);


// Histogram
histogram = document.getElementById('ax3');
trace3 = histogram1d(eigenvals.x, color);
Plotly.newPlot(histogram, [trace3], template, config);

// Overlay
overlayplot = document.getElementById('ax4');
Plotly.newPlot(overlayplot, [trace1, trace3], template, config);

