var data = [4, 8, 15, 16, 23, 42];
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
var dataset = [];                        //Initialize empty array
for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}
d3.select("body")
    .append("p")
    .text("New paragraph!");
d3.select("body").selectAll("section")
    .data(dataset)
    .enter()
    .append("section")
    .attr("class", "bar")
    .style("height", function(d) {
    return d + "px";
});