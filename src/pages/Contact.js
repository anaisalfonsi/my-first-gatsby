import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <h1 className="text-black">Contact</h1>
        <form
          name="Contact Form"
          method="POST"
          subject="anais.mailtest@gmail.com"
          data-netlify="true"
          action="/thanks/"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div>
            <label>Your Email:</label>
            <input type="email" name="email" onChange={this.handleChange} />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" onChange={this.handleChange} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}
