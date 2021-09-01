var url = localStorage.getItem('mainjs');
if (url === null || url === undefined) {
	url = "Marchenko_Pastur/main.js";
}

elm = document.createElement('script');
elm.src = url;
document.body.appendChild(elm);


document.getElementById('dir_selecter').onchange = function () {
	location.reload();
	localStorage.setItem('mainjs', this.value + '/main.js');
};

