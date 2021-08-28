
import { useEffect, useState } from "react";
import axios from "axios";






function Signup(){

let [userList, setUserList] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const usernameChangeHandler = (e) => setUsername(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const mobileChangeHandler = (e) => setMobile(e.target.value);

  useEffect(() => {
    readAllUser();
  }, []);

  const readAllUser = async () => {
    // GET API
    let url = "http://localhost:4000/user-list";
    const response = await axios.get(url);
    // setUserList(response.data);
    setUserList(response.data.reverse());
  };

  const addNewUser = async () => {
    const newuser = {
      id: userList.length + 1,
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };

    const newUserList = [newuser, ...userList];
    setUserList(newUserList);

    // MAKE THE API CALL
    let url = "http://localhost:4000/user-create";
    // await axios.post(url, newuser);
    await axios.post(url, { ...newuser, id: null });

    // After Success
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div>
      <h1 className=" p-3 text-info bg-dark ">New User Signup </h1>

      {/** FORM COMPONENT */}
      <form className="m-2">
        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter username"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Passwword"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>

        <div>
          <input
            type="email"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>

        <div>
          <input
            type="mobile"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={mobileChangeHandler}
          />
        </div>

        <div class="btn btn-success">
          <input
            type="button"
            value="Register"
            onClick={addNewUser}
            className="btn btn-lg btn-secondary w-100"
          />
        </div>
      </form>

    <table>

        <th>Usename</th>
        <th>Usename</th>
        





      </table>
    </div>
  );
        }

        export default Signup;