import { useState } from "react";
import axios from "axios";

function App() {
  const [img, setImg] = useState([false, false, false, false, false, false, false, false, false, false,
                                  false, false, false, false, false, false, false, false, false, false,
                                  false, false, false, false, false, false, false, false, false, false, false]);
  const onImgClick = (event) => {
      let newImg = [...img];
      newImg[event.target.id] = !img[event.target.id];
      console.log(`${event.target.id}이 눌렸습니다.`);
      setImg(newImg);
  };
  const onBtnClick = (event) => {
      event.preventDefault();
      var result = "[";
      for(var i = 2; i < 31; i++){
        if(img[i] === true){
           result = result + `{\"contentId\": ${i}, \"memberId\": 5}, `
        }
      }
      result = result.slice(0, -2);
      result = result + "]";
      console.log(result);
      var config = {
        headers: { 'Content-Type': 'application/json' },
      };
      axios.post('https://35cf-219-255-158-172.jp.ngrok.io/likes/survey/first', 
      result, config, {withCredentials: true}).then(function(response){
        if(response.data === true){
          if(!alert("선호도 조사가 정상적으로 처리되었습니다.")){
              document.location.href = "../../login/build/index.html";
          }
        }
      })
  };
  return (
    <div className="recommend">
        <form id="contents-form">
            <img src="images/2.png" id ="2" onClick={onImgClick} style = {{opacity: img[2] ? 0.2 : 1.0}} />
            <img src="images/3.png" id ="3" onClick={onImgClick} style = {{opacity: img[3] ? 0.2 : 1.0}} />
            <img src="images/4.png" id ="4" onClick={onImgClick} style = {{opacity: img[4] ? 0.2 : 1.0}} />
            <img src="images/6.png" id ="6" onClick={onImgClick} style = {{opacity: img[6] ? 0.2 : 1.0}} />
            <img src="images/7.png" id ="7" onClick={onImgClick} style = {{opacity: img[7] ? 0.2 : 1.0}} />
            <img src="images/10.png" id ="10" onClick={onImgClick} style = {{opacity: img[10] ? 0.2 : 1.0}} />
            <img src="images/11.png" id ="11" onClick={onImgClick} style = {{opacity: img[11] ? 0.2 : 1.0}} />
            <img src="images/12.png" id ="12" onClick={onImgClick} style = {{opacity: img[12] ? 0.2 : 1.0}} />
            <img src="images/13.png" id ="13" onClick={onImgClick} style = {{opacity: img[13] ? 0.2 : 1.0}} />
            <img src="images/14.png" id ="14" onClick={onImgClick} style = {{opacity: img[14] ? 0.2 : 1.0}} />
            <img src="images/15.png" id ="15" onClick={onImgClick} style = {{opacity: img[15] ? 0.2 : 1.0}} />
            <img src="images/16.png" id ="16" onClick={onImgClick} style = {{opacity: img[16] ? 0.2 : 1.0}} />
            <img src="images/17.png" id ="17" onClick={onImgClick} style = {{opacity: img[17] ? 0.2 : 1.0}} />
            <img src="images/18.png" id ="18" onClick={onImgClick} style = {{opacity: img[18] ? 0.2 : 1.0}} />
            <img src="images/19.png" id ="19" onClick={onImgClick} style = {{opacity: img[19] ? 0.2 : 1.0}} />
            <img src="images/20.png" id ="20" onClick={onImgClick} style = {{opacity: img[20] ? 0.2 : 1.0}} />
            <img src="images/21.png" id ="21" onClick={onImgClick} style = {{opacity: img[21] ? 0.2 : 1.0}} />
            <img src="images/22.png" id ="22" onClick={onImgClick} style = {{opacity: img[22] ? 0.2 : 1.0}} />
            <img src="images/23.png" id ="23" onClick={onImgClick} style = {{opacity: img[23] ? 0.2 : 1.0}} />
            <img src="images/24.png" id ="24" onClick={onImgClick} style = {{opacity: img[24] ? 0.2 : 1.0}} />
            <img src="images/25.png" id ="25" onClick={onImgClick} style = {{opacity: img[25] ? 0.2 : 1.0}} />
            <img src="images/28.png" id ="28" onClick={onImgClick} style = {{opacity: img[28] ? 0.2 : 1.0}} />
            <img src="images/29.png" id ="29" onClick={onImgClick} style = {{opacity: img[29] ? 0.2 : 1.0}} />
            <img src="images/30.png" id ="30" onClick={onImgClick} style = {{opacity: img[30] ? 0.2 : 1.0}} />
            <button className="submit_btn" onClick={onBtnClick}>submit</button>
        </form>
    </div>
  );
}

export default App;
