'use client'
import React, {useState,useEffect} from "react"
import Image from "next/image"
// import image
import iconDatabiz from '@/assets/images/client-databiz.svg'
import iconAudioPhile from '@/assets/images/client-audiophile.svg'
import iconMeet from '@/assets/images/client-meet.svg'
import iconMaker from '@/assets/images/client-maker.svg'


export function BodyContent(){

    const optionfooter = [
        {
            id:1,
            icon:iconDatabiz,
        },
        {
            id:2,
            icon:iconAudioPhile,
        },
        {
            id:3,
            icon:iconMeet,
        },
        {
            id:4,
            icon:iconMaker,
        }
    ]
    return (
        <section className="content_body w-full h-full relative    pt-[3em]  overflow-x-hidden overflow-y-auto flex items-start min-[900px]:items-center">
          {/* container */}
          <div className="max-w-6xl flex-1 mx-auto  flex gap-4 flex-col min-[900px]:flex-row">
            {/* left content */}
            <div className=" p-4 flex flex-col flex-1 w-full h-full min-[900px]:h-[560px] gap-5 max-[900px]:order-2">
              {/* container title */}
              <div className="title_container pt-[2em]">
                <h2 className="capitalize font-bold text-center text-[2.5em] leading-none min-[900px]:text-left min-[900px]:text-[5em] m-0 p-0">make remote work</h2>
              </div>

              {/* container description */}
              <div className="flex-1 w-full h-full">
                {/* desctipition */}
                <p className="description text-custom-medium-gray text-[14px]  line-clamp-4 font-medium text-center min-[900px]:text-justify  min-[900px]:w-[400px]">
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>

                {/* button */}
                <div className="w-full flex justify-center  mt-8 min-[900px]:justify-start">
                      <button className="bg-custom-almost-black rounded-xl text-white  font-medium py-3 text-[13px] px-5 transition-all duration-200 hover:bg-white hover:text-slate-950 hover:ring-1 hover:ring-custom-almost-black">
                        Learn more
                      </button>
                </div>
              </div>

              {/* footer */}
              <div className="w-full flex   mt-4 flex-wrap gap-2 min-[900px]:gap-5">
                {
                    optionfooter?.map((el)=>{
                        return (
                            <Image alt="" src={el.icon} className="scale-75"/>
                        )
                    })
                }
              </div>
            </div>

            {/* right content */}
            <div className="w-full  min-[900px]:w-[420px] h-[550px] 
            bg-[url('../assets/images/image-hero-mobile.png')]  min-[900px]:bg-[url('../assets/images/image-hero-desktop.png')] bg-center bg-cover bg-no-repeat max-[900px]:order-1
            "> 
              {/* <Image alt="" src={iconHero}  className="w-full h-full  object-center"/> */}
            </div>
          </div>
        </section>
    )
}