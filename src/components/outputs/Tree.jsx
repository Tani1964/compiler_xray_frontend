import { useEffect, useRef, useContext, useState } from "react";
import * as d3 from "d3";
import { DataContext } from "../contexts/DataContext";

const Tree = () => {
  // State to hold the tree data from context
  const { data } = useContext(DataContext); // Using context to retrieve data
  const [treeData, setTreeData] = useState(null); // Local state for tree data
  const svgRef = useRef(null); // Reference to the SVG element for D3 manipulation

  useEffect(() => {
    // If there's data from context, set it to local state
    if (data && data.parse_tree) {
      setTreeData(data.parse_tree);
      console.log(data.parse_tree)
    }
  }, [data]); // Re-run when 'data' changes

  useEffect(() => {
    if (!treeData) {
      // If treeData is not yet available, return early
      return;
    }

    // Clear previous D3 content to avoid duplicate renderings
    const svg = d3.select(svgRef.current).html("");

    // Set the dimensions for the SVG
    const width = 600;
    const height = 400;

    // Create a D3 tree layout with specified size
    const treeLayout = d3.tree().size([width, height - 100]);

    // Convert the tree data into a D3 hierarchy
    const root = d3.hierarchy(treeData, (d) => (d.operator ? [d.left, d.right] : null));

    // Generate the tree layout
    const tree = treeLayout(root);

    // Append the group to hold the tree content
    const g = svg.append("g").attr("transform", "translate(50, 50)");

    // Draw the links between nodes
    g.selectAll(".link")
      .data(tree.links())
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)
      .style("stroke", "#ccc");

    // Draw the nodes
    const nodes = g.selectAll(".node")
      .data(tree.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    nodes.append("circle")
      .attr("r", 5)
      .style("fill", "#666");

    nodes.append("text")
      .attr("dx", 10)
      .attr("dy", 5)
      .text((d) => (d.data.operator ? d.data.operator : d.data));

  }, [treeData]); // Re-run when 'treeData' changes

  // Return the SVG with the ref for D3 manipulations
  return <svg  ref={svgRef} width={600} height={400} />;
};

export default Tree;
