import React, { useState } from "react";
function ImageUpload({ formData, setFormData }) {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [selectedImage5, setSelectedImage5] = useState(null);
  return (
    <div className="image-upload-container">
      <div className="px-5 upload-images">
        <p className="lead">
          Uploading Images is totally optional. You can get a more accurate and
          quicker quote by uploading images.<br></br>You will also recieve
          discount by uploading images!
        </p>
        <div>
          {selectedImage1 && (
            <div className="text-center">
              <img
                alt="not found"
                width={"350px"}
                src={URL.createObjectURL(selectedImage1)}
              />
              <br />
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  setFormData({
                    ...formData,
                    image1: null,
                  });
                  setSelectedImage1(null);
                }}
              >
                Remove
              </button>
            </div>
          )}
          <br />

          <br />

          {!selectedImage1 && (
            <React.Fragment>
              <label htmlFor="file-upload1" className="custom-file-upload">
                <span className="lead fw-normal fs-6">
                  <img
                    className="cloud-upload"
                    src="upload.png"
                    width={"7%"}
                  ></img>
                  Choose File
                </span>
              </label>
              <input
                id="file-upload1"
                type="file"
                name="myImage"
                onChange={async (event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage1(event.target.files[0]);
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);
                  fileReader.onload = () => {
                    console.log(fileReader);
                    setFormData({
                      ...formData,
                      image1str: fileReader.result,
                    });
                  };

                  setFormData({
                    ...formData,
                    image1: event.target.files[0],
                  });
                }}
              />
            </React.Fragment>
          )}
        </div>
        <div>
          {selectedImage2 && (
            <div className="text-center">
              <img
                alt="not found"
                width={"350px"}
                src={URL.createObjectURL(selectedImage2)}
              />
              <br />
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  setFormData({
                    ...formData,
                    image2: null,
                  });
                  setSelectedImage2(null);
                }}
              >
                Remove
              </button>
            </div>
          )}
          <br />

          <br />
          {!selectedImage2 && (
            <React.Fragment>
              <label htmlFor="file-upload2" className="custom-file-upload">
                <span className="lead fw-normal fs-6">
                  <img
                    className="cloud-upload"
                    src="upload.png"
                    width={"7%"}
                  ></img>
                  Choose File
                </span>
              </label>
              <input
                id="file-upload2"
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage2(event.target.files[0]);
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);
                  fileReader.onload = () => {
                    console.log(fileReader);
                    setFormData({
                      ...formData,
                      image2str: fileReader.result,
                    });
                  };

                  setFormData({
                    ...formData,
                    image2: event.target.files[0],
                  });
                }}
              />
            </React.Fragment>
          )}
        </div>

        <div>
          {selectedImage3 && (
            <div className="text-center">
              <img
                alt="not found"
                width={"350px"}
                src={URL.createObjectURL(selectedImage3)}
              />
              <br />
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  setFormData({
                    ...formData,
                    image3: null,
                  });
                  setSelectedImage3(null);
                }}
              >
                Remove
              </button>
            </div>
          )}
          <br />

          <br />
          {!selectedImage3 && (
            <React.Fragment>
              <label htmlFor="file-upload3" className="custom-file-upload">
                <span className="lead fw-normal fs-6">
                  <img
                    className="cloud-upload"
                    src="upload.png"
                    width={"7%"}
                  ></img>
                  Choose File
                </span>
              </label>
              <input
                id="file-upload3"
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage3(event.target.files[0]);
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);
                  fileReader.onload = () => {
                    console.log(fileReader);
                    setFormData({
                      ...formData,
                      image3str: fileReader.result,
                    });
                  };

                  setFormData({
                    ...formData,
                    image3: event.target.files[0],
                  });
                }}
              />
            </React.Fragment>
          )}
        </div>
        <div>
          {selectedImage4 && (
            <div className="text-center">
              <img
                alt="not found"
                width={"350px"}
                src={URL.createObjectURL(selectedImage4)}
              />
              <br />
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  setFormData({
                    ...formData,
                    image4: null,
                  });
                  setSelectedImage4(null);
                }}
              >
                Remove
              </button>
            </div>
          )}
          <br />

          <br />
          {!selectedImage4 && (
            <React.Fragment>
              <label htmlFor="file-upload4" className="custom-file-upload">
                <span className="lead fw-normal fs-6">
                  <img
                    className="cloud-upload"
                    src="upload.png"
                    width={"7%"}
                  ></img>
                  Choose File
                </span>
              </label>
              <input
                id="file-upload4"
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage4(event.target.files[0]);
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);
                  fileReader.onload = () => {
                    console.log(fileReader);
                    setFormData({
                      ...formData,
                      image4str: fileReader.result,
                    });
                  };

                  setFormData({
                    ...formData,
                    image4: event.target.files[0],
                  });
                }}
              />
            </React.Fragment>
          )}
        </div>
        <div className="mb-3">
          {selectedImage5 && (
            <div className="text-center">
              <img
                alt="not found"
                width={"350px"}
                src={URL.createObjectURL(selectedImage5)}
              />
              <br />
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  setFormData({
                    ...formData,
                    image5: null,
                  });
                  setSelectedImage5(null);
                }}
              >
                Remove
              </button>
            </div>
          )}
          <br />

          <br />
          {!selectedImage5 && (
            <React.Fragment>
              <label htmlFor="file-upload5" className="custom-file-upload">
                <span className="lead fw-normal fs-6">
                  <img
                    className="cloud-upload"
                    src="upload.png"
                    width={"7%"}
                  ></img>
                  Choose File
                </span>
              </label>
              <input
                id="file-upload5"
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage5(event.target.files[0]);
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);
                  fileReader.onload = () => {
                    console.log(fileReader);
                    setFormData({
                      ...formData,
                      image5str: fileReader.result,
                    });
                  };

                  setFormData({
                    ...formData,
                    image5: event.target.files[0],
                  });
                }}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
