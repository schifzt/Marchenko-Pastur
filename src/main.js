const plot_color = blue;

const f = function (dirname) {
	// Load csv files
	eigenvals = new Points2D(dirname + '/' + 'eigenvals.csv');
	a = readCSV(dirname + '/' + 'params.csv').map(x => parseFloat(x))[0];

	curve = new Points2D(dirname + '/' + 'curve.csv');

	// Load config
	let rmt_config = readJSON(dirname + '/' + 'rmt_config.json');
	plot_types = rmt_config['plot_types'];

	while (plot_selecter.firstChild) {
		plot_selecter.removeChild(plot_selecter.firstChild);
	}

	// Create plot type selecter
	let createSelecter = function (parent, key, enable, hidden) {
		let elm = document.createElement('option');
		elm.value = key;
		elm.innerText = key;
		elm.disabled = !enable;
		elm.hidden = hidden;
		parent.appendChild(elm);
	};

	createSelecter(plot_selecter, "Select a plot type", true, true);
	Object.keys(plot_types).forEach(function (key) {
		createSelecter(plot_selecter, key, plot_types[key], !plot_types[key]);
	});

}


if (localStorage.hasOwnProperty('dirname')) {
	dirname = localStorage.getItem('dirname');
	console.log("storage " + dirname);

	if (dirname !== null) {
		f(dirname);
	}
}

document.getElementById('dir_selecter').onchange = function () {
	dirname = this.value;
	console.log("selecter " + dirname);
	if (dirname !== null) {
		f(dirname);
	}
}


const g = function (curve, eigenvals, plot_type) {

	plot = document.getElementById('ax');

	switch (plot_type) {
		case "density1D":
			trace = [density1D(curve, plot_color)];
			break;
		case "supportBoundary":
			trace = [supportBoundary(curve, plot_color)];
			break;
		case "fill":
			if (plot_types["supportBoundary"]) {
				trace = [supportBoundary(curve, plot_color, fill = true)];
			} else if (plot_types["density1D"]) {
				trace = [density1D(curve, plot_color, fill = true)];
			}
			break;
		case "icon":
			break;
		case "histogram1D":
			trace = [histogram1D(eigenvals, plot_color)];
			break;
		case "scatter":
			trace = [scatter(eigenvals, plot_color)];
			break;
		case "overlay":
			if (plot_types["supportBoundary"]) {
				trace1 = supportBoundary(curve, plot_color);
			} else if (plot_types["density1D"]) {
				trace1 = density1D(curve, plot_color);
			}

			if (plot_types["histogram1D"]) {
				trace2 = histogram1D(eigenvals, plot_color);
			} else if (plot_types["scatter"]) {
				trace2 = scatter(eigenvals, plot_color);
			}

			trace = [trace1, trace2];
			break;
		default:
			console.error("Error: \"" + plot_type + "\" is not supported.");
			break;
	}

	Plotly.react(plot, trace, layout, config);

}

// Set plot_type
if (localStorage.hasOwnProperty('plot_type')) {
	plot_type = localStorage.getItem('plot_type');
	console.log("storage " + plot_type);

	if (curve !== null && eigenvals !== null && plot_type !== null) {
		g(curve, eigenvals, plot_type);
	}
}

document.getElementById('plot_selecter').onchange = function () {
	plot_type = this.value;
	console.log("selecter " + plot_type);

	localStorage.setItem('dirname', dirname);
	localStorage.setItem('plot_type', plot_type)

	if (curve !== null && eigenvals !== null && plot_type !== null) {
		g(curve, eigenvals, plot_type);
	}
};

