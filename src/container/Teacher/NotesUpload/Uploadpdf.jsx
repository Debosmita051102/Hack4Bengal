import React, { useState } from 'react';
import './Uploadpdf.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleNameChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the selected file is a PDF
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Start the uploading process
    setUploading(true);

    // Simulating the upload process with a delay
    setTimeout(() => {
      // Perform any necessary validations or processing here
      // For example, you can upload the selected file to a server

      // Reset the form fields
      setCourseName('');
      setDescription('');
      setSelectedFile(null);

      // Finish the uploading process
      setUploading(false);
    }, 2000);
  };

  return (
    <div className='CreateVid_header'>
      <h1>Upload<span>PDF</span></h1>
      <p>Upload your file here</p>
      <div className='Createvid_container'>
        <form onSubmit={handleSubmit}>
          <label className='Course'>
            Course Name:
            <input
              type='text'
              value={courseName}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label className='Descript'>
            Description:
            <textarea
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
          <br />
          <br />
          <label className='upload-label'>
            <FontAwesomeIcon icon={faUpload} className='upload-icon' />
            <span className='upload-text'>Choose PDF File</span>
            <input
              type='file'
              accept='application/pdf'
              onChange={handleFileChange}
            />
          </label>
          <br />
          <button type='submit'>{uploading ? 'Uploading...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
