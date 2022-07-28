# UFOs
## Project Background
To support data journalist Dana's latest article on UFO sightings, she has requested an interactive webpage that allows readers to parse the researched UFO sighting data. She essentially needs to two things:
- The webpage that will allow users to view the data (HTML);
- A dynamic table that will present it (JavaScript).

## Purpose
<!-- The purpose of the analysis is well defined. (3 pt) -->
The purpose is to build an interactive webpage to analyze UFO sighting data using HTML, CSS, JavaScript and Bootstrap.

## Resources
### Data Sources & Custom JavaScripts
1. [data.js](static/js/data.js)
2. [app.js](static/js/app.js)

### Software
***Table 1: Software Versions***
| Software | Version |
| :--- | :---: |
| JavaScript | ES6+ |
| BootStrap | 4.0.0 |
| D3 | 4.11.0 |
| Visual Studio Code | 1.69.2 |

# Results
<!-- There is a description of how to perform a search, with images. (4 pt) -->
## Overview of Webpage
The developed UFO webpage is accessible at [https://meghanhull.github.io/UFOs/](https://meghanhull.github.io/UFOs/).  A table of UFO sightings is presented below an introductory section provided by Dana.  The filters are to the left of the table.  

The entire unfiltered data set is shown when the webpage is initially accessed.
<details><summary>View Eaxmple Image</summary>
  <p>
  <img src="ReadmeImages/Unfiltered Table.PNG">
  </p>
</details>

## How to Filter Data
To filter the data table, type the criteria in the filter fields, and press enter.  The table will update automatically.
> **Only one value may be selected for each filter type!**</p>
> For example, data may be filtered by one date and one city, not a range of dates or multiple cities.

<details><summary>Example - One Filter Applied</summary>
  <p>
  <img src="ReadmeImages/Filtered Example - Date.PNG">
  </p>
</details>

<details><summary>Example - Multipe Filters Applied</summary>
  <p>
  <img src="ReadmeImages/Filtered Example - Multiple Criteria.PNG">
  </p>
</details>

## Reset Filters
To reset the filters, delete the values you typed in the filter fields.

# Summary
<!-- The summary addresses one drawback of this webpage (2 pt) -->
Some key limitations of this web page are:
- Cannot select multiples values for the same type of filter (e.g. a range of dates or multiple states);
- No indication of data set extents (e.g. which cities have had sightings, what date ranges are valid).

<!-- The summary addresses two additional recommendations for further development (4 pt) -->
Future improvements should include:
- Button to reset/clear all filters;
- Modify input boxes for City, State, Country, and UFO Shape to be drop downs selections of values in the data set;
- Modify Date input box to have a calendar selector, with the ability to select a range of dates;
- Add question mark pop-ups to describe the data (e.g. what is a formation type shape?).
