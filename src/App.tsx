import { useState } from "react";
import "./App.css";

function App() {
  const steps = [
    {
      title: "install",
      completed: false,
    },
    {
      title: "login",
      completed: false,
    },
    {
      title: "payment",
      completed: false,
    },
    {
      title: "finish",
      completed: false,
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="step_container">
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              className={`step_item ${index + 1 === currentStep && "active"}
                  ${index + 1 < currentStep && "completed"}
              }`}
            >
              <p>{index + 1}</p>
              <div className="step">{step.title}</div>
            </div>
          );
        })}
      </div>
      <button
        className="next"
        onClick={() =>
          currentStep < steps.length && setCurrentStep(currentStep + 1)
        }
      >
        Next
      </button>
    </>
  );
}

export default App;
