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
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 6,
    name: "Diya Patel",
    age: 20,
    email: "diya.patel@example.com",
    phone: "+91-9823456789",
    department: "Civil",
    course: "B.Tech",
    year: "2nd Year",
    gpa: 9.1,
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/41.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/women/39.jpg"
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
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 16,
    name: "Neha Malhotra",
    age: 24,
    email: "neha.malhotra@example.com",
    phone: "+91-9721234567",
    department: "Data Science",
    course: "M.Tech",
    year: "1st Year",
    gpa: 9.5,
    profilePic: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    id: 17,
    name: "Harsh Raj",
    age: 18,
    email: "harsh.raj@example.com",
    phone: "+91-9711234567",
    department: "IT",
    course: "Diploma",
    year: "1st Year",
    gpa: 8.0,
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 18,
    name: "Tanya Kapoor",
    age: 20,
    email: "tanya.kapoor@example.com",
    phone: "+91-9701234567",
    department: "AI & ML",
    course: "M.Tech",
    year: "2nd Year",
    gpa: 9.3,
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 19,
    name: "Sahil Rana",
    age: 22,
    email: "sahil.rana@example.com",
    phone: "+91-9691234567",
    department: "Computer Science",
    course: "MCA",
    year: "2nd Year",
    gpa: 8.6,
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 20,
    name: "Riya Sen",
    age: 21,
    email: "riya.sen@example.com",
    phone: "+91-9681234567",
    department: "Data Science",
    course: "B.Sc",
    year: "3rd Year",
    gpa: 9.0,
    profilePic: "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    id: 21,
    name: "Abhishek Tyagi",
    age: 19,
    email: "abhishek.tyagi@example.com",
    phone: "+91-9671234567",
    department: "Mechanical",
    course: "Diploma",
    year: "2nd Year",
    gpa: 8.4,
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 22,
    name: "Shruti Nair",
    age: 23,
    email: "shruti.nair@example.com",
    phone: "+91-9661234567",
    department: "Civil",
    course: "M.Tech",
    year: "2nd Year",
    gpa: 8.9,
    profilePic: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 23,
    name: "Jay Sharma",
    age: 20,
    email: "jay.sharma@example.com",
    phone: "+91-9651234567",
    department: "IT",
    course: "BCA",
    year: "2nd Year",
    gpa: 8.3,
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    id: 24,
    name: "Kavya Deshmukh",
    age: 20,
    email: "kavya.deshmukh@example.com",
    phone: "+91-9641234567",
    department: "AI & ML",
    course: "B.Sc",
    year: "2nd Year",
    gpa: 9.1,
    profilePic: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    id: 25,
    name: "Yash Khanna",
    age: 22,
    email: "yash.khanna@example.com",
    phone: "+91-9631234567",
    department: "Computer Science",
    course: "M.Tech",
    year: "2nd Year",
    gpa: 8.7,
    profilePic: "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    id: 26,
    name: "Simran Kaur",
    age: 21,
    email: "simran.kaur@example.com",
    phone: "+91-9621234567",
    department: "IT",
    course: "MCA",
    year: "1st Year",
    gpa: 9.2,
    profilePic: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    id: 27,
    name: "Aditya Narayan",
    age: 18,
    email: "aditya.narayan@example.com",
    phone: "+91-9611234567",
    department: "Civil",
    course: "Diploma",
    year: "1st Year",
    gpa: 7.8,
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 28,
    name: "Bhavna Mishra",
    age: 22,
    email: "bhavna.mishra@example.com",
    phone: "+91-9601234567",
    department: "Electronics",
    course: "M.Sc",
    year: "2nd Year",
    gpa: 8.5,
    profilePic: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 29,
    name: "Kunal Thakur",
    age: 21,
    email: "kunal.thakur@example.com",
    phone: "+91-9591234567",
    department: "Data Science",
    course: "M.Sc",
    year: "1st Year",
    gpa: 9.0,
    profilePic: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 30,
    name: "Tanvi Bansal",
    age: 19,
    email: "tanvi.bansal@example.com",
    phone: "+91-9581234567",
    department: "IT",
    course: "B.Sc",
    year: "1st Year",
    gpa: 8.6,
    profilePic: "https://randomuser.me/api/portraits/women/50.jpg"
  }
];


class StudentsInformationPage extends Component {
  state = { searchName: "" };

  onChangeSearch = (event) => {
    this.setState({ searchName: event.target.value });
  };

  filterStudent = () => {
    const { searchName } = this.state;
    const filterStudent = studentsDetails.filter((eachStudent) =>
      eachStudent.name.toLowerCase().includes(searchName.toLowerCase())
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
