import React from "react";
import ReactDOM from "react-dom/client";

function Car(props) {
    return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
    // const carName = "Ford";
    const carInfo = {name: "Ford", model: "Mustang"};
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carInfo}/>
        </>
    );
}

// const myElement = <Car brand="Ford"/>;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Garage/>);
