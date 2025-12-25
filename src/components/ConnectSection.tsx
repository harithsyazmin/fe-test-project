import { useState } from "react";

function ConnectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.contact.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  return (
    <main id="connect" className="page bg-light">
      <section className="content">
        <div className="section-heading">
          <span className="section-title">
            <strong>Connect</strong>
          </span>
          <p className="lede">
            Every successful connection starts in conversation. Drop us a line
            today :)
          </p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-field-wrapper">
              <label
                htmlFor="name"
                className={`form-label ${
                  formData.name ? "form-label-filled" : ""
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field-wrapper">
              <label
                htmlFor="email"
                className={`form-label ${
                  formData.email ? "form-label-filled" : ""
                }`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field-wrapper">
              <label
                htmlFor="contact"
                className={`form-label ${
                  formData.contact ? "form-label-filled" : ""
                }`}
              >
                Contact no.
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="form-input"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-field-wrapper">
            <label
              htmlFor="message"
              className={`form-label ${
                formData.message ? "form-label-filled" : ""
              }`}
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              rows={6}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-button-row">
            <button
              type="button"
              className="form-button form-button-reset"
              onClick={handleReset}
            >
              Clear
            </button>
            <button
              type="submit"
              className="form-button form-button-submit"
              disabled={!isFormValid()}
            >
              Connect with us
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ConnectSection;
