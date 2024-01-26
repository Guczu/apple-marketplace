import React from 'react'

type Props = {
    id: string;
    styles?: string;
    placeholder: string;
    label?: string;
    disabled?: boolean;
    type?: string;
}

const PrimaryInput = ({ id, type, styles, placeholder, label, disabled }: Props) => {
  return (
    <>
        <label htmlFor={id} className={`${!label && 'hidden'}`}>{label}</label>
        <input 
            type={type ? type : "text"}
            id={id} 
            className={`rounded-lg p-2 focus:outline-none text-typography-dark border-main-soft border-2 ${styles}`} 
            placeholder={placeholder}
            disabled={disabled}
        />
    </>
  )
}

export default PrimaryInput