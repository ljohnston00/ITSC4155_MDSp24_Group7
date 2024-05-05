import React, { useState } from 'react';
import { createLearningSeries } from '../services/learningService/createlearningseries.service';

const CreateLearningSeriesCard = () => {
  const [title, setTitle] = useState('');
  const [videoSource, setVideoSource] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('videoSource', videoSource);
    formData.append('content', content);
    formData.append('thumbnail', thumbnail);
    await createLearningSeries(formData);
  };

  return (
    <div className='createCard'>
        <h1 className='createTitle'>Make A Series</h1>
      <form className='createForm' onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} required />
        <input type="text" placeholder="Video Source" onChange={e => setVideoSource(e.target.value)} required />
        <textarea rows={3} placeholder="Content" onChange={e => setContent(e.target.value)} required />
        <input id="file" className="fileInput" type="file" accept="image/*" onChange={e => setThumbnail(e.target.files[0])} required />
        <label htmlFor="file" className="fileLabel">Choose Image for Thumbnail</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateLearningSeriesCard;
