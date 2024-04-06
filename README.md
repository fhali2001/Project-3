# Impact of Tourism on Economies
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

# Data Visualization Track Requirements (75 points)

## Data and Delivery (20 points)
- The dataset contains at least 100 unique records. (5 points)
- A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)
- The GitHub repo has a README.md that includes the following: (10 points)
  - An overview of the project and its purpose
  - Instructions on how to use and interact with the project
  - At least one paragraph summarizing efforts for ethical considerations made in the project
  - References for the data source(s)
  - References for any code used that is not your own

## Visualizations (25 points)
- A minimum of three unique views present the data. (10 points)
- The visualizations are presented in a clear, digestible manner. (5 points)
- The data story is easy to interpret for users of all levels. (10 points)

## Usability (30 points)
- The script, notebook, or webpage created to showcase data visualizations runs without error. (10 points)
- A Python or JavaScript library not shown in class is used in the project. (10 points)
- The project includes some level of user-driven interaction, conforming to one of the following designs: (10 points)
  - HTML menus, dropdowns, and/or textboxes to display JavaScript-powered visualizations
  - Flask backend with interactive API routes that serve back Python or JavaScript created plots
  - Visualizations created from user-selected filtered data

# Data Engineering Track Requirements (75 points)

## Database Design (40 points)
- The project uses ETL workflows to ingest data into the database. (10 points)
- The original dataset(s) are transformed prior to storing it in the database. (5 points)
- A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)
- The database has at least two tables (SQL) or collections (NoSQL). (5 points)
- The project documents the choice of the database used and why. (5 points)
- The project includes documentation of the ETL workflow with diagrams or ERD. (10 points)

## Data and Delivery (35 points)
- The database contains at least 100 unique records. (5 points)
- The project uses one additional library not covered in class related to data engineering. (10 points)
- The project includes a method for reading data from the database and displaying it for future use, such as: (10 points)
  - Pandas DataFrame
  - Flask API with JSON output
- The GitHub repo has a README.md that includes the following: (10 points)
  - An overview of the project and its purpose
  - Instructions on how to use and interact with the project
  - At least one paragraph summarizing efforts for ethical considerations made in the project
  - References for the data source(s)
  - References for any code used that is not your own

# Both Track Requirements

## Group Presentation (25 points)
- All group members speak during the presentation. (5 points)
- The content is relevant to the project. (5 points)
- The presentation maintains audience interest. (5 points)
- Content, transitions, and conclusions flow smoothly within any time restrictions. (10 points)

# Grading
This assignment will be evaluated against the requirements and assigned a grade according to the following table:

| Grade  | Points |
|--------|--------|
| A (+/-)| 90+    |
| B (+/-)| 80–89  |
| C (+/-)| 70–79  |
| D (+/-)| 60–69  |
| F (+/-)| < 60   |

# Submission
To submit your project, click Submit, and then provide the URL of your GitHub repository for grading.

**NOTE:** Projects are requirements for graduation. While you are allowed to miss up to two Challenge assignments and still earn your certificate, projects cannot be missed.
