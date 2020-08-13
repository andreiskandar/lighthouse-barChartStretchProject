import {
  addTitle,
  listDataIntoLi,
  yTicksToLi,
  addStyle,
  drawBarChart,
} from "./app.js";

drawBarChart(
  [
    ["Option_1", 1],
    ["Option_2", 2],
    ["Option_3", 3],
    ["Option_4", 4],
    ["Option_5", 5],
  ],
  {
    title: "Bar Chart 1",
    width: 400,
    height: 400,
    barWidth: 40,
    barColor: "#519b64",
  },
  ".chart1"
);

// drawBarChart(dataset, option, element);
drawBarChart(
  [
    ["Tesla_Model_3", 322],
    ["Tesla_Model_X", 351],
    ["Tesla_Model_S", 348],
    ["Nissan_LEAF", 220],
    ["Audi_e-tron", 204],
    ["BMW_i3", 153],
    ["Chevy_Bolt", 259],
  ],
  {
    title: "EV Sales in 2019",
    width: 600,
    height: 600,
    barWidth: 40,
    barColor: "#40aaaa",
  },
  ".chart2"
);

drawBarChart(
  [
    ["FY19Q4", 33.36, 4.65, 6.99, 12.51, 6.52],
    ["FY20Q1", 55.95, 5.98, 7.16, 12.72, 10.01],
    ["FY20Q2", 28.96, 4.37, 5.35, 13.35, 6.29],
    ["FY20Q3", 26.42, 6.58, 7.08, 13.16, 6.45],
  ],
  {
    title: "Apple Revenue Segments",
    width: 500,
    height: 500,
    barWidth: 40,
    iphone: "#3271a8",
    ipad: "#a85132",
    mac: "#c4b43b",
    services: "#3bc464",
    other: "#923fbf",
    legend: true,
  },
  ".chart3"
);
