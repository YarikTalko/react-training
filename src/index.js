import React from "react";
import ReactDOM from "react-dom/client";

function Football() {
    const shoot = (a, b) => {
        alert(b.type)
    }

    return (
        <button onClick={(event) => shoot("Goal!", event)}>
            Take the shot!
        </button>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Football/>);
