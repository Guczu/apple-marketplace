import React, { useState } from 'react'
import AccountButtons from './AccountButtons/AccountButtons'
import AccountDropdowns from './AccountDropdowns/AccountDropdowns';

const Account = () => {

  return (
    <section className='container mx-auto flex flex-col justify-center items-center gap-8 border-t-2 p-4 mb-12'>
        <AccountButtons />
        <AccountDropdowns />
    </section>
  )
}

export default Account