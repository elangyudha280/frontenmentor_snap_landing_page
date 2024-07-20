import Link from "next/link";



export function Navbar(){
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
                        <section className="flex-1 w-full h-full flex gap-2   px-2 border-2 border-red-500">

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