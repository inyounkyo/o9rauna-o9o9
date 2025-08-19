import React from "react";
import { useForm } from "react-hook-form";

const o9o9_contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length !== 0) {
      console.log(errors.email?.message);
    } else {
      alert(JSON.stringify(data));
    }
  };
  return (
    <>
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <i className="fa-solid fa-location-crosshairs"></i>
              <p>123 Camsite Avenue, Wilderness, CA 98455</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-envelope"></i>
              <p>info@coffeeshowebsite.com</p>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-phone"></i>
              <p>(123) 345-56444</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-clock"></i>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-clock"></i>
              <p>Sunday: Closed</p>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-globe"></i>
              <p>www.codingnepalweb.com</p>
            </li>
          </ul>

          <form
            action="#"
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("name")}
              placeholder="Your name"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Email"
              className="form-input"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Plz enter valid email.",
                },
                maxLength: {
                  value: 2,
                  message: "This input exceed maxLength.",
                },
              })}
            />
            <textarea
              {...register("msg")}
              placeholder="Your message"
              className="form-input"
            />
            {/* <button className="submit-button">Submit</button> */}
            <input type="submit" className="submit-button" value="Submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default o9o9_contact;
