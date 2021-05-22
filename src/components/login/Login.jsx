import "./Login.css";
import LOGO from "../../ascets/logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={LOGO} alt="LOGO" />
        <h1>Sign In</h1>
        <p>Slack</p>
        <Button type="submit" className="button" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
