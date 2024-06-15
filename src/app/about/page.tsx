import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Sujith Sam Joseph a{" "}
                    <span>Full Stack Web Developer</span>
                  </h2>
                  {/* <p>
                    Hi! My name is Your Name. I am a your expertise, and I am
                    very passionate and dedicated to my work. With 1 years
                    experience as a your expertise, I have acquired the skills
                    and knowledge necessary to make your project a success. I
                    enjoy every step of the design process, from discussion and
                    collaboration.
                  </p> */}
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Angular</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">30%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">40%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Oracle SQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            BTech(Hons) in Computer Science and Engineering
                          </h4>
                          <p className="timeline-text">
                            Rajagiri School of Engineering and Technology
                          </p>
                          <p className="timeline-text">CGPA:8.4/10</p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Civil Engineering
                          </h4>
                          <p className="timeline-text">
                            From 2019 I started my journey to be a Civil
                            Engineer on Shyamoli Ideal Polytechnic Institute. It
                            still Running to Present.
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2019
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2019 I passed SSC Exam from Science Group with
                            GPA- 4.56. My school name was Patgram Anath Bondhu
                            Govt. High School.
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Oct 2022 - Present
                          </h6>
                          <h4 className="timeline-title">
                            Senior Systems Engineer
                          </h4>
                          <p className="timeline-text">Infosys Ltd</p>
                          <p className="timeline-text">
                            Consulting and implementing many functionalities
                            based on Client Needs. Full Stack Web
                            Development,for Verizon Client.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Jun 2022 - Oct 2022
                          </h6>
                          <h4 className="timeline-title">Systems Engineer</h4>
                          <p className="timeline-text">Infosys Ltd</p>
                          <p className="timeline-text">
                            Full Stack Web Development,for Verizon Client
                            including sofware development and services.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Jan 2021 - Jun 2022
                          </h6>
                          <h4 className="timeline-title">
                            Systems Engineer Trainee
                          </h4>
                          <p className="timeline-text">Infosys Ltd</p>
                          <p className="timeline-text">
                            Technology:Angular Js,Spring Boot,SQL
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />
                            July 2019 to August 2019
                          </h6>
                          <h4 className="timeline-title">Intern</h4>
                          <p className="timeline-text">
                            Spectrum Softtech Solutions Pvt Ltd,Kochi
                          </p>
                          <p className="timeline-text">
                            Technology:Software development and IOT.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
