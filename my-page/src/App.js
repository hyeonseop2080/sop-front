import { useState } from "react";
import axios from "axios";

function App() {
    let contents, len;
    var config = {
      headers: { 'Content-Type': 'application/json',
      'loginId': document.cookie.slice(3)}
    };
    axios.get('https://4bcf-219-255-158-172.jp.ngrok.io/main/liked',
    config, {withCredentials: true}).then(response => {
        contents = response.data;
        len = response.data.length;
    }).then(response => {
        for(var i = 0; i < len; i++){
          document.getElementById(1+i).src = contents[i].imageLink;
        }
    });

    const onImgClick = (content) => {
      if(window.confirm("좋아하는 작품에서 삭제하겠습니까?")){
        var result = `{\"contentId\": ${content.id}, \"memberId\": 5}`;
        var config = {
            headers: { 'Content-Type': 'application/json',
            'loginId': document.cookie.slice(3)}
        };
        axios.post('https://4bcf-219-255-158-172.jp.ngrok.io/likes/survey/delete',
        result, config).then(function(response){
            if(response.data === true){
                if(!alert("좋아하는 작품에서 삭제되었습니다.")){
                    document.location.href = "../../my-page/build/index.html";
                }
            }
        })
      }
    };

    return (
      <div class="liked">
            <form id="contents-form">
                <img id ="1" onClick={() => onImgClick(contents[0])}/>
                <img id ="2" onClick={() => onImgClick(contents[1])}/>
                <img id ="3" onClick={() => onImgClick(contents[2])}/>
                <img id ="4" onClick={() => onImgClick(contents[3])}/>
                <img id ="5" onClick={() => onImgClick(contents[4])}/>
                <img id ="6" onClick={() => onImgClick(contents[5])}/>
                <img id ="7" onClick={() => onImgClick(contents[6])}/>
                <img id ="8" onClick={() => onImgClick(contents[7])}/>
                <img id ="9" onClick={() => onImgClick(contents[8])}/>
                <img id ="10" onClick={() => onImgClick(contents[9])}/>
                <img id ="11" onClick={() => onImgClick(contents[10])}/>
                <img id ="12" onClick={() => onImgClick(contents[11])}/>
                <img id ="13" onClick={() => onImgClick(contents[12])}/>
                <img id ="14" onClick={() => onImgClick(contents[13])}/>
                <img id ="15" onClick={() => onImgClick(contents[14])}/>
                <img id ="16" onClick={() => onImgClick(contents[15])}/>
                <img id ="17" onClick={() => onImgClick(contents[16])}/>
                <img id ="18" onClick={() => onImgClick(contents[17])}/>
                <img id ="19" onClick={() => onImgClick(contents[18])}/>
                <img id ="20" onClick={() => onImgClick(contents[19])}/>
                <img id ="21" onClick={() => onImgClick(contents[20])}/>
                <img id ="22" onClick={() => onImgClick(contents[21])}/>
                <img id ="23" onClick={() => onImgClick(contents[22])}/>
                <img id ="24" onClick={() => onImgClick(contents[23])}/>
            </form>
        </div>
    )
}

export default App;
