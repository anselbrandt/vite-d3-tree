import "./style.css";
import { Tree } from "./tree";
import * as data from "./data.json";

document.querySelector("#app").innerHTML = `<div id="graph"></div>`;

// https://github.com/Merinio/merinioApp/blob/develop/apps/merinioWA2/src/index.tsx

const svg = document.getElementById("graph");
const chart = Tree(data, {
  label: (d) => d.label,
  title: (d, n) => `${d.label}`, // hover text
  link: (d, n) =>
    `https://github.com/Merinio/merinioApp/blob/develop/${d.file}`,
  width: 2500,
});
svg.append(chart);
