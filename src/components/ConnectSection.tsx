function ConnectSection() {
  return (
    <main className="page bg-light">
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
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="form-input"
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact no."
              className="form-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="How can we help?"
            className="form-textarea"
            rows={6}
          ></textarea>
          <div className="form-button-row">
            <button type="reset" className="form-button form-button-reset">
              Clear
            </button>
            <button type="submit" className="form-button form-button-submit">
              Connect with us
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ConnectSection;
