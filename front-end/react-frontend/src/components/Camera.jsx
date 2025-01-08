import React, { useState } from "react";
import Webcam from "react-webcam";

import Button from "react-bootstrap/Button";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const Camera = (props) => {
  const [pic, setPic] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPic(pictureSrc);
  });

  function handleSubmit() {
    props.setPicture(pic);
  }
  return (
    <div>
      <h2 className="mb-5 text-center">Capture Image</h2>
      <div>
        {pic === "" ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <div>
            <img src={pic} />
          </div>
        )}
      </div>
      <div>
        {pic !== "" ? (
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPic("");
              }}
              className="btn btn-primary m-3"
            >
              Retake
            </button>
            <Button variant="dark" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
export default Camera;
