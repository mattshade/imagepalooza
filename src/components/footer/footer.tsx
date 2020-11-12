import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className="footer">
    <div className="container-fluid">
      <hr className="border-dark" />
      &copy; Matt Shade
    </div>
  </div>
)

export default Footer
