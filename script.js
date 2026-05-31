const counter = document.querySelector("#counter");
const tracker = new Audio("click.wav");

counter.textContent = "0 ms";

let currentKey = "";
let startTime = 0;

function misclickIndicator() {
  counter.animate(
    [
      // key frames
      { transform: "translateY(0px)", color: "black" },
      { transform: "translateY(-5px)", color: "red" },
      { transform: "translateY(0px)", color: "black" },
    ],
    {
      // sync options
      duration: 100,
      iterations: 1,
    },
  );
}

setInterval(() => {
  tracker.play();
}, 300);

window.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    if (currentKey === "z") {
      misclickIndicator();
      return;
    }
    currentKey = "z";
    startTime = performance.now();
  }

  if (e.key === "x") {
    if (!currentKey || currentKey === "x") {
      misclickIndicator();
      return;
    }
    currentKey = "x";
    const endTime = performance.now();
    const duration = endTime - startTime;

    counter.textContent = `${duration.toFixed()} ms`;
  }
});
