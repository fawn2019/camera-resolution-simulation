import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Camera(props) {
  let padding = 8;
  let focusX = padding;
  let focusY = props.height * 0.5;

  let viewX = props.width - props.width * 0.2;
  let viewTop = padding;
  let viewBottom = props.height - padding;

  let viewHeight = Math.abs(viewTop - viewBottom);
  let pixelsSizeY = viewHeight / props.pixelsY;

  var pixels = [];

  for (var y = 0; y < props.pixelsY; y++) {
    pixels.push(
      <rect
        x={viewX + 5}
        y={viewTop + (y * pixelsSizeY)}
        width="10"
        height={pixelsSizeY}
        fill="red"
        stroke="black"
      />
    );
  }

  return (
    <svg width={props.width} height={props.height}>
      <circle
        cx={focusX}
        cy={focusY}
        r="4"
        stroke="black"
        stroke-width="1"
        fill="gray"
      />
      <line
        x1={viewX}
        y1={viewTop}
        x2={viewX}
        y2={viewBottom}
        stroke="black"
        stroke-width="2"
      />
      <line
        x1={focusX}
        y1={focusY}
        x2={viewX}
        y2={viewTop}
        stroke="black"
        stroke-width="1"
      />
      <line
        x1={focusX}
        y1={focusY}
        x2={viewX}
        y2={viewBottom}
        stroke="black"
        stroke-width="1"
      />
      {pixels}
    </svg>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Camera Resolution</h1>
      <Camera width="400" height="200" pixelsY="10" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
