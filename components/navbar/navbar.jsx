import Link from "next/link";
import Image from "next/image";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";

// import images
import iconTodoList from '@/assets/images/icon-todo.svg'
import iconCalendar from '@/assets/images/icon-calendar.svg'
import iconReminders from '@/assets/images/icon-reminders.svg'
import iconPlanning from '@/assets/images/icon-planning.svg'


// component nav item dropdown
function DropdownItem({detail}){
    return (
        <Menu as={'div'} className={`text-[12px] relative 
            w-auto`}>
            {/* button dropdown */}
            <MenuButton className={`font-semibold  relative  w-[100px] text-[13px] justify-center h-full flex items-center gap-1 text-custom-medium-gray transition-all duration-300 hover:text-custom-almost-black`}>
                {detail?.title}
                <IoIosArrowDown className=""/>
            </MenuButton>

            {/* dropdown items */}
            <MenuItems
            as="div" className={`absolute left-0 w-[200pxx] p-4 mt-3 flex flex-col gap-2 bg-white shadow-md rounded-md  `}>
                {
                    detail?.dropdown?.map((el,index)=>{
                        return (
                            <MenuItem key={el.idSub}>
                                <Link href={'/'} className="group w-full h-full flex text-[13px] items-center gap-2 ">
                                    {
                                    el.icon !== undefined && <div className="w-[20px] grid place-items-center"><Image src={el?.icon} className=""/> 
                                    </div>
                                    }
                                    <p className="h-full capitalize text-custom-medium-gray font-medium mt-1 group-hover:text-custom-almost-black" >{el.title}</p>
                                </Link>  
                            </MenuItem>
                        )
                    })
                }
            
            </MenuItems>
        </Menu>
    )
}

export function Navbar(){

    const navigasi = [
        {
            id:1,
            title:"features",
            dropdown:[
                {
                    idSub:1,
                    title:'todo list',
                    icon:iconTodoList,
                },
                {
                    idSub:2,
                    title:'calendar',
                    icon:iconCalendar,
                },
                {
                    idSub:3,
                    title:'reminders',
                    icon:iconReminders,
                },
                {
                    idSub:4,
                    title:'planning',
                    icon:iconPlanning,
                },
            ]
        },
        {
            id:2,
            title:"company",
            dropdown:[
                {
                    idSub:5,
                    title:'history',
                },
                {
                    idSub:6,
                    title:'our team',
                },
                {
                    idSub:7,
                    title:'blog',
                },
            ]
        },
        {
            id:3,
            title:"careers",
        },
        {
            id:4,
            title:"about",
        },
    ]

    return (
        <nav className="relative top-0 left-0 w-full px-2 h-[55px] py-2 border-2 border-red-500">
            {/*//! Container nav */}
            <section className="max-w-6xl h-full  mx-auto flex gap-x-4 ">
                {/* title */}
                <Link href='/' className="font-bold h-full flex items-center text-[2em]">
                    snap
                </Link>
                {/* nav container items */}
                <section className="nav_bg_dark relative flex-1 h-full ">
                    <div className="_nav_items_container relative w-full h-full flex gap-1">
                        {/* nav items */}
                        <section className="flex-1 w-full h-full flex gap-2  relative ">
                            {/* mapping nav items */}
                            {
                                navigasi?.map((el,index)=>{
                                    return el.dropdown !== undefined ? 
                                    <DropdownItem key={el.id} detail={el}/> 
                                    :
                                    (
                                        <Link key={el.id} href={'/'} className={`font-semibold  relative  w-[70px] text-[13px]  h-full capitalize flex items-center gap-1 text-custom-medium-gray transition-all duration-300 hover:text-custom-almost-black`}>
                                         {el.title}
                                        </Link>
                                    )  
                                })
                            }
                                
                        </section>


                        {/* button action */}
                        <section className="action_button h-full flex px-2 gap-3">
                            {/* button login */}
                            <button className="btn_auth hover:text-custom-almost-black">
                                Login
                            </button>
                            {/* button regiter */}
                            <button className="btn_auth ring-2 ring-custom-medium-gray hover:ring-custom-almost-black hover:text-custom-almost-black">
                                Register
                            </button>
                        </section>
                    </div>
                </section>
            </section>
        </nav>
    )
}