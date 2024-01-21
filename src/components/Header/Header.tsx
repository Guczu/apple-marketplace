import React from 'react'

type Props = {
    children: string | JSX.Element;
    styles?: string;
}

const Header = ({ children, styles }: Props) => {
  return (
    <p className={`container mx-auto font-primary font-medium text-[32px] p-2 flex justify-center ${styles}`}>
        { children }
    </p>
  )
}

export default Header