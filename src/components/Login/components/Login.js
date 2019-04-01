import React from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import regeneratorRuntime from "regenerator-runtime";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Login extends React.Component {
  state = {
    inputValueLogin: "",
    inputValuePass: ""
  };

  changeLoginLocal = event => {
    const { value } = event.target;
    this.setState({ inputValueLogin: value });
  };
  changePassLocal = event => {
    const { value } = event.target;
    this.setState({ inputValuePass: value });
  };

  onLogin = () => {
    this.props.login(this.state);
  };

  render() {
    return (
      <div className="login-input">
        <TextField
          label="Login"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          onChange={this.changeLoginLocal}
          value={this.state.inputValueLogin}
        />

        <TextField
          label="Password"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          type="password"
          onChange={this.changePassLocal}
          value={this.state.inputValuePass}
        />

        <div className="login-buttons">
          <Button variant="contained" color="primary" className={styles.button}>
            Reg
          </Button>

          <Button
            onClick={this.onLogin}
            variant="contained"
            color="primary"
            className={styles.button}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  addToken: PropTypes.func
};

export default Login;
