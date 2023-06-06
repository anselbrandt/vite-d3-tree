import "./style.css";
import { Tree } from "./tree";
import * as data from "./flare.json";

document.querySelector("#app").innerHTML = `<div id="graph"></div>`;

const svg = document.getElementById("graph");
const chart = Tree(data, {
  label: (d) => d.name,
  title: (d, n) =>
    `${n
      .ancestors()
      .reverse()
      .map((d) => d.data.name)
      .join(".")}`, // hover text
  link: (d, n) =>
    `https://github.com/prefuse/Flare/${
      n.children ? "tree" : "blob"
    }/master/flare/src/${n
      .ancestors()
      .reverse()
      .map((d) => d.data.name)
      .join("/")}${n.children ? "" : ".as"}`,
  width: 1152,
});
svg.append(chart);
