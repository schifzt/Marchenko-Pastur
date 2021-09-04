class Points2D {
	constructor(file) {
		this.ps = readCSV(file);
		this.x = this.ps[0].map(x => parseFloat(x));
		this.y = this.ps[1].map(x => parseFloat(x));
	}
};