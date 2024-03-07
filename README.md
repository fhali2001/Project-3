# Project-3
## Project Overview
This is a data visualization project that focuses on the impact of tourism on top travel destinations in the world in terms of their gross domestic product (GDP). The study will focus on analyzing the trends of these tourism destinations during the time period between 2008 and 2021.

We collected data from the World Bank website, cleaned the data with Pandas, and stored it in a SQL database. We then used JavaScript to design visualizations that include interactive elements such as a dropdown menu with all available nations.

## Files
The webpage is stored under index.html.
The code for our webpage is stored under app.js.
The data for our webpage is stored under data.js.
The two ipynb files contain the initial cleaning of our source data and conversion of data from CSV to JSON.
The Cleaned data folder contains our cleaned CSV of data and the SQL database file.
The Data Sources folder contains our raw data.

## How to Use
To interact with the Javascript powered visuals, the user will select a single country of interest from the dropdown menu.

Once a country is selected, a series of visualizations depicting the relationship between tourism and GDP will be displayed.

## Library Used
We utilized the chart.js library as our additional library not covered in class.

## Ethical Considerations
To mitigate algorithmic bias, we incorporated data from all countries available in our public dataset sources, rather than solely focusing on the top ten tourist destinations. Furthermore, our analysis exclusively utilizes nation-wide metrics such as GDP for all variables. Our approach to data acquisition, implementation, and sourcing is detailed in the project overview, adhering strictly to ethical standards in data analytics. We ensured clarity and integrity for our audience by transparently addressing any biases and limitations through meticulous selection and cleaning of our datasets.
 
To safeguard individual privacy, our analysis exclusively utilizes data points such as GDP or tourism percentages that do not involve personal information. This approach ensures the protection of all individuals included in the dataset. Our data points are recognized for their precision and dependability, derived from the transparent methodology disclosed by our trusted sources. This methodology aligns with professional data collection standards, bolstering the credibility of our analyses. 

## References
Data collected from UNWTO and the World Bank

This project was conducted as prompted at Northwestern's Data Science and Visualizations Bootcamp.
