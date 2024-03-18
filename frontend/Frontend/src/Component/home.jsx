import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='section'>
    <div className='innersection'>
      <h1 className='heading'>Brain Tumor Classification</h1>
      <p className='para'>
      Welcome. your trusted destination for precise brain tumor classification through MRI scans.
here we understand the importance of accurate diagnoses and timely treatment decisions when it comes to brain health. That's why we've developed a state-of-the-art platform powered by advanced machine learning technology, designed to analyze MRI scans with unparalleled accuracy.
Our mission is to provide you with actionable insights that empower informed decisions and pave the way for better health outcomes.
Join us on this journey towards improved brain health. Upload your MRI scan today and discover the peace of mind that comes with precise tumor classification. Together, let's unlock the potential of medical technology to make a difference in people's lives.
      </p>
   <div className='TIObutton'><Link to="/predict" >TRY IT OUT</Link></div> 
   <hr className='middleline' />
    <h2 className='subheading'>
    TYPES OF BRAIN TUMORS
    </h2>
    <h3 className="sub-sub-heading">GLIOMA TUMORS</h3>
    <p className='para'>Gliomas are a type of brain tumor that originates in the glial cells, which support and protect neurons in the brain. They can vary in severity from benign to malignant, with the latter being more aggressive. Symptoms may include headaches, seizures, cognitive impairment, and personality changes. Treatment typically involves a combination of surgery, radiation therapy, and chemotherapy, depending on the tumor's size, location, and grade. Despite advancements in treatment, gliomas can be challenging to treat due to their infiltrative nature within the brain tissue.</p>
    <h3 className="sub-sub-heading">MENINGIOMA TUMORS</h3>
    <p className='para'>Meningiomas are tumors that develop in the meninges, the protective membranes surrounding the brain and spinal cord. They are typically slow-growing and often benign, but can cause symptoms depending on their size and location. Symptoms may include headaches, seizures, visual disturbances, and changes in behavior or personality. Treatment usually involves observation, surgery, radiation therapy, or a combination of these depending on the tumor's size, location, and symptoms.</p>
    <h3 className="sub-sub-heading">PITUITARY TUMORS</h3>
    <p className='para'>Pituitary tumors are growths that develop in the pituitary gland, a small gland located at the base of the brain. They can be benign or malignant and can affect hormone production, leading to various symptoms. Symptoms may include headaches, vision problems, hormonal imbalances, and changes in appetite or weight. Treatment options include medication, surgery, and radiation therapy, depending on the tumor's size, type, and impact on hormone levels.</p>
    <hr className='middleline' />
    <h2 className='subheading'>HOW IT WORKS</h2>
    <p className='para'>Our website serves the purpose of classifying MRI scans to determine the presence of brain tumors, specifically Meningioma, Pituitary, and Glioma. The frontend of our website is developed using React, providing an intuitive user interface. For server-side operations, we leverage FastAPI, a high-performance web framework for building APIs with Python. The core functionality of tumor classification is powered by TensorFlow, a popular machine learning framework, along with various other Python libraries optimized for model creation and evaluation.</p>
    <hr className='middleline' />
    </div>
    
    </div>
  )
}

export default home