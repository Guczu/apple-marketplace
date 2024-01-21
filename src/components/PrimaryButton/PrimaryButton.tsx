import React from 'react'

type Props = {
    children: string | JSX.Element;
    styles?: string;
}

const PrimaryButton = ({ children, styles }: Props) => {
  return (
    <button className={`w-fit p-2 pl-4 pr-4 bg-black font-semibold rounded-lg text-main-soft hover:bg-[#242424] hover:animate-grow-up ${styles}`}>
        {children}
    </button>
  )
}

export default PrimaryButton