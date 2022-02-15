import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import MyPosts from "../../components/myPosts/MyPosts";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [isDonor, setIsDonor] = useState("");
  const [isEntrepreneur, setIsEntrepreneur] = useState("");
  const [ isReporter, setIsReporter] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const userId = user._id 

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      contact,
      password, bloodGroup, isDonor, isEntrepreneur, isReporter
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings container">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <label>Contact</label>
          <input
            type="text"
            placeholder={user.contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <label>BloodGroup</label>
          <input
            type="text"
            placeholder={user.bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />

          <label>Donor</label>
          <input
            type="text"
            placeholder={user.isDonor}
            onChange={(e) => setIsDonor(e.target.value)}
          />

          <label>Entrepreneur</label>
          <input
            type="text"
            placeholder={user.isEntrepreneur}
            onChange={(e) => setIsEntrepreneur(e.target.value)}
          />

          <label>Reporter</label>
          <input
            type="text"
            placeholder={user.isReporter}
            onChange={(e) => setIsReporter(e.target.value)}
          />



          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
      <MyPosts></MyPosts>
    </div>
  );
}
