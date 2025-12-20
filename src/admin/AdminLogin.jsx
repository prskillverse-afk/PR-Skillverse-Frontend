import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./admin.css"; // ✅ correct

export default function AdminLogin() {
  const navigate = useNavigate();

  const loginAdmin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const auth = getAuth();
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = await userCred.user.getIdTokenResult();

      if (token.claims.admin) {
        navigate("/admin");
      } else {
        alert("Not an admin");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    /* ✅ THIS WRAPPER WAS MISSING */
    <div className="login-wrapper">
      {/* ✅ THIS CARD WAS MISSING */}
      <form className="login-card" onSubmit={loginAdmin}>
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
