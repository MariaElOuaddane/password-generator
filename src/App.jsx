import { useState } from "react";
import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (includeLetters) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setPassword("Sélectionnez au moins un type !");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Mot de passe copié !");
  };

  return (
    <div className="all" style={{ fontFamily: "Arial", padding: 20, textAlign: "center" }}>
      <h2>🔐 Générateur de mot de passe</h2>

      <div style={{ marginBottom: 15 }}>
        <label>
          Longueur : 
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </label>
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>
          <input
            type="checkbox"
            checked={includeLetters}
            onChange={(e) => setIncludeLetters(e.target.checked)}
          /> Lettres
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          /> Chiffres
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          /> Symboles
        </label>
      </div>

      <button onClick={generatePassword} style={{ margin: "10px" }}>
        Générer
      </button>

      {password && (
        <div style={{ marginTop: 20 }}>
          <div
            style={{
              background: "#f4f4f4",
              padding: 10,
              borderRadius: 8,
              display: "inline-block",
              minWidth: 200,
            }}
          >
            <strong>{password}</strong>
          </div>
          <br />
          <button onClick={copyToClipboard} style={{ marginTop: 10 }}>
            Copier
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
