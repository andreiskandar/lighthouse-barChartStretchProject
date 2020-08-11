export function addTitle(option, element) {
  $(element).text(option.title);
}

export function listDataIntoLi(dataset, option, element) {
  $(element).append(`
  <br>
  <div class="chart">
    <ul class="yTicks"></ul>
    <ul class="bars"></ul>
  </div>`);

  //add scale factor for bar chart
  const scaleFactor = option.height / yMax(dataset);

  // create element
  dataset.forEach((data) => {
    $(`${element} .bars`).append(
      `<li>
        <div class="bar"style="height:${data[1] * scaleFactor}px">
        <span class="label">${data[1]}</span>
        <span class='x-axis'>${data[0]}</span>
        </div>
      </li>`
    );
  });
}

// export function listDataIntoLi3(dataset, option, element) {
//   $(element).append(`
//   <br>
//   <div class="chart">
//     <ul class="yTicks"></ul>
//     <ul class="bars"></ul>
//   </div>`);

//   //add scale factor for bar chart
//   const scaleFactor = option.height / yMax(dataset);

//   // create element
//   dataset.forEach((data) => {
//     $(`${element} .bars`).append(
//       `<li>
//       </li>`
//     );
//     data.map((d, index) => {
//       if (index == 0) {
//         return $(`${element} .bars .li`).append();
//       } else {
//       }

//       return $(`${element} .bars .li`).append(
//         <div class='bar' style='height:${data[1] * scaleFactor}px'>
//           <span class='label'>${data[1]}</span>
//           <span class='x-axis'>${data[0]}</span>
//         </div>
//       );
//     });
//   });
// }

export function yTicksToLi(dataset, n, element) {
  const yM = yMax(dataset);
  const height = 100 / n;
  //depends on dataset
  for (let i = yM; i > 0; i -= Math.ceil(yM / n)) {
    $(`${element} .yTicks`).append(`<li><span>${i}</span></li>`);
  }
  $(`${element} .yTicks li`).css({
    height: `${height}%`,
  });
}

const yMax = (arr) => {
  return Math.max(...arr.flat().filter((num) => !isNaN(num)));
};

export function addStyle(data, option, element) {
  $(`${element} .chart`).css({
    width: `${option.width}px`,
    height: `${option.height}px`,
  });

  $(`${element} .bars`).css({
    width: `${option.width} px`,
    height: `${option.height}px`,
    margin: 0,
    padding: 0,
    "border-left": "whitesmoke solid",
    "border-bottom": "whitesmoke solid",
    display: "inline-block",
    "align-self": "center",
  });

  $(`${element} .bars li`).css({
    width: `${option.width / data.length}px`,
    height: `${option.height}`,
    display: "table-cell",
    position: "relative",
    "padding-bottom": 0,
  });

  $(`${element} .bars .bar`).css({
    width: `${option.barWidth}px`,
    "margin-left": `${(option.width / data.length - option.barWidth) / 2}px`,
    background: `${option.barColor}`,
    "font-weight": 600,
    "font-size": "75%",
    display: "block",
    bottom: 0,
    position: "absolute",
  });

  $(`${element} .bars .bar`).hover(function (e) {
    $(this).css("opacity", e.type === "mouseenter" ? 0.5 : 1);
  });

  $(`${element} .bars .x-axis`).css({
    display: "block",
    "font-size": "10px",
    width: "100%",
    bottom: "-30px",
    "text-align": "center",
    position: "absolute",
  });

  $(`${element} .yTicks`).css({
    height: "100%",
    float: "left",
    width: 0,
    margin: 0,
    padding: 0,
  });

  $(`${element} .yTicks li`).css({
    "list-style-type": "none",
    "margin-left": "-50px",
    width: 55,
    float: "left",
  });

  $(`${element} .yTicks span`).css({
    "font-size": "13px",
    "font-weight": 400,
    position: "absolute",
  });
}

export function drawBarChart(data, option, element) {
  addTitle(option, element);
  listDataIntoLi(data, option, element);
  yTicksToLi(data, 5, element); //dynamic
  addStyle(data, option, element);
}
