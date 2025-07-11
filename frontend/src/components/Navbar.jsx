import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";


const Navbar = () => {
    return (
        <header className=' bg-amber-500 border-b border-amber-600'>
            <div className=' mx-auto max-w-6xl px-4 py-4 '>
                <div className=' flex items-center justify-between'>
                    <h1 className=' text-3xl font-bold capitalize'> thinkBoard</h1>
                    <div className=' flex items-center gap-4'>
                        <Link to={"/create"} className='flex justify-between items-center capitalize'>
                            <p><IoIosAdd className=' size-9'/></p><span className=' font-bold'>new note</span>

                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
