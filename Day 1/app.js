const React = {
  createElement: function (tag, style, children) {
    const element = document.createElement(tag);
    element.innerText = children;

    element.style.backgroundColor = style.backgroundColor;
    element.style.color = style.color;

    return element;
  },
};

const ReactDom = {
  render: function (destination, src) {
    destination.appendChild(src);
  },
};

// const element1=document.createElement("h1")
// element1.innerText="hello world";
// element1.style.backgroundColor="red";
// element1.style.color="white"

// const element2=document.createElement("h2")
// element2.innerText="my name is mohammad shiraz";
// element2.style.backgroundColor="orange";
// element2.style.color="white"

const element1 = React.createElement(
  "h1",
  { backgroundColor: "orange", color: "white" },
  "hello world",
);
const element2 = React.createElement(
  "h2",
  { backgroundColor: "red", color: "white" },
  "my name is mohammad shiraz",
);
console.log(element1);

const root = document.getElementById("root");
ReactDom.render(root, element1);
// ReactDom.render(root, element2);
// root.appendChild(element1);

// root.appendChild(element2);
