import { AuthProps, ApiAuthError } from "../types/supabaseUtils";
import { login, signUp } from "../utils/supabase";
import { useState } from "react";
import "../styles/routes/Login.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    state: { iSsignUp },
  } = useLocation();
  const navigate = useNavigate();

  const [isSignup, setIsSignUp] = useState<boolean>(iSsignUp);
  const [authData, setAuthData] = useState<AuthProps>({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState<ApiAuthError>({
    error: false,
    message: "",
  });

  const titleText = isSignup ? "Iscriviti" : "Accedi";
  const spanText = isSignup
    ? "Sei già registrato? clicca qui per accedere"
    : "Non sei ancora registrato? Clicca qui per iscriverti";

  const handleLogin = async () => {
    const authFunction = isSignup ? signUp : login;
    const { error } = await authFunction({
      email: authData.email,
      password: authData.password,
      username: authData.username,
    });

    if (error) {
      setError({ error: true, message: error.message });
      return;
    }

    setError({ error: false, message: "" });
    navigate("/");
  };

  const handleAuthData = (
    key: "email" | "password" | "username",
    value: string
  ) => {
    setAuthData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="login-container">
      <h2>{titleText} a MyBalance</h2>
      {isSignup && (
        <div className="login-input">
          <label htmlFor="username">Inserisci il tuo nome utente</label>
          <input
            onChange={(e) => handleAuthData("username", e.target.value)}
            type="text"
            id="username"
          />
        </div>
      )}
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
      {error.error && <span className="error">{error.message}</span>}
      <button className="cta-btn" onClick={() => handleLogin()}>
        {titleText}
      </button>
      <span className="login-span" onClick={() => setIsSignUp(!isSignup)}>
        {spanText}
      </span>
    </div>
  );
}
