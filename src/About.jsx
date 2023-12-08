const About = () => {
  return (
    <div>
      {" "}
      <section className="services section" id="services">
        <h2 className="section__title">Technologies</h2>
        <span className="section__subtitle">My Interests</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-analytics skills__icon"></i>
              <h3 className="services__title">
                Data Analysis
                <br />
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View more
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Data Analysis <br />
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I analize data systems.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Automating information retrieval.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Systematically applying statistical and logical
                      techniques.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Visualizing graphs, charts and preparing reports and
                      dashboards.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-money-bill skills__icon"></i>
              <h3 className="services__title">
                Machine Learning
                <br />{" "}
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View more
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Machine Learning
                  <br />
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Assiting both personal and commercial clients with
                      financial questions and needs.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Maintain customer acoounts and help resolve disputes.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Quality control, automation and customization.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Systematically applying statistical and logical
                      techniques.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Web Developement
                <br />
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View more
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Web Developer
                  <br />
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Webpage development.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create Ux element interactions.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Well trained in WordPress.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">Get in touch</h2>
              <p className="project__description">
                Contact me now if you have a great idea and want to put it to a
                project.
              </p>
              <a href="#contact" className="button button--flex button--white">
                Contact me
                <i className="uil uil-message project__icon button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone-alt contact__icon"></i>

              <div>
                <h3 className="contact__title">Call me</h3>
                <span className="contatc__subtitle">+1314326----</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>

              <div>
                <h3 className="contact__title">E-mail</h3>
                <span className="contatc__subtitle">
                  rithwiksannapu01@gmail.com
                </span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contatc__subtitle">st. louis, missouri</span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input type="text" className="contact__input" id="namejs" />
              </div>

              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  E-mail
                </label>
                <input type="email" className="contact__input" id="emailjs" />
              </div>
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Subject
              </label>
              <input type="text" className="contact__input" id="subjectjs" />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Description
              </label>
              <textarea
                name=""
                id="descriptionjs"
                cols="0"
                rows="7"
                className="contact__input"
              ></textarea>
            </div>

            <div className="contact__content">
              <button
                className="contact__label cursor-pointer"
                onClick="sendEmail()"
                // style="cursor: pointer;"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
