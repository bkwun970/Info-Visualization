
// **** Your JavaScript code goes here ****
d3.csv('baseball_hr_leaders_2017.csv').then(function(d) {
	//console.log(d);

	var p = d3.select("body").selectAll("p")
	.data(d)
	.enter()
	.append("p")
	.text((function(d, i) { 
		return "NAME: " + d.name + ", HR RANK: " + d.rank +
		", YEAR: " + d.year + ", HOMERUNS: " + d.homeruns;
	}))
	.style('font-weight', function(d) {
		return d.name == 'Giancarlo Stanton' ? 'bold' : 'normal';
	})


	var rows = d3.select("tbody").selectAll("tr").data(d).enter().append("tr");

	rows.append("td").text(function(d,i) {
		return d.rank;
	})
	.attr('class', 'ranks');

	rows.append("td").text(function(d,i) {
		return d.name;
	});
	rows.append("td").text(function(d,i) {
		return d.homeruns
	})
	.attr('class', 'num_homeruns');
});
