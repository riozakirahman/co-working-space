import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const formRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email", email);
    axios
      .post(
        "https://sheet.best/api/sheets/903068db-80f9-4db1-8341-0512c10eeb11",
        { email }
      )
      .then((response) => {
        formRef.current.reset();
        window.alert("Your email was registered");
      });
  };

  return (
    <form onSubmit={submitHandler} method="POST" ref={formRef}>
      <h5>Subscribe to our newsletter</h5>
      <p>Monthly digest of what's new and exciting from us.</p>
      <div class="d-flex flex-column flex-sm-row w-100 gap-2">
        <label for="newsletter1" class="visually-hidden">
          Email address
        </label>
        <input
          id="newsletter1"
          type="email"
          class="form-control"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        ></input>
        <button class="btn btn-dark" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Form;
