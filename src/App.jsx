import { useState } from 'react';

function App() {
  // State variables for password, password length, entropy, password strength, and message display
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [entropy, setEntropy] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle changes in password length input
  const handleChange = (event) => {
    const length = parseInt(event.target.value);
    setPasswordLength(length);
  };

  // Function to calculate password entropy and determine password strength
  const calculateEntropy = (length) => {
    const charsetSize = 72;
    const entropyBits = Math.log2(Math.pow(charsetSize, length));
    setEntropy(entropyBits.toFixed(2));
    // Update password strength based on entropy
    if (entropyBits < 50) {
      setPasswordStrength('weak');
    } else if (entropyBits < 80) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  // Function to generate a random password
  const generatePassword = () => {
    const length = passwordLength;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    const randomBytes = new Uint8Array(length);
    window.crypto.getRandomValues(randomBytes);

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += charset[randomBytes[i] % charset.length];
    }

    setPassword(generatedPassword);
    calculateEntropy(length);
  };

  // Function to copy the password to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      // Show message and hide after 2 seconds
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }).catch((error) => {
      console.error('Failed to copy: ', error);
    });
  };

  // Render the password generator component
  return (
    <div>
      <h2>Password Generator</h2>
      {/* Input field for password length */}
      <label>
        Password Length:
        <input
          type="number"
          min="8"
          max="100"
          value={passwordLength}
          onChange={handleChange}
        />
      </label>
      {/* Button to generate a password */}
      <button onClick={generatePassword}>Generate Password</button>
      {/* Button to copy the password to the clipboard */}
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      {/* Display the generated password */}
      <p>Password: {password}</p>
      {/* Display the password strength */}
      <p>Strength: {passwordStrength}</p>
      {/* Display the password entropy */}
      <p>Entropy: {entropy} bits</p>
      {/* Display message when password is copied */}
      {showMessage && <div>Password copied to clipboard!</div>}
    </div>
  );
}

export default App;
