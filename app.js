var p = P$('Tamara', 'Naumovic');
p.pozdrav();
p.pozdrav().postaviJezik('en').pozdrav(true);

$('#login').click(function() {
		var ulogovanPoz = P$('Ana','Basaric');

		$('#logindiv').hide();

		ulogovanPoz.postaviJezik($('#lang').val()).HTMLPoz('#greeting', true).log();
	}

	)