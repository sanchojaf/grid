function changeLayout(layout) {
  const imageGrid = document.getElementById("imageGrid");
  imageGrid.classList = ""; // Reset existing layout classes
  imageGrid.classList.add(layout + "-layout");

  const buttons = document.querySelectorAll(".controls button");
  buttons.forEach((button) => {
    if (button.textContent.toLowerCase() === layout) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

