import { useState } from "react";
import axios from "axios";

function App() {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Nickname, setNickname] = useState('');
  const onIdHandler = (event) => {
      setId(event.target.value);
  };
  const onPasswordHandler = (event) => {
      setPassword(event.target.value);
  };
  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.target.value);
  };
  const onNicknameHandler = (event) => {
      setNickname(event.target.value);
  };
  const onSubmitHandler = (event) => {
      event.preventDefault();
      if(Password !== ConfirmPassword){
          return alert('PW 와 PW 재확인이 일치하지 않습니다.');
      }
      console.log(Id + " " + Password + " " + ConfirmPassword + " " + Nickname);
      axios.post('https://440b-219-255-158-172.jp.ngrok.io/members/sign-up',
      {"loginId": Id,
      "loginPw": Password,
      "nickname": Nickname}). then(function(response){
          if(response.data === false){
              alert("이미 존재하는 ID입니다.");
              setId("");
              setPassword("");
              setConfirmPassword("");
              setNickname("");
          }
          else{
            alert("가입해주셔서 감사합니다!");
            setId("");
            setPassword("");
            setConfirmPassword("");
            setNickname("");
          }
      });

  };

  return (
      <div className="submit-box">
          <h2>Sign Up</h2>
          <form id="sign-up-form" onSubmit={onSubmitHandler}>
              <div className="user-box">
                  <input type="text" required maxLength="15" minLength="6"
                  value={Id} onChange={onIdHandler}/>
                  <label>ID</label>
              </div>
              <div className="user-box">
                  <input type="password" required maxLength="15" minLength="6"
                  value={Password} onChange={onPasswordHandler}/>
                  <label>Password</label>
              </div>
              <div className="user-box">
                  <input type="password" required maxLength="15" minLength="6"
                  value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                  <label>Password Check</label>
              </div>
              <div className="user-box">
                  <input type="text"  required maxLength="10" minLength="2"
                  value={Nickname} onChange={onNicknameHandler}/>
                  <label>Username</label>
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
