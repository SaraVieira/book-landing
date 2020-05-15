import ConfettiGenerator from "confetti-js";

console.log("Yeah this site is not written in React");

console.log(
  "If you found this I guess I need to share a code right? When it's out I will make the code `iseeeverything` code and you will get 20% off"
);

var confettiSettings = {
  target: "confetti-holder",
  max: "800",
  size: "1",
  animate: true,
  props: ["circle", "square", "triangle", "line"],
  colors: [
    [165, 104, 246],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126],
  ],
  clock: "25",
  rotate: false,
  width: window.innerWidth,
  height: window.innerHeight,
  start_from_edge: false,
  respawn: true,
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
