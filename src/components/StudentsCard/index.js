import { Component } from "react";
import "./index.css";
class StudentsCard extends Component {
  render() {
    const { studentDetails } = this.props;
    const {
      name,
      age,
      email,
      phone,
      department,
      course,
      year,
      gpa,
      profilePic,
    } = studentDetails;
    return (
      <li className="student-profile-card">
        <div className="studentProfile-container">
          <div className="profile-image-and-name-container">
            <img
              className="profile-image"
              src={profilePic}
              alt="student profile"
            />
            <h1 className="student-name">{name}</h1>
          </div>
          <p>Age:{age}</p>
          <div className="student-contact-info-container">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </div>
          <div>
            <p>Department: {department}</p>
            <p>Course: {course}</p>
          </div>
          <p>Year: {year}</p>
          <p>Current GPA: {gpa}</p>
        </div>
      </li>
    );
  }
}

export default StudentsCard;
