import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/utils';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import api from '../lib/axios';
import { toast } from 'react-toastify';

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault();
        const confirm = window.confirm("Are you sure you want to delete this note?");
        if (!confirm) return;

        try {
            await api.delete(`/note/${id}`);
            setNotes(prev => prev.filter(note => note._id !== id));
            toast.success("Note deleted successfully!");
        } catch (error) {
            console.error("Error deleting note:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Failed to delete");
        }
    };

    return (
        <div className='p-4 border rounded hover:shadow-md transition'>
            <Link to={`/note/${note._id}`} className='block'>
                <h3 className='font-semibold text-lg'>{note.title}</h3>
                <p className='text-gray-600 mt-1'>{note.description}</p>
            </Link>

            <div className='flex justify-between items-center mt-4'>
                <span className='text-sm text-gray-500'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-2'>
                    <MdModeEditOutline className='cursor-pointer text-blue-500' />
                    <button onClick={(e) => handleDelete(e, note._id)} className='text-red-500'>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
