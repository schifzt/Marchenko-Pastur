const layout_bare = {
	dragmode: 'pan',
	hovermode: 'closest',
	xaxis: {
		autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'tozero',
		spikedash: `solid`,
		spikethickness: `2`
	},
	yaxis: {
		autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'tozero',
		spikedash: `solid`,
		spikethickness: `2`
	},
	legend: {
		x: 1,
		xanchor: 'right',
		y: 1
	},
	margin: {
		pad: 0
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
