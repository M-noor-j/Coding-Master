import React from "react";
import "../css/ContactForm.scss";
import building from "../assets/building.png";
const ContactForm = () => {
  // const checkbox = document.querySelector('.my-form input[type="checkbox"]');
  // const btns = document.querySelectorAll(".my-form button");

  // checkbox.addEventListener("change", function() {
  //   const checked = this.checked;
  //   for (const btn of btns) {
  //     checked ? (btn.disabled = false) : (btn.disabled = true);
  //   }
  // });
  return (
    <>
      {/* //// */}
      <div className="my-form mt-5 pt-5">
        <div className="container">
          <h1 className="text-white fw-bold">Get in touch !</h1>
          <ul className="ul-oiska">
            <li>
              <select>
                <option selected disabled>
                  -- Please choose an option --
                </option>
                <option>Request Quote</option>
                <option>Send Resume</option>
                <option>Other</option>
              </select>
            </li>
            <li>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label text-white" for="your-surname">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white" for="your-surname">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
              </div>
            </li>
            <li>
              <textarea placeholder="Message"></textarea>
            </li>
            <li>
              <input type="checkbox" id="terms" />
              <label for="terms" className="text-white">
                I have read and agreed with{" "}
                <a href="" className="terms-contact">
                  the terms and conditions.
                </a>
              </label>
            </li>
            <li>
              <div className="grid grid-3 ">
                {/* <div className="required-msg">REQUIRED FIELDS</div> */}
                <button className="btn-grid" type="submit" disabled>
                  <span className="back">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                      alt=""
                    />
                  </span>
                  <span className="front">SUBMIT</span>
                </button>
                <button className="btn-grid" type="reset" disabled>
                  <span className="back">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                      alt=""
                    />
                  </span>
                  <span className="front">RESET</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
