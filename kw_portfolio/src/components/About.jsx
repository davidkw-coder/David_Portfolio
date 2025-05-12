import "./Portfolio.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/placeholder.svg?height=400&width=400" alt="About Me" />
          </div>
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate web designer and developer with over 5 years of experience creating beautiful, functional
              websites and applications. I specialize in creating user-friendly interfaces that help businesses achieve
              their goals.
            </p>

            <h3>My Skills</h3>
            <div className="skills">
              <div className="skill">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">React.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
