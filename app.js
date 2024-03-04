let dictList = jsonData[0]

console.log(jsonData[0])


// Empty list for country names
let countries = []

// loop through data to get country names & append to list
for (let i = 0; i < jsonData.length; i++) {
    countries.push(jsonData[i].CountryName)
};


// Turn list into a set to get unique country names
// turn set back into an array to append HTML for the dropdown
let uniqueCountries = new Set(countries)
let uniqueArray = Array.from(uniqueCountries);
let selector = document.querySelector("#selDataset");
uniqueArray.map(elem => selector.innerHTML += `<option value="${elem}">${elem}</option>`)

function optionChanged(country) {
    // let canvas = document.querySelector("#stackedBar")
    // const context = canvas.getContext('2d');
    // context.clearRect(0, 0, canvas.width, canvas.height);
    
   



    chart(country)
    
    
    // canvas.setAttribute("id","stackedBar")
    // canvas.width = 400
    // canvas.height = 400
    // document.querySelector("stackedBarDiv").append(canvas)
}



function chart(country){
    let resultArray = jsonData.filter(data => data.CountryName == country); 
    
    console.log(resultArray)

    // Create linechart data


    let year = resultArray.map(row => row.Year)
    
    let year2 = resultArray.map(row => row.Year)

    let year3 = resultArray.map(row => row.Year)
    
    let gdpPercentage = resultArray.map(row => row.Total)
    
    let tourismGDP = resultArray.map(row => row.Tourism_GDP)
   
    let GDP = resultArray.map(row => row.GDP)

    let arrivals = resultArray.map(row => row.Arrivals)
    console.log(arrivals)
    
    
    let lineData = [{
        x: year,
        // y: gdpPercentage,
        y: GDP,
        type: 'scatter', // Set the chart type to 'scatter' for a line chart
        mode: 'lines', // Show both lines and markers
        line: { color: 'rgb(75, 192, 192)' }, // Set the line color
        //name: 'Sample Data' // Set the legend label

    }];

    let lineLayout = {
        // title: 'Percent Tourism GDP by Year', // Set the chart title
        title: 'GDP by Year', // Set the chart title
        xaxis: { title: 'Year' }, // Set the x-axis title
        // yaxis: { title: '% Tourism GDP of GDP' } // Set the y-axis title
        yaxis: { title: 'GDP' } // Set the y-axis title

    };

    
    // Sort the lineData by x-values
    lineData[0].x.forEach((value, index) => {
        lineData[0].x[index] = [value, lineData[0].y[index]];
    });
    
    lineData[0].x.sort(function(a, b) {
        return a[0] - b[0];
    });
    
    // Update y-values accordingly
    lineData[0].y = lineData[0].x.map(pair => pair[1]);
    lineData[0].x = lineData[0].x.map(pair => pair[0]);

    Plotly.newPlot("line",lineData,lineLayout);


    //Create bar chart data
    let barData = {
        labels: year2,
        datasets: [
            {
                label: 'Tourism GDP',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data:tourismGDP
            },
            {
                label: 'Total GDP',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data:GDP
            }
        ]
    };

    //Create bar chart confirguration options
    let options = {
        scales: {
            xAxes: [{stacked:true}],
            yAxes: [{stacked:true}]
        }
    };

    //Creat the bar chart
    let ctx = document.getElementById('stackedBar').getContext('2d');
    let stackedBar = new Chart(ctx, {
        // type: 'bar',
        // data: barData,
        // options: options
    });
    stackedBar.destroy()
    stackedBar = new Chart(ctx, {
        type: 'bar',
        data: barData,
        options: options
    });

    // second line chart
    let line2Data = [{
        x: year3,
        y: arrivals,
        type: 'scatter', // Set the chart type to 'scatter' for a line chart
        mode: 'lines', // Show both lines and markers
        line: { color: 'rgb(99,49,148)' }, // Set the line color
        //name: 'Sample Data' // Set the legend label

    }];

    let line2Layout = {
        title: 'International Tourism Arrivals by Year', // Set the chart title
        xaxis: { title: 'Year' }, // Set the x-axis title
        yaxis: { title: '# of Arrivals' } // Set the y-axis title
    };

    
    // Sort the lineData by x-values
    line2Data[0].x.forEach((value, index) => {
        line2Data[0].x[index] = [value, line2Data[0].y[index]];
    });
    
    line2Data[0].x.sort(function(a, b) {
        return a[0] - b[0];
    });
    
    // Update y-values accordingly
    line2Data[0].y = line2Data[0].x.map(pair => pair[1]);
    line2Data[0].x = line2Data[0].x.map(pair => pair[0]);

    Plotly.newPlot("secondLine",line2Data,line2Layout);


}
console.log(jsonData[0].CountryName)
//chart("Algeria")