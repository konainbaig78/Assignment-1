import React, { useState } from "react";
import "./Form.css"

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    dob: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const { fname, lname, dob, email, phone } = formData;

    if (!fname || !lname || !dob || !email || !phone) {
      alert("Please fill all fields");
    } else {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form"
        style={{
          border: "1px solid white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "#CCDDD3",
        }}
      >
        <h1>HTML Form</h1>

        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Mobile No.</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br />
        <br />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
