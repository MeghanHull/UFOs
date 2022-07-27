// RICE-VIRT-DATA-PT-05-2022-U-B-MW Module 11 Challenge
// ----------------------------------------------------------------------------------------------------------
// Purpose  : Build filtered JS table from existing JS table
// Created  : 2022 Jun 25 19:36:18 UTC (Meghan E. Hull)
// Modified : 2022 Jun 27 19:41:05 UTC (Meghan E. Hull)
// ----------------------------------------------------------------------------------------------------------

// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// ----------------------------------------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------------------------------------
// Function to build new table
function buildTable(data) {
    // Clear existing table
    tbody.html("");
    // Loop through data
    data.forEach((dataRow) => {
        // Add row
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
 }
// ---------------------------------------------------------------------------------------------------------- 
// 3. Use this function to update the filters. 
function updateFilters() {
  // Retrieve the changed value from the filter
  // 4a. Save the element that was changed as a variable.
  let element = d3.select(this);
  // 4b. Save the value that was changed as a variable.
  let elementValue = element.property("value");
  // 4c. Save the id of the filter that was changed as a variable.
  let elementId = element.attr("id");

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    filters[elementId]=elementValue;
  }
  else {
    delete filters[elementId];
  }
  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}
// ----------------------------------------------------------------------------------------------------------
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  
  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}
// ----------------------------------------------------------------------------------------------------------

// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);