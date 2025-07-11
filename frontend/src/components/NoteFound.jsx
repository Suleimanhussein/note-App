import React from 'react'
import { Link } from 'react-router-dom'

const NoteFound = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center mt-10'>Note Not Found</h1>
        <p className='text-center text-gray-600 mt-4'>The note you are looking for does not exist or has been deleted.</p>
        <div className='flex justify-center mt-6'>
            <Link to="/create" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>Create Note</Link>
        </div>
    </div>
  )
}

export default NoteFound
