import { useState } from "react";

const messages = [
  "do leetcode algorithm questions ⚛️",
  "learning distributed System(very interesting) 💼",
  "do the projects and apply for internships",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step >= 2) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step <= 2) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Prev
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
