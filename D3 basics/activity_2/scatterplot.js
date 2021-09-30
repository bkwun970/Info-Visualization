// **** Your JavaScript code goes here ****
d3.csv('baseball_hr_leaders.csv').then(function(d,i) {

    var colors = ['#38ACEC', '#00BFFF', '#3BB9FF', '#5CB3FF', '#79BAEC', '#82CAFF'
    , '#87CEFA', '#87CEEB', '#A0CFEC'];

    var top_colors = ['#FBB117', '#FBB917', '#FFAE42', '#FFA62F', '#FFA500'];
    var num = 0;
    var top_num = 0;

    d3.select('svg').selectAll('circle').data(d).enter().append('circle')
    .attr("cx", function(d,i) { return scaleYear(d.year)})
    .attr("cy", function(d,i) { return scaleHomeruns(d.homeruns)})
    .attr("r", 2)
    .attr('class', 'circles')
    .style('fill', function(d, i) {
        if (num == 8) {
            num = 0;
        }
        if (top_num == 5) {
            top_num = 0;
        }

        if (d.rank <= 3) {
            return top_colors[top_num++];
        }
        return colors[num++];
    });
});
// **** Functions to call for scaled values ****
function scaleYear(year) {
    return yearScale(year);
}

function scaleHomeruns(homeruns) {
    return hrScale(homeruns);
}

// **** Code for creating scales, axes and labels ****

var yearScale = d3.scaleLinear()
    .domain([1870,2017]).range([60,700]);

var hrScale = d3.scaleLinear()
    .domain([0,75]).range([340,20]);

var svg = d3.select('svg');

svg.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0,345)')
    .call(d3.axisBottom(yearScale).tickFormat(function(d){return d;}));

svg.append('text')
    .attr('class', 'label')
    .attr('transform','translate(360,390)')
    .text('MLB Season');

svg.append('g').attr('class', 'y axis')
    .attr('transform', 'translate(55,0)')
    .call(d3.axisLeft(hrScale));

svg.append('text')
    .attr('class', 'label')
    .attr('transform','translate(15,200) rotate(90)')
    .text('Home Runs (HR)');

svg.append('text')
    .attr('class', 'title')
    .attr('transform','translate(360,30)')
    .text('Top 10 HR Leaders per MLB Season');