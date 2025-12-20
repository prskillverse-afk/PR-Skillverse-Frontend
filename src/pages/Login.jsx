import { useState } from "react";
import API_URL from "../utils/api";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";



export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // error | success

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter email and password");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/recordings");
    } catch (err) {
      let msg = "Login failed. Try again.";

      if (err.code === "auth/user-not-found") msg = "Email not registered";
      else if (err.code === "auth/wrong-password") msg = "Invalid password";
      else if (err.code === "auth/invalid-email") msg = "Invalid email format";
      else if (err.code === "auth/too-many-requests")
        msg = "Too many attempts. Try later.";

      setMessage(msg);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async () => {
    if (!email) {
      setMessage("Enter email to reset password");
      setMessageType("error");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent");
      setMessageType("success");
    } catch {
      setMessage("Failed to send reset email");
      setMessageType("error");
    }
  };

  return (
    <div className="login-wrapper">
      <button className="close-btn" onClick={() => navigate("/")}>
        ×
      </button>

      <div className="login-card">
        <h2>Student Login</h2>
        <p>Access recorded SAP training</p>

        {/* MESSAGE */}
        {message && (
          <div className={`login-msg ${messageType}`}>
            <span>{message}</span>

            {/* OK BELOW MESSAGE */}
            <button
              className="msg-ok"
              onClick={() => setMessage("")}
            >
              ✓ OK
            </button>
          </div>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Signing In..." : "Login"}
        </button>

        <p className="forgot" onClick={forgotPassword}>
          🔑 Forgot Password?
        </p>
      </div>
    </div>
  );
}




