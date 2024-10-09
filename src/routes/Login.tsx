import { AuthProps } from "../types/supabaseUtils";
import { signUp, login } from "../utils/supabase";
import { useState } from "react";
import "../styles/routes/Login.css";

export default function Login() {
  const [isSignup, setIsSignUp] = useState<boolean>(true);
  const [authData, setAuthData] = useState<AuthProps>({
    email: "",
    password: "",
  });

  const titleText = isSignup ? "Iscriviti" : "Accedi";

  const spanText = isSignup
    ? "Sei già registrato? clicca qui per accedere"
    : "Non sei ancora registrato? Clicca qui per iscriverti";

  const handleLogin = async () => {
    if (isSignup) {
      const signed = await signUp({
        email: authData.email,
        password: authData.password,
      });
      console.log(signed);
    } else {
      const authenticated = await login({
        email: authData.email,
        password: authData.password,
      });
      console.log(authenticated);
    }
    //   TODO: redirect with useNavigate
  };

  const handleAuthData = (key: "email" | "password", value: string) => {
    setAuthData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="login-container">
      <h2>{titleText} a MyBalance</h2>
      <div className="login-input">
        <label htmlFor="email">Inserisci la tua mail</label>
        <input
          onChange={(e) => handleAuthData("email", e.target.value)}
          type="email"
          id="email"
        />
      </div>
      <div className="login-input">
        <label htmlFor="password">Inserisci la tua password</label>
        <input
          onChange={(e) => handleAuthData("password", e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <button className="cta-btn" onClick={handleLogin}>
        {titleText}
      </button>
      <span className="login-span" onClick={() => setIsSignUp(!isSignup)}>
        {spanText}
      </span>
    </div>
  );
}
