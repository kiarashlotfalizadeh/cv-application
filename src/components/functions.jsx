import { Input } from "./input";

function createEducationInputList(returnArray) {
  returnArray.push(
    <Input
      label="School Name"
      type="text"
      name="schoolname"
      key={crypto.randomUUID()}
    />
  );
  returnArray.push(
    <Input
      label="Title of Study"
      type="text"
      name="studytitle"
      key={crypto.randomUUID()}
    />
  );
  returnArray.push(
    <Input
      label="Date of Completion"
      type="date"
      name="studydate"
      key={crypto.randomUUID()}
    />
  );

  return returnArray;
}

function educationChange() {
  let educationContainer = document.querySelector(".education-container");
  let educationInputsArray = educationContainer.querySelectorAll("input");
  let returnArray = [];
  let arrayIndex = 0;

  for (let i = 0; i < educationInputsArray.length; i += 3) {
    returnArray[arrayIndex] = {};
    returnArray[arrayIndex].schoolname = educationInputsArray[i].value;
    returnArray[arrayIndex].studytitle = educationInputsArray[i + 1].value;
    returnArray[arrayIndex].studydate = educationInputsArray[i + 2].value;
    arrayIndex++;
  }

  return returnArray;
}

function jobChange() {
  let jobContainer = document.querySelector(".job-container");
  let jobInputsArray = jobContainer.querySelectorAll("input");
  let returnArray = [];
  let arrayIndex = 0;

  for (let i = 0; i < jobInputsArray.length; i += 5) {
    returnArray[arrayIndex] = {};
    returnArray[arrayIndex].companyname = jobInputsArray[i].value;
    returnArray[arrayIndex].positiontitle = jobInputsArray[i + 1].value;
    returnArray[arrayIndex].mainresponsibilities = jobInputsArray[i + 2].value;
    returnArray[arrayIndex].startingdate = jobInputsArray[i + 3].value;
    returnArray[arrayIndex].endingdate = jobInputsArray[i + 4].value;
    arrayIndex++;
  }

  return returnArray;
}

function createJobInputList(returnArray) {
  returnArray.push(
    <Input
      label="Company Name"
      type="text"
      name="companyname"
      key={crypto.randomUUID()}
    />
  );
  returnArray.push(
    <Input
      label="Position Title"
      type="text"
      name="positiontitle"
      key={crypto.randomUUID()}
    />
  );
  returnArray.push(
    <Input
      label="Main Responsibilities"
      type="text"
      name="mainresponsibilities"
      key={crypto.randomUUID()}
    />
  );
  returnArray.push(
    <Input
      label="Starting Date"
      type="date"
      name="startingdate"
      key={crypto.randomUUID()}
    />
  );
  returnArray.push(
    <Input
      label="Ending Date"
      type="date"
      name="endingdate"
      key={crypto.randomUUID()}
    />
  );

  return returnArray;
}

function resetForm() {
  document.querySelector("form").reset();
}

export {
  createEducationInputList,
  createJobInputList,
  resetForm,
  educationChange,
  jobChange,
};
