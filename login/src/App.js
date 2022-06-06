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
      var config = {
        headers: { 'Content-Type': 'application/json',
                'loginId': document.cookie.slice(3)}
      };
      axios.post('https://4bcf-219-255-158-172.jp.ngrok.io/members/login',
      {"loginId": Id,
        "loginPw": Password
      }, config, {withCredentials: true}).then(function(response){
        if(response.data === false){
            alert("ID 나 PW가 틀렸습니다.");
            setId("");
            setPassword("");
        }
        else{
            if(!alert("정상적으로 로그인이 되었습니다.")){
                document.cookie = `ID=${response.data}; Path=/;`;
                console.log(response);
                document.location.href = "../../main/build/index.html";
            }
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
