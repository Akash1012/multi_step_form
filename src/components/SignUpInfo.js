import React, { useEffect } from "react";

function SignUpInfo({ formData, setFormData, setBtnCheck }) {
  const handleInput = (event) => {
    console.log(event.target.name);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const { email, password, confirmPassword } = formData;
    if (email && password && confirmPassword) {
      setBtnCheck(false);
    } else {
      setBtnCheck(true);
    }
  }, [formData, setFormData]);

  return (
    <div className="sign-up-container">
      <input
        type="text"
        name="email"
        placeholder="Email .."
        value={formData.email}
        onChange={handleInput}
        required={true}
        // onChange={(event) => {
        //   setFormData({
        //     ...formData,
        //     email: event.target.value,
        //   });
        // }}
      />
      <input
        name="password"
        type="text"
        placeholder="Password .."
        onChange={handleInput}
        value={formData.password}
      />
      <input
        type="text"
        name="confirmPassword"
        placeholder="Confirm Password .."
        onChange={handleInput}
        value={formData.confirmPassword}
      />
    </div>
  );
}

export default SignUpInfo;
