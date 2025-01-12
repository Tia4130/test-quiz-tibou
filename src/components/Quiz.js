import React from "react";

const Quiz = ({ question, options, onAnswer }) => {
    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h2>{question}</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        style={{
                            padding: "10px",
                            margin: "10px 0",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            cursor: "pointer",
                            background: "#f9f9f9",
                        }}
                        onClick={() => onAnswer(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
