let changeMode = (size, weight, transform, background, color) => () => {
  const body = document.querySelector("body");
  body.style.fontSize = size;
  body.style.fontWeight = weight;
  body.style.textTransform = transform;
  body.style.backgroundColor = background;
  body.style.color = color;
};

let main = () => {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  const para = document.createElement("p");
  const node = document.createTextNode("Welcome Holberton!");
  const body = document.querySelector("body");
  para.appendChild(node);
  body.appendChild(para);
  const bSpooky = document.createElement("button");
  bSpooky.innerHTML = "Spooky";
  body.appendChild(bSpooky);
  bSpooky.onclick = spooky;
  const bdarkMode = document.createElement("button");
  bdarkMode.innerHTML = "Dark mode";
  body.appendChild(bdarkMode);
  bdarkMode.onclick = darkMode;
  const bscreamMode = document.createElement("button");
  bscreamMode.innerHTML = "Scream mode";
  body.appendChild(bscreamMode);
  bscreamMode.onclick = screamMode;
};

main();
