import React from "react";

function Form() {
  return (
    <div className="div-form">
      <div className="header">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
      </div>
      <form className="form" autoComplete="off">
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="text" id="Password" placeholder="Enter password" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="text"
            id="repeatPassword"
            placeholder="Repeat password"
          />
          <span></span>
        </div>
        <p>
          By creating your account you agree with
          <a href="/">Terms & Privacy</a>
        </p>
      </form>
      <div className="button">
        <button>Register</button>
      </div>
      <footer>
        Already have an account? <a href="/">Sing in</a>
      </footer>
    </div>
  );
}

export default Form;
