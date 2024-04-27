import React from "react";
import ReactDOM from "react-dom/client";

function MissedGoal() {
    return <h1>Missed!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    // if (isGoal) {
    //     return <MadeGoal/>;
    // }
    // return <MissedGoal/>;
    return (
        <>
            {isGoal ? <MadeGoal/> : <MissedGoal/>}
        </>
    )
}

// function Garage(props) {
//     const cars = props.cars;
//     return (
//         <>
//             <h1>Garage</h1>
//             {
//                 cars.length > 0 &&
//                 <h2>
//                     You have {cars.length} cars in your garage.
//                 </h2>
//             }
//         </>
//     );
// }

// const cars = ["Ford", "Ferrari", "Audi", "BMW"];
// const cars = [];

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Goal isGoal={true}/>);
// root.render(<Garage cars={cars}/>);
