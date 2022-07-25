// RICE-VIRT-DATA-PT-05-2022-U-B-MW Module 11
// ----------------------------------------------------------------------------------------------------------
// Purpose  : 
// Created  : 2022 Jun 25 19:36:18 UTC (Meghan E. Hull)
// Modified : 2022 Jun 25 19:41:05 UTC (Meghan E. Hull)
// ----------------------------------------------------------------------------------------------------------

// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

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