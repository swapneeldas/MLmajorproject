import React, { useCallback, useState } from 'react'
import axios from 'axios';
import {useDropzone} from 'react-dropzone'
import Button from '@mui/material/Button';
let tumourData={
  "Glioma Tumor":"Gliomas are a type of brain tumor that originates in the glial cells, which support and protect neurons in the brain. They can vary in severity from benign to malignant, with the latter being more aggressive. Symptoms may include headaches, seizures, cognitive impairment, and personality changes. Treatment typically involves a combination of surgery, radiation therapy, and chemotherapy, depending on the tumor's size, location, and grade. Despite advancements in treatment, gliomas can be challenging to treat due to their infiltrative nature within the brain tissue.",

  "Meningioma Tumor":"Meningiomas are tumors that develop in the meninges, the protective membranes surrounding the brain and spinal cord. They are typically slow-growing and often benign, but can cause symptoms depending on their size and location. Symptoms may include headaches, seizures, visual disturbances, and changes in behavior or personality. Treatment usually involves observation, surgery, radiation therapy, or a combination of these depending on the tumor's size, location, and symptoms.",

  "Pituitary Tumor": "Pituitary tumors are growths that develop in the pituitary gland, a small gland located at the base of the brain. They can be benign or malignant and can affect hormone production, leading to various symptoms. Symptoms may include headaches, vision problems, hormonal imbalances, and changes in appetite or weight. Treatment options include medication, surgery, and radiation therapy, depending on the tumor's size, type, and impact on hormone levels.",

  "No Tumor":"Our model analysis indicates that there is no tumor present in this MRI scan. You are in the clear and can rest assured about your health."
}
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

<div className={data !== null ? "predictdivdata" : "predictdiv"}>
<div>
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
            
              <div className='btndiv'>
              <Button variant="outlined" color='primary' sx={{
                background:"black",
                color:"white"
              }} onClick={handlePridict}>Predict</Button>
              </div>
              </div>
              
              {(data!==null)&&(
<div className='data'>
<div className='verticalline'></div>
  <div className='innerdata'>
  {
    (parseFloat(data.confidence*100).toPrecision(3)<65)?<p>Can't read the image properly</p>:
    <div>
    <div className='target'><span>Predicted Result:-</span> {data.disease}</div>
    <div className='target'><span>Confidence:-</span> {parseFloat(data.confidence*100).toPrecision(3)}%</div>
    <p className='dataheader target'><span>Tumour Info</span></p>
    <p className='datapara target'>
    {tumourData[data.disease]}
    </p>
    </div>
  }

  </div>
  </div> 
              )}


              {/* {(data!==null)&&(
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
                
               */}
              

              </div>
</>
      );
}

export default uploadfile
{/* <div className='data'>
<div className='verticalline'></div>
  <div className='innerdata'>
  {
    (false)?<p>Can't read the image properly</p>:
    <div>
    <div className='target'>Predicted Result:- Brain tumour</div>
    <div className='target'>Confidence:- 100%</div>
    <p className='dataheader target'>Extra Info</p>
    <p className='datapara target'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
  }

  </div>
  </div> */}