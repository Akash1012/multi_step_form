import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up", "Personal Info", "Other"];
  const [btnCheck, setBtnCheck] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  //   console.log(formData);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          formData={formData}
          setFormData={setFormData}
          setBtnCheck={setBtnCheck}
          btnCheck={btnCheck}
        />
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          setBtnCheck={setBtnCheck}
          btnCheck={btnCheck}
        />
      );
    } else if (page === 2) {
      return (
        <OtherInfo
          formData={formData}
          setFormData={setFormData}
          setBtnCheck={setBtnCheck}
          btnCheck={btnCheck}
        />
      );
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.33%" : page === 1 ? "66.66%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((prevPage) => prevPage - 1);
            }}
          >
            Prev
          </button>
          <button
            // disabled={page === FormTitles.length - 1}
            disabled={btnCheck}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Done ... !");
                setPage(0);
                setFormData({});
                console.log("Form Submitted", formData);
              } else {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "SUBMIT" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
