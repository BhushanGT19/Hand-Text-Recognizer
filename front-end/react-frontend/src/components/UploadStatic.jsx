import React, { useState } from "react";
import axios from "../axios";

export default function UploadStatic(props) {
  const [pic, setPic] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // from here make a HTTP request to the backend server(using fetch) to extract the text from the image and make changes accordingly to the response

    console.log("fetching");

    const formData = new FormData();

    formData.append("image", pic);

    axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.result);
        props.setText(res.data.result);
        props.setPicture(url);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleFileChange(e) {
    let image = e.target.files[0];

    setPic(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setUrl(reader.result);
    };

    // console.log(URL.createObjectURL(image));
    // setUrl(URL.createObjectURL(image));
  }

  return (
    <div>
      <h2 className="mb-5 text-center">Upload Image</h2>

      {pic !== "" && (
        <div>
          <img height="400px" width="400px" src={url} alt="input" />
          <br />
          <br />
        </div>
      )}

      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        {/* <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control type="file" size="lg" name="image" />
        </Form.Group> */}
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
