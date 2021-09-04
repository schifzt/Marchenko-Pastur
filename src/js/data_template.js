const density1D = function (points2d, color, fill = false) {

	let r = {
		name: 'p.d.f.',
		x: points2d.x,
		y: points2d.y,
		line: {
			color: color.line,
			dash: 'solid',
			width: 2
		}
	};

	if (fill) {
		r.fill = 'tonexty';
		r.fillcolor = color.fill;
	}

	return r;
};


const histogram1D = function (points2d, color, fill = false) {

	let r = {
		name: 'empirical',
		type: 'histogram',
		histnorm: 'probability density',
		x: points2d.x,
		marker: {
			color: color.fill,
			line: {
				color: color.fill,
				width: 2
			},
			pattern: {
				fillmode: 'overlay'
			}
		},
		opacity: 0.8,
		xbins: {
			size: 0.05
		}
	};

	return r;
};


const supportBoundary = function (points2d, color, fill = false) {

	let r = {
		name: 'boundary of the support',
		x: points2d.x,
		y: points2d.y,
		line: {
			color: color.line,
			dash: 'solid',
			width: 2
		}
	};

	if (fill) {
		r.fill = 'tonexty';
		r.fillcolor = color.fill;
	}

	return r;
};

const scatter = function (points2d, color) {

	let r = {
		name: 'empirical',
		mode: 'markers',
		type: 'scatter',
		x: points2d.x,
		y: points2d.y,
		marker: {
			color: color.fill,
			size: 3
		}
	};

	return r;
};