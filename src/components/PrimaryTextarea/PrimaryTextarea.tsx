import React from 'react'

type Props = {
    id: string;
    styles?: string;
    placeholder: string;
    label?: string;
    disabled?: boolean;
}

const PrimaryTextarea = ({ id, styles, placeholder, label, disabled }: Props) => {
  return (
    <>
        <label htmlFor={id} className={`${!label && 'hidden'}`}>{label}</label>
        <textarea 
            id={id} 
            className={`rounded-lg p-2 focus:outline-none text-typography-dark border-main-soft border-2 ${styles}`} 
            placeholder={placeholder}
            disabled={disabled}
        />
    </>
  )
}

export default PrimaryTextarea