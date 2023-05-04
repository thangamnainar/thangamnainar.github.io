// Define the data for the infographic
const data = [  { year: 2010, skills: ['HTML', 'CSS', 'JavaScript'] },
  { year: 2012, skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'] },
  { year: 2014, skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS'] },
  { year: 2016, skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS', 'React'] },
  { year: 2018, skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS', 'React', 'Vue.js'] },
  { year: 2020, skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS', 'React', 'Vue.js', 'Node.js'] },
];

// Define the dimensions of the infographic
const width = 800;
const height = 400;
const margin = { top: 20, right: 20, bottom: 20, left: 40 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Create the SVG element
const svg = d3.select('#infographic')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// Create the x-scale
const xScale = d3.scaleLinear()
  .domain([2010, 2020])
  .range([0, innerWidth]);

// Create the y-scale
const yScale = d3.scaleBand()
  .domain(data.map(d => d.year))
  .range([0, innerHeight])
  .padding(0.2);

// Create the x-axis
const xAxis = d3.axisBottom(xScale)
  .ticks(6)
  .tickFormat(d => d.toString());

// Create the y-axis
const yAxis = d3.axisLeft(yScale)
  .tickSize(0);

// Add the x-axis to the SVG element
svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', `translate(${margin.left}, ${innerHeight + margin.top})`)
  .call(xAxis);

// Add the y-axis to the SVG element
svg.append('g')
  .attr('class', 'y-axis')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
  .call(yAxis);

// Add the bars to the SVG element
svg.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', margin.left)
  .attr('y', d => yScale(d.year) + margin.top)
  .attr('width', d => xScale(d.skills.length))
  .attr('height', yScale.bandwidth())
  .attr('fill', '#00bfff')
  .on('mouseover', function (d) {
    d3.select(this).attr('fill', '#ff8c00');
  })
  .on('mouseout', function (d) {
    d3.select(this).attr('fill', '#00bfff');
  });

// Add the labels to the bars
svg.selectAll('.label')
  .data(data)
  .enter()
  .append('text')
  

