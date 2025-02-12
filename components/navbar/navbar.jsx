'use client'
import React,{useState,useEffect} from "react";

import Link from "next/link";
import Image from "next/image";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";

// import images
import iconTodoList from '@/assets/images/icon-todo.svg'
import iconCalendar from '@/assets/images/icon-calendar.svg'
import iconReminders from '@/assets/images/icon-reminders.svg'
import iconPlanning from '@/assets/images/icon-planning.svg'
import iconBar from '@/assets/images/icon-menu.svg'
import iconClose from '@/assets/images/icon-close-menu.svg'


// component nav item dropdown
function DropdownItem({detail}){
    return (
        <Menu as={'div'} className={`text-[12px] relative  
            w-auto`}>
            {/* button dropdown */}
            <MenuButton className={`font-semibold  relative w-full h-[40px] capitalize  text-[13px] justify-left  flex items-center gap-1 text-custom-medium-gray transition-all duration-300 hover:text-custom-almost-black md:w-auto md:justify-center md:h-full`}>
                {detail?.title}
                <IoIosArrowDown className=""/>
            </MenuButton>

            {/* dropdown items */}
            <MenuItems
            as="div" className={`relative w-full capitalize    flex flex-col gap-2 bg-white p-2
            md:absolute md:left-0 md:w-[150px] md:p-4 md:mt-3 md:rounded-md md:shadow-md`}>
                {
                    detail?.dropdown?.map((el,index)=>{
                        return (
                            <MenuItem key={el.idSub}>
                                <Link href={'/'} className="group w-full h-full flex text-[13px] items-center gap-2 ">
                                    {
                                    el.icon !== undefined && <div className="w-[20px] grid place-items-center"><Image alt="" src={el?.icon} className=""/> 
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
    let [activeSideBar,serActiveSidebar] = useState(false)
    let [activeSideBarAnimation,setActiveSidebarAnimation] = useState(false)


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
        <nav className="fixed z-[4] bg-custom-almost-white top-0 left-0 w-full px-5 h-[60px] py-3">
            {/*//! Container nav */}
            <section className="max-w-6xl h-full  mx-auto flex gap-x-4 ">
                {/* title */}
                <Link href='/' className="font-bold h-full flex items-center text-[2em]">
                    snap
                </Link>

                {/* nav container items */}
                <section className={
                    `nav_bg_dark flex-1 left-0 top-0 fixed  z-[5] bg-black/85 w-full  h-full  md:relative md:z-[1] max-md:flex max-md:justify-end md:bg-transparent
                    ${activeSideBar === false  && 'max-md:hidden'}
                    `
                }
                onClick={()=>{
                    setActiveSidebarAnimation(false)
                    setTimeout(() => {
                    serActiveSidebar(false)
                    }, 250);
                }}
                >
                    <div className={`
                    _nav_items_container relative bg-white flex gap-1 w-[250px]   border-cyan-500 h-full flex-col md:w-full md:flex-row md:bg-transparent  max-md:p-5 max-md:overflow-y-auto
                    max-md:transition-all max-md:duration-200  ease-show-sidebar
                    ${
                        activeSideBarAnimation ? 'max-md:translate-x-[0%]' : ' max-md:translate-x-[100%]'
                    }
                    `}
                        onClick={(e)=>{e.stopPropagation()}}
                    >

                        {/* close sidebar */}
                        <div className=" w-full h-[50px] flex justify-end md:w-[50px] md:h-full md:hidden ">
                            <button className="" 
                                onClick={()=>{
                                    setActiveSidebarAnimation(false)
                                    setTimeout(() => {
                                    serActiveSidebar(false)
                                    }, 250);
                                }}
                            >
                                <Image alt="" src={iconClose} className=""/>
                            </button>
                        </div>

                        {/* nav items */}
                        <section className="flex-1 w-full h-auto flex gap-x-5 gap-y-2  relative flex-col md:flex-row md:h-full "
                        >
                            {/* mapping nav items */}
                            {
                                navigasi?.map((el,index)=>{
                                    return el.dropdown !== undefined ? 
                                    <DropdownItem key={el.id} detail={el}/> 
                                    :
                                    (
                                        <Link key={el.id} href={'/'} className={`nav_item md:w-[70px] md:h-full `}>
                                         {el.title}
                                        </Link>
                                    )  
                                })
                            }
                                
                        </section>


                        {/* button action */}
                        <section className="action_button h-full flex px-2 gap-3 flex-col max-md:w-full md:h-full md:flex-row " >
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
                 
                {/* toggle button */}
                <div className=" w-full h-full flex justify-end self-end md:hidden md:w-[50px] md:justify-center">
                           <button          
                           onClick={()=>{
                             serActiveSidebar(true)
                                setTimeout(() => {
                                setActiveSidebarAnimation(true)
                                }, 100);
                            }}
                             >
                            <Image alt="" src={iconBar}/>
                           </button>
                </div>
            </section>
        </nav>
    )
}