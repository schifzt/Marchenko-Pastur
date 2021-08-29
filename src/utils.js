const read_csv = function (path) {
	$.ajax({
		url: path,
		async: false,
		success: function (csvd) {
			// ret = ([].concat(...$.csv.toArrays(csvd)));
			ret = $.csv.toArrays(csvd);
		},
		dataType: 'text',
	});

	return ret;
}