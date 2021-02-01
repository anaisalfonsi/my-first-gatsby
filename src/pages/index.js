import React from "react"
import Link from "gatsby-link"
import Global from "../styles/global.css";

export default class Index extends React.Component {
  render() {
    return (
      <div>
      <h1 className="bg-purple-400 text-white text-center text-2xl">
        testing contact form
      </h1>
      <ul>
        <li>
          <Link to="/Contact/">Basic contact form</Link>
        </li>
        <li>
          <Link to="/file-upload/">Form with file upload</Link>
        </li>
      </ul>
    </div>
    ) 
  }
}
