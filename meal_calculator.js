/*
	To Do:
	Create diner objects which represent a single diner.
	Add dishes to a diner's meal
	Total up the cost of all of the diners' meals

	Add a fixed tax percentage to the total bill
	Add a percentage tip to the total bill
	Split the bill fairly among the diners

	Each diner should pay the tax on their own food
	Each diner should pay an equal share of the tip

	If you choose to round the amounts, you may notice that the sum of the amounts does not equal the total bill amount anymore. Don't worry about that, or distribute the discrepancy in a fair way for an extra challenge.
	Print out a total bill
	Print a breakdown for what each diner owes
*/

var Diner = function(tip) {
	console.log('Create diner object');
};

Diner.prototype = {
	fixedTax: 0.06,
	tip: 0.20,
	meals: [],
	total: 0,
	addMeal: function(mealName, mealValue) { 
		this.meals.push({name: mealName, value: mealValue}); 
	},
	calcTotal: function() {
		var total = 0;
		this.meals.forEach(function(obj) {
			total += obj.value;
		});

		total = this.addTax(total);
		total = this.addTip(total);
		this.total = total;
	},
	round: function(number) { return Math.round(number*100)/100; },
	addTax: function(total) { return total*(this.fixedTax+1); },
	addTip: function(total) { return this.round(total*(this.tip+1)) },
	splitBill: function() { return this.round(this.total/this.meals.length); }
};

var instance = new Diner(0.15);

instance.addMeal('steak Ranchero', 8.50);
instance.addMeal('Fajitas', 10.50);

instance.calcTotal();
console.log('total: $', instance.total);

console.log('total per meal: $', instance.splitBill());
