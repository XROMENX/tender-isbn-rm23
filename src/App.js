import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file for styling
import { generateCode } from "./components";
import {roundGeneratorcode} from "./roundGenerator";

function App() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [roundGeneratedcode, setRoundGeneratedCode] = useState("");

  // Generate code on initial component mount
  useEffect(() => {
    const code = "   ";
    setGeneratedCode(code);
  }, []);
  useEffect(() => {
    const roundedCode = "    "// roundGeneratorcode();
    setRoundGeneratedCode(roundedCode);
  }, []);

  const handleGenerateClick = () => {
    const code = generateCode();
    setGeneratedCode(code);
  };
  const handleGenerateRoundClick = () => {
    // const roundedCode = 'Rounded code'; // Replace this with your rounded code logic
    // setRoundGeneratedCode(roundedCode);
    const roundedCode = roundGeneratorcode();
    setRoundGeneratedCode(roundedCode);
  };

  return (
    <div className="retro-container">
      <div className="retro-border">
        <div className="notebook">
          <div className="screen">
            <h1>ISBN-10 Code Generator</h1>
            <div className="code-block">
              {/* <h2>Generated Code:</h2> */}
              <button onClick={handleGenerateClick} className="retro-button">
              Generate Code
            </button>
            
              <p>{generatedCode}</p>
              {/* <h3>Generated round Code:</h3> */}
              <br></br>
              <button onClick={handleGenerateRoundClick} className="retro-button">
              Generate round code
            </button>
              <p>{roundGeneratedcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
