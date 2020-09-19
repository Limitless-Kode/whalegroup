import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialIcon(props) {
    return (
        <Link to={props.url} className="social_icon" style={props.styles}>
          <i className={props.icon}></i>
        </Link>
    )
}
