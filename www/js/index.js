var AppMenu = {
	_namespace:'AppMenu',
	_hide: true,
	_itens:'',
	
	_log : function(evt) {
		console.log(this._namespace + ' : ' + evt);
	},
	bindEvents : function() {
		var buttonMenu = document.getElementById("btnShowMenu");
		buttonMenu.addEventListener('touchstart', AppMenu.actionMenu,false);
		//buttonMenu.addEventListener('click', AppMenu.actionMenu,false);
		document.getElementById("main-nav").addEventListener('touchmove', this.actionMenu,false);
		this._log("Events Ready");
	},
	actionMenu : function(evt) {
		this._log(evt);
		evt.preventDefault();
		if(AppMenu.hide) {
			document.getElementById("control").classList.add("menu-active");
			AppMenuItens.initialize();
			AppMenu.hide = false;
		} else {
			document.getElementById("control").classList.remove("menu-active");
			AppMenu.hide = true;
		}
	},
	initialize: function() {
		this._log("Initialize Menu");
		this.bindEvents();
		this._log("Menu Ready");
	}
};

var AppMenuItens = {
	_namespace:'AppMenu',
	itens:'',
	_log : function(evt) {
		console.log(this._namespace + ' : ' + evt);
	},
	_bindEvents: function () {
		this.itens = document.getElementById("mainNav").getElementsByTagName("li");
		for (var i = 0; i < this.itens.length; i++) {
			document.getElementById(this.itens[i].id).addEventListener('touchstart', this.swapItens, false);
			document.getElementById(this.itens[i].id).addEventListener('click', this.swapItens, false);
		}
		this._log("Events ready for: ["+this.itens.length+"] itens");
	},//for better perfomance, remove events
	_unbind:function() {
		for (var i = 0; i < this.itens.length; i++) {
			document.getElementById(this.itens[i].id).removeEventListener('touchstart', this.swapItens, false);
		}
		this._log('Itens Removed');
	},
	_swapItens: function(evt) {
		evt.preventDefault();
		for (var i = 0; i < AppMenuItens.itens.length; i++) {
			if (this.id === AppMenuItens.itens[i].id) {
				document.getElementById('content-'+this.id).style.display = "block";
				document.getElementById(this.id).classList.add("item-active");
				switch(this.id) {
					case 'search':
						Search.initialize();
						break;
				}
			} else {
				document.getElementById('content-'+AppMenuItens.itens[i].id).style.display = "none";
				document.getElementById(AppMenuItens.itens[i].id).classList.remove("item-active");
			}
		}
	},
	initialize: function (){
		this.bindEvents();
		this._log("Itens Ready");
	},
};
// var Login = {
// 	initialize:function() {
// 		document.getElementById("Login").style.display = "block";
// 		document.getElementById("close").addEventListener('touchstart',this.close,false);
// 		for (var i = 0; i < AppMenuItens.itens.length; i++) {
// 			document.getElementById('content-'+AppMenuItens.itens[i].id).classList.add("bluringBack");
// 		}
// 	},
// 	close:function(){
// 		for (var i = 0; i < AppMenuItens.itens.length; i++) {
// 			document.getElementById('content-'+AppMenuItens.itens[i].id).classList.remove("bluringBack");
// 		}
// 		document.getElementById("Login").style.display = "none";
// 	}
// };

// var Holmes = {
// 	initialize: function() {
// 		console.log("Holmes On");
// 	},
// 	userId:'',
// 	actived:false,
// 	activeHolmes: function(e) {
// 		console.log(this.checked);
// 		if(!this.checked) {
// 			if (Holmes.userId !== '') {
// 				document.getElementById("Holmes").style.display = "block";
// 			} else {
// 				Login.initialize();
// 			}
// 		} else {
// 			document.getElementById("Holmes").style.display = "none";
// 		}
// 	}
// };


// var Search = {
// 	initialize: function() {
// 		this.bindEvents();
// 		console.log("Search On");
// 	},
// 	bindEvents: function() {
// 		document.getElementById("btnSearch").addEventListener("touchstart",function(e) { e.preventDefault(); this.search; }, false);
// 		try {
// 			Holmes.initialize();
// 			document.getElementById("activeHolmes").addEventListener("touchstart", Holmes.activeHolmes, false);
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	},
// 	search: function() {
// 	    var query = "";
// 	    if (Holmes.actived) {
// 			query = document.getElementById("query").value;
// 	    } else {
// 			query = document.getElementById("query").value;
// 	    }
// 	    var params = "q="+query;
// 	    var xhr = new XMLHttpRequest();
// 	    xhr.open('get', 'http://192.168.25.4:1337', true);
// 	    xhr.setRequestHeader("Content-type", "application/json");
// 	    xhr.onload = function () {
// 			var response = JSON.parse(xhr.response);
// 			console.log(response);
// 	    };
// 		xhr.onerror = function () {
// 			console.log("Erro AJAX");
// 		};
// 		xhr.send(params);
// 	}
// };

function onDeviceReady() {
	console.log('ready');
	AppMenu.initialize();
};