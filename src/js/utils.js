const readCSV = function (path) {
	$.ajax({
		url: path,
		dataType: 'text',
		async: false,
		success: function (data) {
			r = $.csv.toArrays(data);
		},
	});
	return r;
}

const readJSON = function (path) {
	$.ajax({
		url: path,
		dataType: 'json',
		async: false,
		success: function (data) {
			r = data
		},
	});

	return r;
}