import React, { useState } from 'react'
import DropdownDiv from '../../../components/DropdownDiv/DropdownDiv';

const AccountDropdowns = () => {
    const [list, setList] = useState([
        {
            title: "Dane osobowe",
            expanded: false
        },
        {
            title: "Zmień hasło",
            expanded: false
        },
        {
            title: "Zmień e-mail",
            expanded: false
        },
        {
            title: "Powiadomienia",
            expanded: false
        },
        {
            title: "Zarządzanie kontem",
            expanded: false
        }
    ]);

    const handleDropdown = (index: number) => {
        setList((oldList) => {
           const newList = [...oldList];
           newList[index] = { ...newList[index], expanded: !newList[index].expanded};
           return newList;
        })
   }
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8'>
        <DropdownDiv title={list[0].title} expanded={list[0].expanded} handleExpand={() => handleDropdown(0)}>
            <span>Dropdown 1</span>
        </DropdownDiv>

        <DropdownDiv title={list[1].title} expanded={list[1].expanded} handleExpand={() => handleDropdown(1)}>
            <span>Dropdown 1</span>
        </DropdownDiv>

        <DropdownDiv title={list[2].title} expanded={list[2].expanded} handleExpand={() => handleDropdown(2)}>
            <span>Dropdown 1</span>
        </DropdownDiv>

        <DropdownDiv title={list[3].title} expanded={list[3].expanded} handleExpand={() => handleDropdown(3)}>
            <span>Dropdown 1</span>
        </DropdownDiv>

        <DropdownDiv title={list[4].title} expanded={list[4].expanded} handleExpand={() => handleDropdown(4)}>
            <span>Dropdown 1</span>
        </DropdownDiv>
    </div>
  )
}

export default AccountDropdowns