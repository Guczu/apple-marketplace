import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    name: string;
    routeLink: string;
}

const FooterLink = ({ name, routeLink }: Props) => {
  return (
    <Link to={routeLink} className='w-fit'>
        {name}
    </Link>
  )
}

export default FooterLink