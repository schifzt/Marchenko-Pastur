// Read eigenvalues from csv
const eigenvals = read_csv('eigenvals.csv').map(x => parseFloat(x));
const a = read_csv('params.csv').map(x => parseFloat(x))[0];


// Read pdf from csv
const points = read_csv('density.csv');
const x = points[0].map(x => parseFloat(x));
const y = points[1].map(x => parseFloat(x));


// Define color color
const color = red;

// Line
lineplot = document.getElementById('lineplot');
trace1 = setDensityReal(x, y, color);
Plotly.plot(lineplot, [trace1], real);


// Fill
fillplot = document.getElementById('fillplot');
trace2 = setDensityReal(x, y, color, fill = true);
Plotly.plot(fillplot, [trace2], real);


// icon
iconplot = document.getElementById('iconplot');
Plotly.plot(iconplot, [trace2], real_icon);


// Histogram
histogram = document.getElementById('histogram');
trace3 = setHisotgramReal(eigenvals, color);
Plotly.plot(histogram, [trace3], real);

// Overlay
overlayplot = document.getElementById('overlayplot');
Plotly.plot(overlayplot, [trace1, trace3], real);

