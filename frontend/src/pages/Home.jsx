import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';
import NoteFound from '../components/NoteFound';

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/note");
        // if (Array.isArray(res.data.allNotes)) {
        //   setNotes(res.data.allNotes);
        // } else {
        //   console.warn('Unexpected response format:', res.data);
          setNotes(res.data.allNotes || []);
        // }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        }
        console.error('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>

        {notes.length === 0 && !isRateLimited && <NoteFound />}

        {loading ? (
          <div className='text-center py-10'>Loading Notes…</div>
        ) : notes.length > 0 && !isRateLimited ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                setNotes={setNotes} // ✅ this line is now added!
              />
            ))}
          </div>
        ) : (
          !isRateLimited && <p className='text-center text-gray-500'>No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
