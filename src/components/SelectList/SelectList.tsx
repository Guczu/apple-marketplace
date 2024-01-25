import React from 'react'

type Props = {
    children: JSX.Element;
    id: string;
    styles?: string;
    label?: string;
}

const SelectList = ({ children, id, styles, label }: Props) => {
  return (
    <>
        <label htmlFor={id} className={`${!label && 'hidden'}`}>{label}</label>
        <select 
            id={id} 
            className={`rounded-lg p-2 text-typography-dark border-main-soft border-2 ${styles}`} 
        >
            {children}
        </select>
    </>
  )
}

export default SelectList