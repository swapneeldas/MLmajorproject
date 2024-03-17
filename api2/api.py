from fastapi import FastAPI,File,UploadFile
import uvicorn
import cv2
import numpy as np
from io import BytesIO
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware


import tensorflow as tf
# from tensorflow.keras.preprocessing import image
Model=tf.keras.models.load_model("../Models/Models/4")

className=["glioma_tumor","meningioma_tumor","no_tumor","pituitary_tumor"]
app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/hello/{something}")
async def hello(something):
    return f"welcome {something}"


@app.post("/predict")
async def predict(
    file:UploadFile = File(...)
):
    # Reading uploadedfile as bytes
    contents = await file.read()

    #Conver bytes to numpy array representing image
    nparr=np.frombuffer(contents, np.uint8)
    img=cv2.imdecode(nparr,cv2.IMREAD_COLOR)

    #Resize image
    img=cv2.resize(img,(150,150))

    #Converting array to numpy array for model
    img_array =np.array(img)
    #reshapng image for model
    img_array= img_array.reshape(1,150,150,3)
    #predicting
    prediction=Model.predict(img_array)
    #data extraction
    disease=className[np.argmax(prediction)];
    confidence=np.max(prediction)
    #returning required data
    return {
        "disease":disease,
        "confidence":float(confidence)
    }


if __name__ == "__main__":
    uvicorn.run(app,host='localhost',port=8000)