import React, { useEffect } from "react";

function OtherInfo({ formData, setFormData, setBtnCheck }) {
  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const { nationality, other } = formData;
    if (nationality && other) {
      setBtnCheck(false);
    } else {
      setBtnCheck(true);
    }
  }, [formData, setFormData]);

  return (
    <div className="other-info-container">
      <input
        type="text"
        name="nationality"
        placeholder="Nationality .."
        onChange={handleInput}
        value={formData.nationality}
      />
      <input
        type="text"
        name="other"
        placeholder="Other ..."
        onChange={handleInput}
        value={formData.other}
      />
    </div>
  );
}

export default OtherInfo;
