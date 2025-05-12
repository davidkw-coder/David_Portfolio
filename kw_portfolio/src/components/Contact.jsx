"use client"

import { useState } from "react"
import "./Portfolio.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message },
        })
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || "Something went wrong" },
        })
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." + error },
      })
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>123 Web Street, Design City, 10001</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>contact@yourportfolio.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-image">
              <img src="/placeholder.svg?height=300&width=300" alt="Contact" />
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn" disabled={status.submitting}>
                {status.submitting ? "Sending..." : "Send Message"}
              </button>

              {status.info.error && (
                <div className="error-message">
                  <p>{status.info.msg}</p>
                </div>
              )}

              {status.submitted && !status.info.error && (
                <div className="success-message">
                  <p>{status.info.msg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
