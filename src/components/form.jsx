import { useState } from "react";
import {
  createEducationInputList,
  createJobInputList,
  resetForm,
  educationChange,
  jobChange,
} from "./functions";
import { Resume } from "./resume";

function Form() {
  const [educationFields, setEducationFields] = useState(
    createEducationInputList([])
  );
  const [jobFields, setJobFields] = useState(createJobInputList([]));
  const [generalInputs, setGeneralInputs] = useState({});
  const [educationInputs, setEducationInputs] = useState([]);
  const [jobInputs, setJobInputs] = useState([]);

  function generalChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setGeneralInputs((prevGeneralInputs) => ({
      ...prevGeneralInputs,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEducationInputs(educationChange());
    setJobInputs(jobChange());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" name="fullname" onChange={generalChange} />
        </label>
        <label>
          Email
          <input type="email" name="email" onChange={generalChange} />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phonenumber" onChange={generalChange} />
        </label>
        <div className="education-container">
          <div className="title-container">
            <div className="title">Educational Experience</div>
            <button
              className="operator"
              onClick={(event) => {
                event.preventDefault();
                setEducationFields((prevFields) => [
                  ...prevFields,
                  ...createEducationInputList([]),
                ]);
              }}
            >
              +
            </button>
            <button
              className="operator"
              onClick={(event) => {
                event.preventDefault();
                setEducationFields((prevFields) =>
                  prevFields.length > 3 ? prevFields.slice(0, -3) : prevFields
                );
              }}
            >
              -
            </button>
          </div>
          {educationFields}
        </div>
        <div className="job-container">
          <div className="title-container">
            <div className="title">Practical Experience</div>
            <button
              className="operator"
              onClick={(event) => {
                event.preventDefault();
                setJobFields((prevFields) => [
                  ...prevFields,
                  ...createJobInputList([]),
                ]);
              }}
            >
              +
            </button>
            <button
              className="operator"
              onClick={(event) => {
                event.preventDefault();
                setJobFields((prevFields) =>
                  prevFields.length > 5 ? prevFields.slice(0, -5) : prevFields
                );
              }}
            >
              -
            </button>
          </div>
          {jobFields}
        </div>
        <button className="reset-button" onClick={resetForm}>
          Reset
        </button>
        <input type="submit" value="Generate" id="submit-button" />
      </form>
      <Resume
        generalObject={generalInputs}
        educationArray={educationInputs}
        jobArray={jobInputs}
      />
    </>
  );
}

export { Form };
