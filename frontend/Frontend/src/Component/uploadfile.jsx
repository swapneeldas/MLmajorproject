import React, { useCallback, useState } from 'react'
import axios from 'axios';
import {useDropzone} from 'react-dropzone'
import Button from '@mui/material/Button';
const uploadfile = () => {
    const onDrop = useCallback((acceptedFiles) => {
        const file = new FileReader;
    
        file.onload = function() {
          setPreview(file.result);
          console.log(file.result);
        }
    
        file.readAsDataURL(acceptedFiles[0])
      }, [])
    
      const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
      });
     let [data,setdata]=useState(null);
      const [preview, setPreview] = useState(null);
    
      /**
       * handleOnSubmit
       */
    
      async function handlePridict(e) {
        e.preventDefault();
        console.log(acceptedFiles[0]);
        const formData = new FormData();
        formData.append("file",acceptedFiles[0])
        const results = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            body: formData
          }).then(r => r.json()).then((r)=>{
            setdata(r)
          });
      }
      return(
<>
<div {...getRootProps()} className='imagediv'>
             {(preview===null)?
             <div>
             <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag 'n' drop some files here, or click to select files</p>
              }

             </div>:<div className='center'>
             <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <img src={preview} className='image'></img>
              }
             </div>
             }
            </div>
              {/* <div className='btn' onClick={handlePridict}>Predict</div> */}
             {(data!==null)&&(
                <div className='center'>
                <div>
                <div className='center'>{data.disease}</div>
                <div>{data.confidence}</div>
                </div>
                </div>)
              }
              <div className='center'>
              <Button variant="outlined" color='primary' sx={{
                background:"black",
                color:"white"
              }} onClick={handlePridict}>Predict</Button>
              </div>
            
</>
      );
}

export default uploadfile