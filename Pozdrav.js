;(function (global, $) {
	var Pozdrav = function(ime, prezime, jezik){
		return new Pozdrav.init(ime, prezime, jezik);
	};
	var podrzaniJezici = ['en','sr'];
	var pozdravi ={
		en:'Hello',
		sr:'Zdravo'
	};
	var formalniPozdrav = {
		en:'Greetings',
		sr:'Pozdrav'
	};
	var logPoruka = {
		en:'Logged in',
		sr:'Ulogovan/a'
	};
	Pozdrav.prototype = {
		punoime: function(){
			return this.ime + ' ' + this.prezime;
		},
		validiraj: function(){
			if (podrzaniJezici.indexOf(this.jezik)===-1) {
				throw "Invalid jezik";
			};
		},

		greeting: function(){
			return pozdravi[this.jezik] + ' ' + this.ime + '!';
		},
		formPoz: function(){
			return formalniPozdrav[this.jezik] + ' '+this.punoime();
		},

		pozdrav: function(formal){
			var por;
			if (formal) {
				por = this.formPoz();
			}else{
				por = this.greeting();
			};

			if (console) {
				console.log(por);
			};
			return this;
		},
		log: function(){
			if (console) {
				console.log(logPoruka[this.jezik] +': '+this.punoime());
			};
			return this;
		},
		postaviJezik: function(jezik){
			this.jezik = jezik;
			this.validiraj();
			return this;
		},
		HTMLPoz: function(selector, formal){
			if (!$) {
				throw 'jQuery nije loadovan';
			};
			if (!selector) {
				throw 'Nema to';
			};
			var por;
			if (formal) {
				por = this.formPoz();
			}else{
				por =this.greeting();
			};

			$(selector).html(por);
			return this;
		}

	};

	
	Pozdrav.init= function(ime, prezime, jezik){
		var self = this;
		self.ime = ime || '';
		self.prezime = prezime || '';
		self.jezik = jezik || 'sr';

	}
	Pozdrav.init.prototype = Pozdrav.prototype;
	global.Pozdrav = global.P$ = Pozdrav;


}(window,jQuery))