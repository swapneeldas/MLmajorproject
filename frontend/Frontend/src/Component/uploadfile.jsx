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
<h1 className='header'>PREDICTION</h1>
<div className='center'>
  
</div>
{(data!==null)&&(
                <div className='center data'>
                <div>
                {
                  (parseFloat(data.confidence*100).toPrecision(3)<65)?<p>Can't read the image properly</p>:<div>
                  <div className='center'>{data.disease}</div>
                <div>{parseFloat(data.confidence*100).toPrecision(3)}</div>
                  </div>
                }
             
                </div>
                </div>)
              }
<div {...getRootProps()} className='imagediv'>
             {(preview===null)?
             <div>
             <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>DROP OR CHOOSE MRI SCAN</p>
              }

             </div>:<div className='center'>
             <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <div className='imagedivim'>
                  <img src={preview} className='image'></img>
                  </div>
              }
             </div>
             }
            </div>
              {/* <div className='btn' onClick={handlePridict}>Predict</div> */}
            
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