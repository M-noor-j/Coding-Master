import React from "react";
import "../css/ContactForm.scss";

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
 
      <form action="https://formspree.io/f/xaygowaw" method="POST" >
        <div className="my-form mt-5 pt-5" >
          <div className="container">
            <h1 className="text-white fw-bold">Get in touch !</h1>
            <ul className="ul-oiska">
              <li>
                <select name="option">
                  <option selected disabled className="option-dev">
                    -- Hire Developer --
                  </option>
                  <option>Hire Anugular Developer</option>
                  <option>Hire React Developer</option>
                  <option>Hire Laravel Developer</option>
                  <option>Hire Flutter Developer</option>
                  <option>Hire React-Native Developer</option>
                  <option>Hire Android Developer</option>
                  <option>Hire iOS Developer</option>
                   <option>Hire Node.js Developer</option>
                   <option>Hire Next.js Developer</option>
                   <option>Hire Python Developer</option>
                   <option>Hire Vue.js Developer</option>
                   <option>Hire Blockchain Developer</option>
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
                <textarea placeholder="Message" name="description"></textarea>
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
                  <button type="submit">SUBMIT</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
