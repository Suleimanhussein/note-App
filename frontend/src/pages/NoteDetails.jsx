import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../lib/axios';
import { toast } from 'react-toastify';
import { Loader } from 'lucide-react';
import { IoMdArrowBack } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

const NoteDetails = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // 🔄 Fetch the note
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/note/${id}`);
        setTitle(res.data.title || '');
        setDescription(res.data.description || '');
      } catch (error) {
        toast.error('Failed to fetch note');
        console.error('Fetch error:', error);
        navigate('/not-found');
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  // 🗑 Delete the note
  const handleDelete = async () => {
    try {
      setSaving(true);
      await api.delete(`/note/${id}`);
      toast.success('Note deleted');
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete');
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  // ✅ Update the note
  const handleUpdate = async () => {
    if (!title.trim() || !description.trim()) {
      toast.warn('Please fill in both fields');
      return;
    }

    try {
      setSaving(true);
      await api.put(`/note/${id}`, { title, description });
      toast.success('Note updated successfully');
    } catch (error) {
      toast.error('Failed to update');
      console.error('Update error:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Loader className='animate-spin size-30' />
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <div className='mx-auto px-4 py-8 md:w-200'>
        <div className='flex items-center justify-between mb-6'>
          <Link to="/" className='flex items-center font-semibold'>
            <IoMdArrowBack className='text-3xl mr-2' /> back to notes
          </Link>
          <button onClick={handleDelete} className='text-red-500' disabled={saving}>
            <MdDelete className='text-2xl' />
          </button>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700'>Description</label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
          ></textarea>
        </div>

        <button
          onClick={handleUpdate}
          disabled={saving}
          className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'
        >
          {saving ? 'Saving...' : 'Update Note'}
        </button>
      </div>
    </div>
  );
};

export default NoteDetails;



































// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import api from '../lib/axios';
// import { toast } from 'react-toastify';
// import { Loader } from 'lucide-react';
// import { ClipLoader } from "react-spinners";
// import { IoMdArrowBack } from 'react-icons/io';
// import { MdDelete } from 'react-icons/md';
// const NoteDetails = () => {
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const navigate = useNavigate()

//   const { id } = useParams();

//   const handleDelete = () => {

    
//   }


//   useEffect(() => {
//     const fetchNote = async () => {
//       try {
//         const res = await api.get(`/note/${id}`);
//         setNote(res.data);
//       } catch (error) {
//         toast.error('Failed to fetch note');
//         console.error('Error fetching note:', error);
//         navigate('/not-found'); // Redirect to a "not found" page
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNote();
//   }, [id])


//   console.log({ note })
//   if (loading) {
//     return <div className=' min-h-screen flex items-center justify-center'><Loader className=' animate-spin size-30' /></div>;
//   }

//   return (
//     <div className='min-h-screen'>
//       <div className=' mx-auto px-4 py-8 md:w-200'>
//         <div className=' flex items-center justify-between mb-6'>
//           <Link to={"/"} className=' mb-6 flex items-center capitalize font-semibold'>

//             <IoMdArrowBack className=' font-bold text-3xl items-center' /> back to notes
//           </Link>
//           <button onClick={(e) => handleDelete(e, note._id)} className='text-red-500'>
//             <MdDelete />
//           </button>
//         </div>

//         <div>
//           <label className='block text-sm font-medium text-gray-700'>Title</label>
//           <input
//             placeholder='Enter note title'
//             type="text"
//             id="title"
//             // value={title}
//             // onChange={(e) => setTitle(e.target.value)}
//             className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NoteDetails
