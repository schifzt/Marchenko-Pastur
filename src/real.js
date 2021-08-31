const density_real = {
	name: 'p.d.f.',
	line: {
		dash: 'solid',
		width: 2
	}
};

const histogram_real = {
	name: 'empirical',
	type: 'histogram',
	histnorm: 'probability density',
	marker: {
		line: {
			width: 2
		}
	},
	xbins: {
		size: 0.1
	},
	nbinsx: 10,
};


const layout_real = {
	xaxis: {
		type: "linear", autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true
	},
	yaxis: {
		type: "linear", autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'nonnegative'
	},
};


const layout_real_icon = {
	xaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	yaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	margin: { t: 0 }
};


// template
const real = {
	template: Plotly.makeTemplate({
		layout: layout_real,
		config: { showSendToCloud: false }
	})
};


const real_icon = {
	template: Plotly.makeTemplate({
		layout: layout_real_icon,
		config: { showSendToCloud: false }
	})
};


// Setter to add data to template
const setDensityReal = function (x, y, color, fill = false) {
	let r = { ...density_real };

	r.x = x;
	r.y = y;
	r.line.color = color.line;

	if (fill) {
		r.fill = 'tonexty';
		r.fillcolor = color.fill;
	}

	return r;
}


const setHisotgramReal = function (eigenvals, color, fill = false) {
	let r = { ...histogram_real };

	r.x = eigenvals;
	r.marker.color = color.fill;
	r.marker.line.color = color.fill;

	return r;
}