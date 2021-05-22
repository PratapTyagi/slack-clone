import "./Login.css";
import LOGO from "../../ascets/logo.png";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src={LOGO} alt="LOGO" />
        <h1>Sign In</h1>
        <p>Slack</p>
        <Button type="submit" className="button">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;