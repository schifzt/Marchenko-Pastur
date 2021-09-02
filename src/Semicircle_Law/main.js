// Read eigenvalues from csv
const pwd = 'Semicircle_Law/';
const eigenvals = new Points2D(pwd + 'eigenvals.csv');
const a = read_csv(pwd + 'params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const curve = new Points2D(pwd + 'density.csv');


// Define color color
const color = blue;

// Line
lineplot = document.getElementById('ax0');
trace1 = density1d(curve, color);
Plotly.newPlot(lineplot, [trace1], layout, config);


// Fill
fillplot = document.getElementById('ax1');
trace2 = density1d(curve, color, fill = true);
Plotly.newPlot(fillplot, [trace2], layout, config);


// icon
iconplot = document.getElementById('ax2');
Plotly.newPlot(iconplot, [trace2], layout_icon, config_icon);


// Histogram
histogram = document.getElementById('ax3');
trace3 = histogram1d(eigenvals, color);
Plotly.newPlot(histogram, [trace3], layout, config);

// TODO: tick plot
// scatterplot = document.getElementById('ax3');
// trace3 = scatter(eigenvals, color);
// Plotly.newPlot(scatterplot, [trace3], layout, config);


// Overlay
overlayplot = document.getElementById('ax4');
Plotly.newPlot(overlayplot, [trace1, trace3], layout, config);

