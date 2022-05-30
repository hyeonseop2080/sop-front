import { useState } from "react";
import axios from "axios";

function App() {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const onIdHandler = (event) => {
      setId(event.target.value);
  };
  const onPasswordHandler = (event) => {
      setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
      event.preventDefault();
      console.log(Id + " " + Password);
      axios.post('https://440b-219-255-158-172.jp.ngrok.io/members/login',
      {"loginId": Id,
        "loginPw": Password
      }).then(function(response){
        if(response.data === false){
            alert("ID 나 PW가 틀렸습니다.");
            setId("");
            setPassword("");
        }
        else{
            alert("정상적으로 로그인이 되었습니다.");
            setId("");
            setPassword("");
        }
      });
  };

  return (
      <div className="submit-box">
          <h2>Login</h2>
          <form id="login-form" onSubmit={onSubmitHandler}>
          <div className="user-box">
              <input type="text" required=""
              value={Id} onChange={onIdHandler}/>
              <label>ID</label>
          </div>
          <div className="user-box">
              <input type="password" required=""
              value={Password} onChange={onPasswordHandler}/>
              <label>Password</label>
          </div>
          <div>
              <input className="submit-btn" type="submit" value="submit"/>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
          </div>
          </form>
      </div>
  );
}

export default App;