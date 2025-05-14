import { Component } from "react";
import StudentsCard from "../StudentsCard";
import "./index.css";

const studentsDetails = [
  {
    id: 1,
    name: "Aarav Kumar",
    age: 20,
    email: "aarav.kumar@example.com",
    phone: "+91-9876543210",
    department: "Computer Science",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 8.7,
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Sneha Reddy",
    age: 21,
    email: "sneha.reddy@example.com",
    phone: "+91-9865432109",
    department: "Information Technology",
    course: "B.Tech",
    year: "4th Year",
    gpa: 9.2,
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    age: 22,
    email: "rahul.mehta@example.com",
    phone: "+91-9854321098",
    department: "Electronics",
    course: "B.Tech",
    year: "4th Year",
    gpa: 8.5,
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    name: "Pooja Sharma",
    age: 19,
    email: "pooja.sharma@example.com",
    phone: "+91-9843210987",
    department: "Mechanical",
    course: "B.Tech",
    year: "2nd Year",
    gpa: 9.0,
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    name: "Manikanta Gugulothu",
    age: 21,
    email: "manikanta.g@example.com",
    phone: "+91-9832109876",
    department: "Information Technology",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 8.8,
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 6,
    name: "Lakshmi Gugulothu",
    age: 20,
    email: "lakshmi.gugulothu@example.com",
    phone: "+91-9823456789",
    department: "Civil",
    course: "B.Tech",
    year: "2nd Year",
    gpa: 9.1,
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 7,
    name: "Rohit Verma",
    age: 23,
    email: "rohit.verma@example.com",
    phone: "+91-9812345678",
    department: "Computer Science",
    course: "B.Tech",
    year: "4th Year",
    gpa: 8.4,
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 8,
    name: "Ananya Singh",
    age: 20,
    email: "ananya.singh@example.com",
    phone: "+91-9801234567",
    department: "AI & ML",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 9.5,
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 9,
    name: "Karthik Nair",
    age: 22,
    email: "karthik.nair@example.com",
    phone: "+91-9791234567",
    department: "Electronics",
    course: "B.Tech",
    year: "4th Year",
    gpa: 8.6,
    profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 10,
    name: "Ishita Joshi",
    age: 19,
    email: "ishita.joshi@example.com",
    phone: "+91-9781234567",
    department: "Computer Science",
    course: "B.Tech",
    year: "2nd Year",
    gpa: 9.3,
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 11,
    name: "Vikram Das",
    age: 21,
    email: "vikram.das@example.com",
    phone: "+91-9771234567",
    department: "IT",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 8.9,
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 12,
    name: "Meera Iyer",
    age: 20,
    email: "meera.iyer@example.com",
    phone: "+91-9761234567",
    department: "Electronics",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 8.2,
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 13,
    name: "Akhil Yadav",
    age: 22,
    email: "akhil.yadav@example.com",
    phone: "+91-9751234567",
    department: "Civil",
    course: "B.Tech",
    year: "4th Year",
    gpa: 7.9,
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 14,
    name: "Lavanya Rao",
    age: 19,
    email: "lavanya.rao@example.com",
    phone: "+91-9741234567",
    department: "AI & ML",
    course: "B.Tech",
    year: "2nd Year",
    gpa: 9.4,
    profilePic: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    id: 15,
    name: "Siddharth Jain",
    age: 21,
    email: "siddharth.jain@example.com",
    phone: "+91-9731234567",
    department: "Mechanical",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 8.3,
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 16,
    name: "Lakshmi Gugulothu",
    age: 21,
    email: "lakshmi.gugulothu@google.com",
    phone: "+91-9912021163",
    department: "Mechanical",
    course: "B.Tech",
    year: "3rd Year",
    gpa: 8.3,
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

class StudentsInformationPage extends Component {
  state = { searchName: "" };

  onChangeSearch = (event) => {
    this.setState({ searchName: event.target.value });
  };

  filterStudent = () => {
    const { searchName } = this.state;
    const filterStudent = studentsDetails.filter((eachStudent) =>
      eachStudent.name.toLowerCase().includes(searchName)
    );
    return filterStudent;
  };

  render() {
    const getFilteredStudent = this.filterStudent();
    return (
      <>
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name..."
            onChange={this.onChangeSearch}
          />
          <img
            src="https://img.icons8.com/?size=100&id=KPmthqkeTgDN&format=png&color=000000"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="list-of-students-container">
          {getFilteredStudent.map((eachStudentDetails) => (
            <StudentsCard
              key={eachStudentDetails.id}
              studentDetails={eachStudentDetails}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default StudentsInformationPage;
