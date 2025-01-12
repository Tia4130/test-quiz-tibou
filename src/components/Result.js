import React from "react";

const Result = ({ recommendation }) => {
    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h1>Your Perfect Perfume Match</h1>
            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
                {recommendation}
            </p>
        </div>
    );
};

export default Result;
