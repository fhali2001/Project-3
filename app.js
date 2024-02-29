

let dictList = jsonData[0]

//console.log(jsonData)

let countries = []

for (let i = 0; i < jsonData.length; i++) {
    countries.push(jsonData[i].CountryName)
    //console.log(jsonData[i].CountryName)
}

let uniqueCountries = new Set(countries)

let selector = document.querySelector("#selDataset");
//selector.html("<option>Evan</option>")

for (let i = 0; i < uniqueCountries.length; i++){
    selector.append(`<option> ${uniqueCountries[i]} </option>`)
    //.property("value",uniqueCountries[i]);
  };

console.log(uniqueCountries)


function charts() {

    let data = jsonData[0]
    let year = data.year
    let percentTourismGDP = data.total
}

