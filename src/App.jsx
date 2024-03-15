import { useState } from 'react';

const PasswordGenerator = () => {
  // State variables for password, password length, entropy, password strength, and message display
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20); // Default password length
  const [entropy, setEntropy] = useState(0); // Default entropy
  const [passwordStrength, setPasswordStrength] = useState('weak'); // Default password strength
  const [showMessage, setShowMessage] = useState(false); // Flag to show password copied message

  // Function to handle changes in password length input
  const handleChange = (event) => {
    const length = parseInt(event.target.value);
    setPasswordLength(length);
    calculateEntropy(length); // Recalculate entropy when password length changes
  };

  // Function to calculate password entropy and determine password strength
  const calculateEntropy = (length) => {
    const charsetSize = 94; // Expanded charset size including uppercase, lowercase, digits, and special characters
    const entropyBits = Math.log2(Math.pow(charsetSize, length)); // Calculate entropy in bits
    setEntropy(entropyBits.toFixed(2)); // Update entropy state
    updatePasswordStrength(entropyBits); // Update password strength based on entropy
  };

  // Function to update password strength based on entropy
  const updatePasswordStrength = (entropyBits) => {
    if (entropyBits < 50) {
      setPasswordStrength('weak');
    } else if (entropyBits < 80) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  // Function to generate a random password
  // Function to generate a random password
  const generatePassword = () => {
    const length = passwordLength; // Get the desired password length
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+'; // Character set for password generation
    const randomBytes = new Uint8Array(length);
    window.crypto.getRandomValues(randomBytes); // Generate random bytes using crypto API

    let generatedPassword = '';
    // Loop through each byte and generate characters for the password
    for (let i = 0; i < length; i++) {
      // Use modulo to ensure the random byte falls within the range of the charset
      generatedPassword += charset[randomBytes[i] % charset.length]; // Append characters from charset to generate password
    }

    setPassword(generatedPassword); // Update password state
    calculateEntropy(length); // Recalculate entropy of generated password
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
          min="20"
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
};

export default PasswordGenerator;
