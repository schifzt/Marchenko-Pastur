// Read eigenvalues from csv
const eigenvals = new Points2D('eigenvals.csv');
const a = read_csv('params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const curve = new Points2D('support_boundary.csv');


// Define color color
const color = red;


// Line
lineplot = document.getElementById('ax0');
trace1 = supportBoundary(curve, color);
Plotly.plot(lineplot, [trace1], template);


// Fill
fillplot = document.getElementById('ax1');
trace2 = supportBoundary(curve, color, fill = true);
Plotly.plot(fillplot, [trace2], template);


// icon
iconplot = document.getElementById('ax2');
Plotly.plot(iconplot, [trace2], template_icon);


// Scatter
scatterplot = document.getElementById('ax3');
trace3 = scatter(eigenvals, color);
Plotly.plot(scatterplot, [trace3], template);


// Overlay
overlayplot = document.getElementById('ax4');
Plotly.plot(overlayplot, [trace1, trace3], template);