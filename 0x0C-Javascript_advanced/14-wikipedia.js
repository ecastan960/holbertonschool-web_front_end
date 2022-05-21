const createElement = (data) => {
  const body = document.querySelector("body");
  const para = document.createElement("p");
  para.innerHTML = data;
  body.appendChild(para);
};

const queryWikipedia = (callback) => {
  let url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  let http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onload = () => {
    const data = JSON.parse(http.response).query.pages.extracts;
    callback(null, data);
  };
};

queryWikipedia(createElement);
