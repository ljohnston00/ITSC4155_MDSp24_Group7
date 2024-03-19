import { html, line, range, scaleLinear, scaleTime, select, svg} from "d3";
import {curveLinear} from "d3";

// Generate some random data
const data = range(100).map((d, i) => ({
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
  value: Math.random() * 100
}));

// Create scales for the x and y axes
const xScale = scaleTime()
  .domain([data[data.length - 1].date, data[0].date])
  .range([0, 800]);

const yScale = scaleLinear()
  .domain([0, 100])
  .range([400, 0]);

// Create a line generator
const lineGenerator = line()
  .x(d => xScale(d.date))
  .y(d => yScale(d.value))
  .curve(curveLinear);

// Create the SVG element
const svgElement = svg`<svg width="800" height="400">
  <path d="${lineGenerator(data)}" fill="none" stroke="steelblue" />
</svg>`;

const notebook = svgElement.outerHTML;


export default notebook;