import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

//IMAGES
import logoTib from "./Images/TibouLogo.png";

//CSS
import "./css/design.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      question: "Are you a Gentleman or a Lady?",
      options: ["Man", "Woman"],
    },
    {
      question: "What type of scent do you prefer?",
      options: ["Floral", "Woody", "Fruity", "Oriental"],
    },
    {
      question: "What's your favorite season?",
      options: ["Summer", "Winter", "Spring", "Autumn"],
    },
    {
      question: "What type of activities do you enjoy?",
      options: ["Sports", "Reading", "Traveling", "Cooking"],
    },
  ];

  const getRecommendation = (answers) => {
    const [gender, scent, season, activity] = answers;

    if (gender === "Woman" && scent === "Floral" && season === "Spring") {
      return "Daisy by Marc Jacobs";
    } else if (gender === "Man" && scent === "Woody" && season === "Winter") {
      return "Terre d’Hermès by Hermès";
    } else if (activity === "Sports") {
      return "CK One by Calvin Klein";
    } else {
      return "Signature Scent by Jo Malone";
    }
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const recommendation = getRecommendation(newAnswers);
      setRecommendation(recommendation);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {currentStep === -1 && !recommendation && (
        <div>
          <img class="img-logo" src={logoTib} alt="logo" />
          <h1>Welcome to Tibou Perfume Personality Quiz</h1>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#d1ab6d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentStep(0)}
          >
            Start Quiz
          </button>
        </div>
      )
      }

      {
        currentStep >= 0 && !recommendation && (
          <>
            <img class="img-logo" src={logoTib} alt="logo" />
            <Quiz
              question={questions[currentStep].question}
              options={questions[currentStep].options}
              onAnswer={handleAnswer}
            />
          </>
        )
      }
      <>
        {/* <img class="img-logo" src={logoTib} alt="logo" /> */}
        {recommendation && <Result recommendation={recommendation} />}
      </>
    </div >
  );
};

export default App;
