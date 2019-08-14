import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Graph = (props) => {
  useEffect(() => {
    const { data } = props;

    const adjlist = [];
    function neigh(a, b) {
      return a == b || adjlist[`${a}-${b}`];
    }
    data.links.forEach((d) => {
      adjlist[`${d.source.index}-${d.target.index}`] = true;
      adjlist[`${d.target.index}-${d.source.index}`] = true;
    });

    function focus(d) {
      const { index } = d3.select(d3.event.target).datum();
      /* node.style('opacity', o => (neigh(index, o.index) ? 1 : 0.1)) */
      //   labelNode.attr('display', o => (neigh(index, o.node.index) ? 'block' : 'none'));
      link.style('stroke', o => (o.source.index == index ? 'blue' : o.target.index == index ? 'red' : 'black'));
      /* link.style('stroke', o => ( o.target.index == index ? 'red' : 'black')) */
      link.attr('stroke-width', o => (o.source.index == index || o.target.index == index ? '3px' : '2px'));
    }

    function unfocus() {
    //   labelNode.attr('display', 'block');
      /* node.style('opacity', 1) */
      link.style('stroke', 'black');
      link.attr('stroke-width', '2px');
    }

    // Create somewhere to put the force directed graph
    const svg = d3.select('svg');
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const rectWidth = 140;
    const rectHeight = 120;
    const minDistance = Math.sqrt(rectWidth * rectWidth + rectHeight * rectHeight);

    // Set up the simulation and add forces
    const simulation = d3.forceSimulation()
      .nodes(data.nodes);

    const link_force = d3.forceLink(data.links)
      .id(d => d.id).distance(minDistance).strength(1);

    const charge_force = d3.forceManyBody()
      .strength(-1000);

    const center_force = d3.forceCenter(width / 2, height / 2);

    simulation
      .force('charge_force', charge_force)
      .force('center_force', center_force)
      .force('links', link_force)
      .force('y', d3.forceY(height / 2).strength(0.10));


    // Add tick instructions:
    simulation.on('tick', tickActions);
    svg.append('svg:defs').append('svg:marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 0 12 12')
      .attr('refX', 10)
      .attr('refY', 6)
      .attr('markerWidth', 12)
      .attr('markerHeight', 12)
      .attr('orient', 'auto')
      .attr('fill', 'darkgreen')
  	.append('svg:path')
      .attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2');


    // Add encompassing group for the zoom
    const g = svg.append('g')
      .attr('class', 'everything');

    const div = g.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    // Draw lines for the links
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('path')
      .style('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', '2px')
      .attr('marker-start', 'url(#arrow)')
      .attr('marker-mid', 'url(#arrow)')
      .attr('marker-end', 'url(#arrow)');
    /* .attr('marker-start', (d) => "url(#arrow)")
           .style( "stroke-width", 3 );  */

    // Draw rects and texts for the nodes
    const nodes = g.append('g')
      .attr('class', 'nodes');

    const node = nodes.selectAll('node')
      .data(data.nodes)
      .enter()
      .append('g');

    node.on('mouseover', focus).on('mouseout', unfocus);


    const rect = node.append('rect')
      .attr('x', -rectWidth / 2)
      .attr('y', -rectHeight / 2)
      .attr('width', rectWidth)
      .attr('height', rectHeight)
      .attr('fill', rectColour);

    const textName = node.append('text')
      .text(d => d.name)
      .attr('y', function () { return this.previousSibling.y.baseVal.value; })
      .style('text-anchor', 'middle')
      .attr('font-weight', 'bold');

    /* const textCvr = node.append('text')
      .text(d => d.fields)
      .attr('y', 0)
      .style('text-anchor', 'middle'); */
    const textCvr = node.each(function (d, i) {
 				d3.select(this).selectAll('node')
        .data(d.fields)
        .enter()
        .append('text')
        .text(t => t)
        .attr('y', function (t, i) { return this.parentElement.firstChild.y.baseVal.value + (i + 1) * 16; })
        .style('text-anchor', 'middle');
    });


    /* const textOwned = node.append('text')
      .text('%')
      .attr('y', 15)
      .style('text-anchor', 'middle'); */

    node.attr('transform', d => `translate(${d.x},${d.y})`);

    // Add drag capabilities
    const drag_handler = d3.drag()
      .on('start', drag_start)
      .on('drag', drag_drag)
      .on('end', drag_end);

    drag_handler(node);

    // Add zoom capabilities
    const zoom_handler = d3.zoom()
      .on('zoom', zoom_actions);

    zoom_handler(svg);

    /** Functions * */

    function rectColour(d) {
      if (d.person) {
        return 'blue';
      }
      return 'pink';
    }

    // Function to choose the line colour and thickness
    function linkColour(d) {
      return 'black';
    }

    // Drag functions
    function drag_start(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    // Make sure you can't drag the rect outside the box
    function drag_drag(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function drag_end(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      //   d.fx = null;
      //   d.fy = null;
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    // Zoom functions
    function zoom_actions() {
      g.attr('transform', d3.event.transform);
    }

    function tickActions() {
      // update node positions each tick of the simulation
      node.attr('transform', d => `translate(${d.x},${d.y})`);
      // update link positions
      link.attr('d', (d) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return `M${
          d.source.x},${
          d.source.y}A${
          dr},${dr} 0 0,1 ${
          d.target.x},${
          d.target.y}`;
      });
    }
  }, []);

  return <svg width="1000" height="1000" />;
};

export default Graph;
