# Bar Chart Stretch Project
### Preparation work for Web Development Bootcamp in Lighthouse Labs

### Functional Requirements
You should have a simple API to draw a bar chart. The function should be used by your HTML page to render the chart into your demo page. The signature of the function should be as follows:

drawBarChart(data, options, element);
The data parameter will be the data the chart should work from Start with just an Array of numbers
e.g. [1, 2, 3, 4, 5]

The options parameter should be an object which has options for the chart.
e.g. width and height of the bar chart

The element parameter should be a DOM element or jQuery element that the chart will get rendered into.
![Screenshot from 2020-08-11 16-02-57](https://user-images.githubusercontent.com/56459037/89959378-25713980-dbf1-11ea-81b8-b517a21b10f0.png)

### Display Requirements
Bar Chart
Display a list of single values, horizontally as a bar chart

Numerical values should also be displayed inside of the bar
The position of values should be customizable too:
Top, centre or bottom of the bar.
Bar sizes should be dependent on the data that gets passed in

Bar width should be dependent on the total amount of values passed.
Bar height should be dependent on the values of the data.
Bar properties that should be customizable:

Bar Colour
Label Colour
Bar spacing (space between bars)
Bar Chart axes
X-axis should show labels for each data value

Think about how you would need to structure your data to associate a label to each value
Y-axis should show ticks at certain values

Think about where you would configure these values. Should they be part of the data or the options to the bar chart function.
The title of the bar chart should be able to be set and shown dynamically

The title of the bar chart should also be customizable:

Font Size
Font Colour 
![chart 1](https://user-images.githubusercontent.com/56459037/89959465-505b8d80-dbf1-11ea-9b3e-f04ba2e383ce.png)

![chart2](https://user-images.githubusercontent.com/56459037/89959683-df68a580-dbf1-11ea-9430-b7e5d10c6e7f.png)

![Screenshot from 2020-08-12 20-03-14](https://user-images.githubusercontent.com/56459037/90089723-f1704400-dcd6-11ea-8ffa-a516dba9611f.png)


### Resources
https://github.com/d3/d3/blob/master/API.md

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction

http://blocks.org/ejb/774b87bf0f7482599419d1e7da9ed918

https://www.codeproject.com/Articles/15821/HTML-Vertical-Bar-Chart 

https://css-tricks.com/making-charts-with-css/

