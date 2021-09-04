const config_base = {
	responsive: true,
	showSendToCloud: false,
	showEditInChartStudio: true,
	plotlyServerURL: "https://chart-studio.plotly.com",
	toImageButtonOptions: {
		format: 'svg',
		filename: 'RMT' + 1,
		height: 600,
		width: 600,
		scale: 1
	},
	displayModeBar: true,
	displaylogo: false,
	modeBarButtonsToRemove: [
		'zoomIn2d',
		'zoomOut2d',
		`select2d`,
		'lasso2d',
		`autoScale2d`,
		`resetScale2d`,
		`sendDataToCloud`,
		'hoverClosestCartesian',
		'hoverCompareCartesian'
	]
}

const config = {
	scrollZoom: true,
	...config_base
};

const config_icon = {
	staticPlot: true,
	...config_base,
};