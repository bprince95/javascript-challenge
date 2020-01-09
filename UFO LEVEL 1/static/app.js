var tbody = d3.select("tbody")
var cities = data;

console.log(data);


data.forEach(function(UFO1) {
    console.log(UFO1);
    var row = tbody.append("tr");
    Object.entries(UFO1).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    }); 
  });



var button = d3.select("#filter-btn");

button.on("click", function() {
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(cities);


  var filteredData = cities.filter(cities => cities.datetime === inputValue);
  console.log(filteredData);
  
  d3.selectAll("tr").selectAll("td").remove()

  filteredData.forEach((UFO1) =>{
  var row = tbody.append("tr")
  Object.entries(UFO1).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
  });
});

