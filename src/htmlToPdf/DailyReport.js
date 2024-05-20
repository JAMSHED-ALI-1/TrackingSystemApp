// DailyReportHtml.js
const DailyReportHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Performance Report</title>
  <link rel="shortcut icon" href="../../assets/qiktrack-logo-icon.png" />
  <!-- Your CSS styles -->
</head>
<body>
  <!-- Your HTML content -->
</body>
</html>
`;

export default DailyReportHtml;


// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Performance Report</title>
//     <link rel="shortcut icon" href="../../assets/qiktrack-logo-icon.png" />
//     <style>
//         body {
//             font-family: 'Arial', sans-serif;
//             margin: 20px;
//             background-color: #f4f4f4;
//         }

//         h1 {
//             text-align: center;
//             color: #000;
//         }

//         table {
//             border-collapse: collapse;
//             width: 100%;
//             margin-bottom: 20px;
//             background-color: #fff;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//             /* border: 1px solid red; */
//         }

//         th,
//         td {
//             border: 1px solid #ddd;
//             padding: 12px;
//             text-align: left;
//         }

//         th {
//             background-color: #29A7E4;
//             color: #fff;
//         }

//         .chart-container {
//             width: 80%;
//             margin: 20px auto;
//             background-color: #fff;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//             padding: 20px;
//         }

//         .bar {
//             display: inline-block;
//             height: 20px;
//             background-color: #29A7E4;
//         }

//         .top-nav {
//             border-radius: 6px;
//             gap: 0;
//             display: flex;
//             flex-direction: row;
//             align-items: center;

//         }

//         img {
//             height: 100px;
//             width: 100px;
//         }
//     </style>
// </head>

// <body>

//     <div class="top-nav">
//         <img src="../../assets/qiktrack-square-icon.png" alt="logo">
//         <h1>Qiktrack</h1>
//     </div>

//     <h1>Performance Report</h1>

//     <table>
//         <thead>
//             <tr>
//                 <th>Device</th>
//                 <th>Total Running Time (ms)</th>
//                 <th>Total Stoppage Time (ms)</th>
//                 <th>Total Idle Time (ms)</th>
//                 <th>Total No Info Time (ms)</th>
//             </tr>
//         </thead>
//         <tbody>
//             <!-- <tr>
//         <td>VS-31</td>
//         <td>0</td>
//         <td>0</td>
//         <td>0</td>
//         <td>0</td>
//       </tr> -->
//             <!-- Add rows for other devices -->
//             <!-- ... -->
//             <!-- <tr>
//         <td>VS-44</td>
//         <td>8426</td>
//         <td>4988</td>
//         <td>120000</td>
//         <td>120000</td>
//       </tr> -->
//         </tbody>
//     </table>

//     <div class="chart-container">
//         <h2>Running Time Comparison</h2>

//         <div class="bar" style="width: 20%;"></div>

//     </div>

// </body>

// </html>

// <script>
//     // Sample JSON data
//     const jsonData = {
//         "message": "all time in milliseconds",
//         "totalRunningTime": 8426,
//         "totalStopageTime": 4988,
//         "totalIdleTime": 120000,
//         "totalNoInfoTime": 120000,
//         "devicesArr": [
//             { "reg_no": "VS-31", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "VS-93", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "HARSH", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "VS-51", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "VS-50", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "Test-64", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "VS-44", "total_time_sum": 8426, "total_distance_sum": 95.70995568848763 },
//             { "reg_no": "Test-63", "total_time_sum": 0, "total_distance_sum": 0 },
//             { "reg_no": "VS-23", "total_time_sum": 0, "total_distance_sum": 0 }
//         ]
//     };

//     // Function to populate the table
//     function populateTable() {
//         const tableBody = document.querySelector('tbody');

//         jsonData.devicesArr.forEach(device => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//           <td>${device.reg_no}</td>
//           <td>${device.total_time_sum}</td>
//           <td>${device.total_time_sum}</td>
//           <td>${device.total_time_sum}</td>
//           <td>${device.total_time_sum}</td>
//         `;
//             tableBody.appendChild(row);
//         });
//     }

//     // Function to populate the bar chart
//     function populateBarChart() {
//         const chartContainer = document.querySelector('.chart-container');

//         jsonData.devicesArr.forEach(device => {
//             const bar = document.createElement('div');
//             bar.className = 'bar';
//             bar.style.width = `${(device.total_time_sum / jsonData.totalRunningTime) * 100}%`;
//             chartContainer.appendChild(bar);
//         });
//     }

//     // Call the functions to populate table and bar chart
//     populateTable();
//     populateBarChart();
// </script>