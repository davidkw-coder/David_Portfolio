import "./Portfolio.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Davidkw. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
