import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// const myElement = (
//     <table>
//         <tr>
//             <th>Name</th>
//         </tr>
//         <tr>
//             <td>John</td>
//         </tr>
//         <tr>
//             <td>Elsa</td>
//         </tr>
//     </table>
// );

// const myElement = <h1>I LOVE {5 + 5} JSX</h1>;

// const myElement = (
//     // <div>
//     <>
//         <p>iaeutniu</p>
//         <p>iaeutniu</p>
//         {/*</div>*/}
//     </>
// );

// const myElement = <input type="text"/>;

// const myElement = <h1 className="myClass">Boo</h1>;

const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//     text = "Hello";
// }

// const myElement = <h1>{text}</h1>;
// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
