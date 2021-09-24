
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Treemap({ data, width, height }) {
  const svgRef = useRef(null);
  const legendRef = useRef(null);

  function renderTreemap() {
    const svg = d3.select(svgRef.current);
    svg.selectAll('g').remove();

    const legendContainer = d3.select(legendRef.current);
    legendContainer.selectAll('g').remove();

    svg.attr('width', width).attr('height', height);

    // create root node
    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);

    // create treemap layout
    const treemapRoot = d3.treemap().size([width, height]).padding(1)(root);

    // create 'g' element nodes based on data
    const nodes = svg
      .selectAll('g')
      .data(treemapRoot.leaves())
      .join('g')
      .attr('transform', (d) => `translate(${d.x0},${d.y0})`);

    // create color scheme and fader
    const fader = (color) => d3.interpolateRgb(color, '#0000')(0.3);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10.map(fader));

    // add treemap rects
    nodes
      .append('rect')
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d) => (d.data.color));

    const fontSizeTitle = 25;

    // add text to rects
    nodes
      .append('text')
      .text((d) => `${d.data.name} ${d.data.value}`)
      .attr('data-width', (d) => d.x1 - d.x0)
      .attr('font-size', `${25}px`)
      .attr('x', 15)
      .attr('y', 35)
      .call(wrapText)
      .style("fill", "white");

    function wrapText(selection) {
      selection.each(function () {
        const node = d3.select(this);
        const rectWidth = +node.attr('data-width');
        let word;
        const words = node.text().split(' ').reverse();
        let line = [];
        let lineNumber = 0;
        const x = node.attr('x');
        const y = node.attr('y');
        let tspan = node.text('').append('tspan').attr('x', x).attr('y', y);
        while (words.length > 1) {
          word = words.pop();
          line.push(word);
          tspan.text(line.join(' '));
          const tspanLength = tspan.node().getComputedTextLength();
          if (tspanLength > rectWidth && line.length !== 1) {
            line.pop();
            tspan.text(line.join(' '));
            line = [word];
            tspan = addTspan(word);
          }
        }
        addTspan(words.pop());

        function addTspan(text) {
          lineNumber += 1;
          return node
            .append('tspan')
            .attr('x', x)
            .attr('font-size', `${16}px`)
            .attr('y', y)
            .attr('dy', `${lineNumber * 30}px`)
            .text(text)
            .style("fill", "white");
        }
      });
    }

    // pull out hierarchy categories
    let categories = root.leaves().map((node) => node.data.category);
    categories = categories.filter(
      (category, index, self) => self.indexOf(category) === index,
    );

    legendContainer.attr('width', width).attr('height', height / 4);

    // create 'g' elements based on categories
    const legend = legendContainer.selectAll('g').data(categories).join('g');

    // create 'rects' for each category
    legend
      .append('rect')
      .attr('width', fontSizeTitle)
      .attr('height', fontSizeTitle)
      .attr('x', fontSizeTitle)
      .attr('y', (_, i) => fontSizeTitle * 2 * i)
      .attr('fill', (d) => colorScale(d));

    // add text to each category key
    legend
      .append('text')
      .attr('transform', `translate(0, ${fontSizeTitle})`)
      .attr('x', fontSizeTitle * 3)
      .attr('y', (_, i) => fontSizeTitle * 2 * i)
      .style('font-size', fontSizeTitle)
      .text((d) => d);
  }

  useEffect(() => {
    renderTreemap();
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}