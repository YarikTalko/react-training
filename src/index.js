import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./Car";

function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car/>
        </>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Car />);
