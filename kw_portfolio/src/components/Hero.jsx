import "./Portfolio.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="name">Your Name</span>
          </h1>
          <h2 className="profession">
            <span className="web">WEB</span>
            <span className="designer">DESIGNER</span>
          </h2>
          <p className="hero-description">
            I'm a passionate and creative web designer known for crafting visually stunning and user-friendly websites.
            With a keen eye for design and a deep understanding of modern web development, I transform ideas into
            beautiful, functional digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn projects-btn">
              PROJECTS
            </a>
            <a href="#contact" className="btn hire-btn">
              HIRE ME
            </a>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/placeholder.svg?height=500&width=400" alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero
