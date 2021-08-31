const read_csv = function (path) {
	$.ajax({
		url: path,
		async: false,
		success: function (csvd) {
			// ret = ([].concat(...$.csv.toArrays(csvd)));
			r = $.csv.toArrays(csvd);
		},
		dataType: 'text',
	});

	return r;
}