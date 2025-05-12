import "./Portfolio.css"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Mobile App UI",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Portfolio Template",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Blog Platform",
      category: "Full Stack",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Landing Page",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <a href="#" className="btn portfolio-btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
