# UFOs
## Project Background
Dana's goal is to create an interactive webpage that allows readers to parse the data around UFO sightings. So, she essentially needs to build two things:
- The webpage that will allow users to view the data (HTML);
- A dynamic table that will present it (JavaScript).
Dana will switch between building the JavaScript table (within the app.js file) and the HTML page (within an index.html file).

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
> **Only one value may be selected for each filter!**</p>
> For example, data may be filtered by only one date, not a range of dates.


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
