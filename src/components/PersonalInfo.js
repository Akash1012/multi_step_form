import React, { useEffect } from "react";

function PersonalInfo({ formData, setFormData, setBtnCheck }) {
  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const { firstName, lastName, username } = formData;
    if (firstName && lastName && username) {
      setBtnCheck(false);
    } else {
      setBtnCheck(true);
    }
  }, [formData, setFormData]);
  return (
    <div className="personal-info-container">
      <input
        type="text"
        name="firstName"
        placeholder="First Name .."
        onChange={handleInput}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name .."
        onChange={handleInput}
        value={formData.lastName}
      />
      <input
        type="text"
        name="username"
        placeholder="Username.."
        onChange={handleInput}
        value={formData.username}
      />
    </div>
  );
}

export default PersonalInfo;
