import React from "react";
import './LoginForm.css';
import Button from "./Button";

function LoginForm()
{
    return (
        <div className="login-box">
            <h2>Identifiez-vouz</h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mot de passe" />
                <div className="forgot-password">Mot de passe oublie?</div>
                <Button text="Connexion"/>
            </form>
            <div className="or">OU</div>
            <Button text="Se connecter avec Google" className="google-login"/>
            <Button text="Se connecter avec Facebook" className="facebook-login"/>
            <div className="signup">
                Vous n'avez pas de compte? <a href="#">Créer un compte</a>
            </div>
        </div>
    );
}

export default LoginForm;