const canvas = document.getElementById("canvas");
const deleteButton = document.getElementById("delete");
const resetButton = document.getElementById("reset");
const ctx = canvas.getContext("2d");
let painting = false;

canvas.width = 500;
canvas.height = 300;

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

canvas.addEventListener("mousedown", () => {
  painting = true;
});

canvas.addEventListener("mouseup", () => {
  painting = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!painting) return;

  const x = e.clientX - canvas.getBoundingClientRect().left;
  const y = e.clientY - canvas.getBoundingClientRect().top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
});

deleteButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

resetButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
