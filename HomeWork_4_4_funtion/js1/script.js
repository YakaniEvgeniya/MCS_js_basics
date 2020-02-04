console.log('Вы в '+window.location);

function haveEnough(Money, Buy, BuyApple, BuyBread, PriceApple, PriceBread) {
	var Money = prompt('Сколько у вас денег?');
	alert('У вас '+Money+' рублей!');
	Money = parseInt(Money);

	var BuyApple = prompt('Сколько вы купили бы яблок?');
	alert('Вы хотите купить '+BuyApple+' яблок!');
	BuyApple = parseInt(BuyApple);

	var BuyBread = prompt('Сколько вы купили бы батонов хлеба?');
	alert('Вы хотите купить '+BuyBread+' батонов хлеба!');
	BuyBread = parseInt(BuyBread);

	var PriceApple = prompt('Сколько стоит одно яблоко?');
	alert('Одно яблоко у вас стоит '+PriceApple+' рублей!');
	PriceApple = parseInt(PriceApple);

	var PriceBread = prompt('Сколько стоит один батон хлеба?');
	alert('Один батон хлеба у вас стоит '+PriceBread+' рублей!');
	PriceBread = parseInt(PriceBread);

	var Buy = BuyApple*PriceApple+BuyBread*PriceBread;

		if (Money > Buy) {
		return ('У вас хватает денег на покупки');
}else {
		return ('У вас не хватает денег на покупки');
}
}

document.body.innerHTML = haveEnough();
