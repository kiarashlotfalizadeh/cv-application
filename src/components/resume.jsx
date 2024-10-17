/* eslint-disable react/prop-types */

function Resume({ generalObject, educationArray, jobArray }) {
  return (
    <div className="resume-container">
      <div className="headline">General</div>
      <div className="info-container">
        <div className="detail-title">Full Name</div>
        <div className="details">{generalObject.fullname}</div>
        <div className="detail-title">Email</div>
        <div className="details">{generalObject.email}</div>
        <div className="detail-title">Phone Number</div>
        <div className="details">{generalObject.phonenumber}</div>
      </div>
      <div className="headline">Education</div>
      {educationArray.map((field) => (
        <div className="info-container" key={crypto.randomUUID()}>
          <div className="detail-title">School Name</div>
          <div className="details">{field.schoolname}</div>
          <div className="detail-title">Title of Study</div>
          <div className="details">{field.studytitle}</div>
          <div className="detail-title">Date of Completion</div>
          <div className="details">{field.studydate}</div>
        </div>
      ))}
      <div className="headline">Practical</div>
      {jobArray.map((field) => (
        <div className="info-container" key={crypto.randomUUID()}>
          <div className="detail-title">Company Name</div>
          <div className="details">{field.companyname}</div>
          <div className="detail-title">Position Title</div>
          <div className="details">{field.positiontitle}</div>
          <div className="detail-title">Main Responsibilities</div>
          <div className="details">{field.mainresponsibilities}</div>
          <div className="detail-title">Starting Date</div>
          <div className="details">{field.startingdate}</div>
          <div className="detail-title">Ending Date</div>
          <div className="details">{field.endingdate}</div>
        </div>
      ))}
    </div>
  );
}

export { Resume };
