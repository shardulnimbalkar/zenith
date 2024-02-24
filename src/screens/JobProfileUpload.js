import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ExcelUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded file, send it to your Java backend
    const file = acceptedFiles[0];
    if (file) {
      const formData = new FormData();
      formData.append("excelFile", file);

      // Example: Send formData to your Java backend using fetch or an API library
      fetch("your-backend-api-endpoint", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from your backend
          console.log("Backend response:", data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error uploading file:", error);
        });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the Excel file here...</p>
        ) : (
          <p>Drag & drop the Excel file here, or click to select one</p>
        )}
      </div>
    </div>
  );
};

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default ExcelUploader;
