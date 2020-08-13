export function addTitle(option, element) {
  $(`<h3>${option.title}</h3>`).insertBefore(`${element}`);
}

export function listDataIntoLi(dataset, option, element) {
  const color = Object.entries(option);

  //add scale factor for bar chart
  const scaleFactor = option.height / yMax(dataset);

  // create element
  dataset.forEach((data) => {
    $(`${element}`).append(
      `<li class="${data[0]}">
      </li>`
    );

    let totalHeight = 0;
    for (let i = data.length - 1; i >= 1; i--) {
      //scaling bar for UI
      let height = data[i] * scaleFactor;

      //calculate total height for reposition the bar chart to the bottom of x axis
      totalHeight += Number(height);

      $(`${element} .${data[0]}`).append(
        `<div class="bar${data[i]}"
        style="height:${height}px;
        background-color:${color[i + 3][1]};
        margin-left: ${(option.width / dataset.length - option.barWidth) / 2}px;
        justify-content: center;
        text-align:center;
        width: ${option.barWidth}px;
        font-weight: 400;
        font-size: 75%;
        position: relative;">
          <span class="label ${data[i]}" style="color: whitesmoke">${
          data[i]
        }</span>
        </div>`
      );
      // add hover
      $(`.bar${data[i]}`).hover(function (e) {
        $(this).css("opacity", e.type === "mouseenter" ? 0.5 : 1);
      });
    }

    $(`.${data[0]}`).css({
      top: `${option.height - totalHeight}px`,
    });

    totalHeight = 0;

    // label for x-axis
    $(`${element} .${data[0]}`).append(
      `<span class="x-axis" style:"font-size: 2px;">${data[0]}</span>`
    );
  });
  if (option.legend === true) {
    addLegend(option, element);
  }
}

function addLegend(option, element) {
  const color = Object.entries(option);
  $(
    `<table style="margin-left: auto; margin-right: auto;"></table><br>`
  ).insertBefore(element);
  for (let i = 4; i < color.length - 1; i++) {
    $("table").append(
      `<td style="background-color: ${color[i][1]}; width: 60px">${color[i][0]}</td>
      `
    );
  }
}

export function yTicksToLi(dataset, n, element) {
  const yM = yMax(dataset);
  const height = 100 / n;
  const el = element.replace(".", "_");

  $(`<ul class="yTicks${el}"></ul>`).insertBefore(`${element}`);
  for (let i = yM; i > 0; i -= Math.ceil(yM / n)) {
    $(`.yTicks${el}`).append(
      `<li class="li${el}"><span>${i.toFixed(1)}</span></li>`
    );
  }

  $(`.yTicks${el} .li${el}`).css({
    height: `${height}%`,
  });
}

const yMax = (arr) => {
  let n = [];
  let total = 0;
  arr.forEach((item) => {
    for (let i = 1; i < item.length; i++) {
      total += item[i];
    }
    n.push(total);
    total = 0;
  });
  return Math.max(...n);
};

export function addStyle(data, option, element) {
  const el = element.replace(".", "_");

  $(`${element}`).css({
    width: `${option.width}px`,
    height: `${option.height}px`,
    margin: 0,
    padding: 0,
    "border-left": "whitesmoke solid 2px",
    "border-bottom": "whitesmoke solid 2px",
  });

  $(`${element} li`).css({
    width: `${option.width / data.length}px`,
    height: `${option.height}`,
    display: "table-cell",
    position: "relative",
  });

  $(`.yTicks${el}`).css({
    height: `${option.height}`,
    float: "left",
    width: 0,
    margin: 0,
    padding: 0,
  });

  $(`.yTicks${el} .li${el}`).css({
    "list-style-type": "none",
    "margin-left": "-50px",
    width: 55,
    float: "left",
  });
}

function addElement(element) {
  const name = element.replace(".", "");
  $(".colWrapper").append(`<ul class=${name}></ul><br>`);
}
export function drawBarChart(data, option, element) {
  addElement(element);
  addTitle(option, element);
  listDataIntoLi(data, option, element);
  yTicksToLi(data, 5, element); // 5 is number of ticks on y axis
  addStyle(data, option, element);
}
