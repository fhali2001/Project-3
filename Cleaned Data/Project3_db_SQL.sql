-- Create the table and column names with their datatypes
CREATE TABLE GDP_tourism_data (
	Indicator varchar(30),
	SeriesID INT,
	SeriesDescription varchar(100),
	GeoAreaCode INT,
	GeoAreaName varchar(100),
	CountryCode varchar(30),
	TimePeriod INT,
	Total DECIMAL,
	Time_Detail INT,
	Source varchar,
	FootNote varchar,
	Nature varchar(30),
	Units varchar(30),
	ReportingType varchar(30),
	SeriesCode varchar(30),
	CountryName varchar,
	IndicatorName varchar,
	IndicatorCode varchar,
	Year INT,
	GDP BIGINT,
	Tourism_GDP BIGINT,
	Arrivals BIGINT
);

-- Select all to make sure table creation worked
SELECT* FROM GDP_tourism_data

