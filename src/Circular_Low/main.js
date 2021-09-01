// Read eigenvalues from csv
const eigenvals = new Points2D('Circular_Low/eigenvals.csv');
const a = read_csv('Circular_Low/params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const curve = new Points2D('Circular_Low/support_boundary.csv');


// Define color color
const color = red;


// Line
lineplot = document.getElementById('ax0');
trace1 = supportBoundary(curve, color);
Plotly.newPlot(lineplot, [trace1], layout, config);


// Fill
fillplot = document.getElementById('ax1');
trace2 = supportBoundary(curve, color, fill = true);
Plotly.newPlot(fillplot, [trace2], template, config);


// icon
iconplot = document.getElementById('ax2');
Plotly.newPlot(iconplot, [trace2], template_icon, config);


// Scatter
scatterplot = document.getElementById('ax3');
trace3 = scatter(eigenvals, color);
Plotly.newPlot(scatterplot, [trace3], template, config);


// Overlay
overlayplot = document.getElementById('ax4');
Plotly.newPlot(overlayplot, [trace1, trace3], template, config);