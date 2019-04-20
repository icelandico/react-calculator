import React, { Component } from 'react'
import './../Footer/Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-title">
            <p>
              Created by M.M.
            </p>
          </div>

          <div className="footer-icons">
            <button className="link"><a href="https://github.com/icelandico" target="_blank">GitHub</a></button>
            <button className="link"><a href="http://michalmuszynski.com" target="_blank">Website</a></button>
          </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer