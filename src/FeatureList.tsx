import React from "react";
import "./FeatureList.css";

function FeatureList()
{
    const features=[
        "Lorem ipsum dolor sit amet, consectetur elit donec nec facilisis sem.",
        "Ipsum dolor sit amet, consectetur adipiscing elitonec nec facilisis sem.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing nec facilisis sem.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ];

    return (
        <ul className="features">
            {features.map((features, index) =>(
                <li key={index}>✔{features}</li>
            ))}
        </ul>
    );
}

export default FeatureList;