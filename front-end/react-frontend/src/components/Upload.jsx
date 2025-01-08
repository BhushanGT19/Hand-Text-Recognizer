import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Camera from "./Camera";
import Textarea from "./TextArea";
import UploadStatic from "./UploadStatic";
// import the axios instance for communication of data
// import axios from "../axios";

export default function Upload() {
  const [isCamera, setIsCamera] = useState(false);
  const [isStaticImage, setIsStaticImage] = useState(false);

  const [picture, setPicture] = useState("");
  const [text, setText] = useState("");

  // useEffect(() => {
  //   if (picture !== "") {
  // pass the image for the recognition

  // async function extractText() {
  //   alert("image taken");
  //   console.log("inside the extract text");

  //   const formData = new FormData(picture);

  //   console.log(formData);

  // fetch("https://127.0.0.1:8000/extract")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Do something with the data
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     // Handle the error
  //     console.log(error);
  //   });

  // fetch("https://127.0.0.1:8000/extract", {
  //   method: "POST",
  //   body: formData,
  // }).then((resp) => {
  //   console.log(resp);
  //   resp
  //     .json()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  // }

  // const Upload = async () => {
  //   alert("inside the upload");

  //   await fetch("http://127.0.0.1:8000/extract", {
  //     method: "POST",
  //     body: formData,
  //   }).then((resp) => {
  //     console.log(resp);
  //     resp
  //       .json()
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // };

  // await Upload();

  //   await axios
  //     .post("/extract", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }

  //     extractText();
  //   }
  // }, [picture]);

  return (
    <div>
      {text === "" ? (
        !isCamera && !isStaticImage ? (
          <div className="upload-content">
            <h4 className="upload-text">
              Upload Image Or Capture Image For Hindi Text Recognition
            </h4>
                        
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsStaticImage(true)}
              className="m-3"
            >
              Upload Image For Text Recognition
            </Button>

            <Button variant="dark" size="lg" onClick={() => setIsCamera(true)}>
              Capture Image For Text Recognition
            </Button>
          </div>
        ) : isCamera ? (
          <Camera setText={setText} />
        ) : (
          <UploadStatic setText={setText} setPicture={setPicture} />
        )
      ) : (
        <div className="recognization">
          <div>
            <img src={picture} width="400px" height="400px" alt="input pic" />
          </div>
          <div>
            <h5>Recognized Text</h5>
            <Textarea text={text} />
          </div>
        </div>
      )}
    </div>
  );
}
