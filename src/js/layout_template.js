const layout_bare = {
	dragmode: 'pan',
	hovermode: 'closest',
	xaxis: {
		autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'tozero',
		spikedash: `solid`,
		spikethickness: `2`,
		automargin: false
	},
	yaxis: {
		autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'tozero',
		spikedash: `solid`,
		spikethickness: `2`,
		automargin: false,
	},
	legend: {
		x: 1,
		xanchor: 'right',
		y: 1
	},
	modebar: {
		orientation: `h`
	},
	margin: {
		autoexpand: false,
		pad: 0,
		t: 25, // fix
		r: 20, // fix
		b: 50, // shift the same amount
		l: 55, // shift the same amount
	}
};


const layout_icon_bare = {
	dragmode: false,
	hovermode: false,
	xaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	yaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	margin: {
		t: 0,
		b: 0,
		l: 0,
		r: 0,
	}
};


// template
const layout = {
	template: Plotly.makeTemplate({
		layout: layout_bare,
	})
};


const layout_icon = {
	template: Plotly.makeTemplate({
		layout: layout_icon_bare,
	})
};
