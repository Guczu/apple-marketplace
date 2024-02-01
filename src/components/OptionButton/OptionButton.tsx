import React from 'react'

type Props = {
    children: string | JSX.Element;
    styles?: string;
}

const OptionButton = ({ children, styles }: Props) => {
  return (
    <button className={`flex flex-col justify-center items-center hover:cursor-pointer pl-6 pr-6 p-4 rounded-xl hover:bg-white transition duration-400 ease-in-out hover:shadow-primary ${styles}`}>
        {children}
    </button>
  )
}

export default OptionButton