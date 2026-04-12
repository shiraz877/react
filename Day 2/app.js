// const element = React.createElement("h1", { id: "title" }, "hello world");

// const element2 = React.createElement(
//   "div",
//   null,
//   React.createElement("h2", null, "my name is shiraz"),
//   React.createElement("h2", null, "welcome back"),
// );
// const element=<h1>hello world</h1>  //JSX systex

// const element2=(
//     <div>
//         <h1>Hello world</h1>
//         <h1>My name is mohammad shiraz</h1>
//     </div>
// )

//React component=> same as function

// function App({name}){
//     return (
//         <h1>hello world, {name}</h1>
//     )
// }

// const a=App("shiraz")
// const a=< App name="shiraz"/>

// JSX: javascript XML (looks like HTML)
//BABEL: converts JSX into React.creatElement

function Header(props) {
  return <h1>Welcome to {props.name} world</h1>;
}
function Main(props) {
  return <h1>this is {props.header}</h1>;
}
function Footer({ footer }) {
  return <h1>This is {footer}</h1>;
}
const a = (
  <>
    <Header name="shiraz" />
    <Main header="Header" />
    <Footer footer="Footer" />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(a);
