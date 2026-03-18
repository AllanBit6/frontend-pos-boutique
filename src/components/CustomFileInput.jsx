import { useRef } from "react";
import "./CustomFileInput.css";

function CustomFileInput({ onFileSelect }) {
  const fileRef = useRef(null);

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div className="file-upload">
      <button type="button" onClick={handleClick}>
        Seleccionar imagen
      </button>

      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}

export default CustomFileInput;