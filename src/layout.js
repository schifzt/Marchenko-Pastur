const layout = {
	xaxis: {
		autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'tozero'
	},
	yaxis: {
		autorange: true, mirror: 'all', ticks: 'inside',
		showgrid: true, showline: true, showticklabels: true,
		rangemode: 'tozero'
	},
	legend: {
		x: 1,
		xanchor: 'right',
		y: 1
	}
};


const layout_icon = {
	xaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	yaxis: {
		showgrid: false, showline: false, showticklabels: false
	},
	margin: { t: 0 }
};


// template
const template = {
	template: Plotly.makeTemplate({
		layout: layout,
		config: { showSendToCloud: false }
	})
};


const template_icon = {
	template: Plotly.makeTemplate({
		layout: layout_icon,
		config: { showSendToCloud: false }
	})
};
