console.log("Yeah this site is not written in React");

console.log(
  "If you found this I guess I need to share a code right? When it's out I will make the code `iseeeverything` code and you will get 20% off"
);

fetch("/.netlify/functions/numberofreaders")
  .then((r) => r.json())
  .then((data) => {
    document.getElementById("number").innerText = data.number;
  });
