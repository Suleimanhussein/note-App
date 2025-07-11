import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { toast } from 'react-toastify';
// import axios from 'axios';
import api from '../lib/axios';


const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const Navigate=useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log("Form submitted!", { title, description });

  //   if (!title || !description) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const res = await axios.post("http://localhost:5001/note/", {
  //       title,
  //       description
  //     });

  //     console.log("Response:", res.data);
  //     toast.success("Note created successfully!");

  //     setTitle('');
  //     setDescription('');
  //   } catch (error) {
  //     console.error("Axios Error:", error);
  //     toast.error("Failed to create note");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true)
    try {
      const res = await api.post("/note", {
        title,
        description
      })

      
      toast.success("Note created successfully!");
      Navigate("/"); 
      
    } catch (error) {
      console.error("Axios Error:", error)
      toast.error("Failed to create note")
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className='min-h-screen  '>
      <div className=' mx-auto px-4 p-8'>
        <div className='mx-auto max-w-2xl'>
          <Link to={"/"} className=' mb-6 flex items-center capitalize font-semibold'>

            <IoMdArrowBack className=' font-bold text-3xl' /> back to notes
          </Link>
          <div>
            <h1 className='text-2xl font-bold mb-4'>Create a New Note</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Title</label>
                <input
                  placeholder='Enter note title'
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              >
                {loading ? 'Creating...' : 'Create Note'}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreatePage
