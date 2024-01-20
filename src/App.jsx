import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [wordCount, setWordCount] = useState();
  const [generatedPara, setGeneratedPara] = useState("");
  
  const generateParagraph = useCallback(() => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let para = "";

    for (let j = 0; j < wordCount; j++) {
      const wordLength = Math.floor(Math.random() * (10 - 3 + 1) + 3);

      let word = "";
      for (let i = 0; i < wordLength; i++) {
        const index = Math.floor(Math.random() * 26);
        word += alphabets[index];
      }

      para += " " + word;
    }
    return para.trim(); // Remove trailing space

  }, [wordCount]);

  function handleClick() {
    const generated = generateParagraph();
    setGeneratedPara(generated);
  }

  return (
    <>
      <h1 style={styles.heading}>Para Generator</h1>
      <input
        type="number"
        placeholder='Enter Number of words'
        style={styles.input}
        value={wordCount}
        onChange={(e) => setWordCount(e.target.value)}
      />
      <button onClick={handleClick} style={styles.button}>Generate</button>
      <p>{generatedPara}</p>
    </>
  )
}

const styles = {
  heading: {
    textAlign: 'center',
    color: 'blue',
    marginTop: '20px', // Adjust the margin as needed
  },
  input: {
    width: '90%',
    padding: '5px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    height: '30px'
  },
  button: {
    marginLeft: '10px',
    padding: '10px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
}

export default App
