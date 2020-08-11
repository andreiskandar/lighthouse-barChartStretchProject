import {
  addTitle,
  listDataIntoLi,
  yTicksToLi,
  addStyle,
  drawBarChart,
} from "./chart.js";

//drawBarChart(dataset, option, element)

drawBarChart(
  [
    ["Option 1", 1],
    ["Option 2", 2],
    ["Option 3", 3],
    ["Option 4", 4],
    ["Option 5", 5],
  ],
  {
    title: "Bar Chart 1",
    width: 400,
    height: 400,
    barWidth: 40,
    barColor: "#519b64",
  },
  ".row1"
);

drawBarChart(
  [
    ["Tesla Model 3", 322],
    ["Tesla Model X", 351],
    ["Tesla Model S", 348],
    ["Nissan LEAF", 220],
    ["Audi e-tron", 204],
    ["BMW i3", 153],
    ["Chevy Bolt", 259],
  ],
  {
    title: "EV Sales in 2019",
    width: 600,
    height: 300,
    barWidth: 40,
    barColor: "#40aaaa",
  },
  ".row2"
);

// drawBarChart(
//   [
//     ['FY19 Q4', 33.362, 4.65, 6.99, 12.51, 6.52],
//     ['FY20 Q1', 55.95, 5.977, 7.16, 12.715, 10.01],
//     ['FY20 Q2', 28.962, 4.368, 5.351, 13.348, 6.284],
//     ['FY20 Q3', 26.418, 6.582, 7.079, 13.156, 6.45]
//   ],
//   {
//     title: 'Apple Revenue Segments',
//     width: 500,
//     height: 500,
//     barWidth: 40,
//     barColor: '#3271a8',
//     iphone: '#3271a8',
//     ipad: '#a85132',
//     mac: '#c4b43b',
//     services: '#3bc464',
//     other: '#923fbf'
//   },
//   '.row3'
// );
