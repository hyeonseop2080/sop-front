import { useState } from "react";
import axios from "axios";

function App() {
  const [img, setImg] = useState([false, false, false, false, false, false, false, false, false, false, false, false,
                                  false, false, false, false, false, false, false, false, false, false, false, false]);
  const onImgClick = (event) => {
      let newImg = [...img];
      newImg[event.target.id - 1] = !img[event.target.id - 1];
      console.log(`${event.target.id}이 눌렸습니다.`);
      setImg(newImg);
  };
  const onBtnClick = (event) => {
      event.preventDefault();
      var result = "[";
      console.log(result);
      for(var i = 0; i < 24; i++){
        if(img[i] === true){
           result = result + `{\"contentId\": ${i + 1}, \"memberId\": 5}, `
           console.log(result);
        }
      }
      result = result.slice(0, -2);
      result = result + "]";
      console.log(result);
      var config = {
        headers: { 'Content-Type': 'application/json' },
      };
      axios.post('https://440b-219-255-158-172.jp.ngrok.io/likes/survey/first', 
      result, config).then(function(response){
        if(response.data === true){
          alert("선호도 조사가 정상적으로 처리되었습니다.");
        }
      })
  };
  return (
    <div className="recommend">
        <form id="contents-form">
            <img src="images/1.png" id ="1" onClick={onImgClick} style = {{opacity: img[0] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="2" onClick={onImgClick} style = {{opacity: img[1] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="3" onClick={onImgClick} style = {{opacity: img[2] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="4" onClick={onImgClick} style = {{opacity: img[3] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="5" onClick={onImgClick} style = {{opacity: img[4] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="6" onClick={onImgClick} style = {{opacity: img[5] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="7" onClick={onImgClick} style = {{opacity: img[6] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="8" onClick={onImgClick} style = {{opacity: img[7] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="9" onClick={onImgClick} style = {{opacity: img[8] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="10" onClick={onImgClick} style = {{opacity: img[9] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="11" onClick={onImgClick} style = {{opacity: img[10] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="12" onClick={onImgClick} style = {{opacity: img[11] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="13" onClick={onImgClick} style = {{opacity: img[12] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="14" onClick={onImgClick} style = {{opacity: img[13] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="15" onClick={onImgClick} style = {{opacity: img[14] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="16" onClick={onImgClick} style = {{opacity: img[15] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="17" onClick={onImgClick} style = {{opacity: img[16] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="18" onClick={onImgClick} style = {{opacity: img[17] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="19" onClick={onImgClick} style = {{opacity: img[18] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="20" onClick={onImgClick} style = {{opacity: img[19] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="21" onClick={onImgClick} style = {{opacity: img[20] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="22" onClick={onImgClick} style = {{opacity: img[21] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="23" onClick={onImgClick} style = {{opacity: img[22] ? 0.2 : 1.0}} />
            <img src="images/1.png" id ="24" onClick={onImgClick} style = {{opacity: img[23] ? 0.2 : 1.0}} />
            <button className="submit_btn" onClick={onBtnClick}>submit</button>
        </form>
    </div>
  );
}

export default App;
