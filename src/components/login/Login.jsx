import "./Login.css";
import LOGO from "../../ascets/logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);
        dispatch({
          type: actionTypes.SET_USER,
          user,
        });
      })
      .catch((err) => alert(err.message));
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
