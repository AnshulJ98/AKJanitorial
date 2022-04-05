import React, { useState } from "react";

function ImageUpload({ formData, setFormData }) {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [selectedImage5, setSelectedImage5] = useState(null);
  return (
    <div className="other-info-container">
      <span>
        Uploading Images is totally optional. You can get a more accurate and
        quicker quote by uploading images.<br></br>You will also recieve
        discount by uploading images!
      </span>
      <div>
        {selectedImage1 && (
          <div>
            <img
              alt="not found"
              width={"350px"}
              src={URL.createObjectURL(selectedImage1)}
            />
            <br />
            <button
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
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage1(event.target.files[0]);
            setFormData({
              ...formData,
              image1: event.target.files[0],
            });
          }}
        />
      </div>
      <div>
        {selectedImage2 && (
          <div>
            <img
              alt="not found"
              width={"350px"}
              src={URL.createObjectURL(selectedImage2)}
            />
            <br />
            <button
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
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage2(event.target.files[0]);
            setFormData({
              ...formData,
              image2: event.target.files[0],
            });
          }}
        />
      </div>

      <div>
        {selectedImage3 && (
          <div>
            <img
              alt="not found"
              width={"350px"}
              src={URL.createObjectURL(selectedImage3)}
            />
            <br />
            <button
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
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage3(event.target.files[0]);
            setFormData({
              ...formData,
              image3: event.target.files[0],
            });
          }}
        />
      </div>
      <div>
        {selectedImage4 && (
          <div>
            <img
              alt="not found"
              width={"350px"}
              src={URL.createObjectURL(selectedImage4)}
            />
            <br />
            <button
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
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage4(event.target.files[0]);
            setFormData({
              ...formData,
              image4: event.target.files[0],
            });
          }}
        />
      </div>
      <div>
        {selectedImage5 && (
          <div>
            <img
              alt="not found"
              width={"350px"}
              src={URL.createObjectURL(selectedImage5)}
            />
            <br />
            <button
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
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage5(event.target.files[0]);
            setFormData({
              ...formData,
              image5: event.target.files[0],
            });
          }}
        />
      </div>
    </div>
  );
}

export default ImageUpload;
