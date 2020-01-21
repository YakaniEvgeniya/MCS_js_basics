let Money = prompt('Сколько у вас денег?');
alert('У вас '+Money+' рублей!');

let BuyApple = prompt('Сколько вы купили бы яблок?');
alert('Вы хотите купить '+BuyApple+' яблок!');

let BuyBread = prompt('Сколько вы купили бы батонов хлеба?');
alert('Вы хотите купить '+BuyBread+' батонов хлеба!');

let PriceApple = prompt('Сколько стоит одно яблоко?');
alert('Одно яблоко у вас стоит '+PriceApple+' рублей!');

let PriceBread = prompt('Сколько стоит один батон хлеба?');
alert('Один батон хлеба у вас стоит '+PriceBread+' рублей!');

Buy = BuyApple*PriceApple+BuyBread*PriceBread;

if (Money > Buy) {
	document.write(true)
	alert('У вас достаточно денег, всего было у вас '+Money+' рублей, а покупки будут стоить вам '+Buy+' рублей');
}
else { 
	document.write(false)
	alert('У вас не хватает денег, всего было у вас '+Money+' рублей, а покупки будут стоить вам '+Buy+' рублей');
}
