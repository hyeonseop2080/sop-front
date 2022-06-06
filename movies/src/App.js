import { useState } from "react";
import axios from "axios";

function App() {
    let contents, len;
    let movie = [];
    var config = {
        headers: { 'Content-Type': 'application/json',
        'loginId': document.cookie.slice(3)}
    };
    axios.get('https://4bcf-219-255-158-172.jp.ngrok.io/main',
    config, {withCredentials: true}).then(response => {
    contents = response.data;
    len = response.data.length;
    }).then(response => {
        for(var i = 0; i < len; i++){
            if(contents[i].contentType === "movie"){
                movie.push(contents[i]);
            }
        }
        for(i = 0; i < 24; i++){
            document.getElementById(1+i).src = movie[i].imageLink;
        }
    });

    const onImgClick = (page) => {
        window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${page.title}`, '_blank', );
        console.log(page.id);
    };

    const onBtnClick = (page) => {
        if(window.confirm("좋아하는 작품에 추가하겠습니까?")){
            var result = `{\"contentId\": ${page.id}, \"memberId\": 5}`;
            var config = {
                headers: { 'Content-Type': 'application/json',
                'loginId': document.cookie.slice(3)}
            };
            axios.post('https://4bcf-219-255-158-172.jp.ngrok.io/likes/survey',
            result, config, {withCredentials: true}).then(function(response){
                if(response.data === true){
                    if(!alert("좋아하는 작품에 추가되었습니다.")){
                        document.location.href = "../../movies/build/index.html";
                    }
                }
            })
        }
    };

    return (
        <div class="all-recommend">
            <form id="contents-form">
                <img id ="1" onClick={() => onImgClick(movie[0])}/>
                <img id ="2" onClick={() => onImgClick(movie[1])}/>
                <img id ="3" onClick={() => onImgClick(movie[2])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[0])}>
                    <img src="images/like2.PNG" class="tooltip" />
                    <div class="tooltip"> Tips !
                        <span class="tooltiptext">좋아요 버튼을 누르면 당신의 취향을 다시 조사해서 추천해드립니다</span>
                    </div>
                </button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[1])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[2])}><img src="images/like2.PNG" /></button>
                <img id ="4" onClick={() => onImgClick(movie[3])}/>
                <img id ="5" onClick={() => onImgClick(movie[4])}/>
                <img id ="6" onClick={() => onImgClick(movie[5])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[3])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[4])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[5])}><img src="images/like2.PNG" /></button>
                <img id ="7" onClick={() => onImgClick(movie[6])}/>
                <img id ="8" onClick={() => onImgClick(movie[7])}/>
                <img id ="9" onClick={() => onImgClick(movie[8])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[6])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[7])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[8])}><img src="images/like2.PNG" /></button>
                <img id ="10" onClick={() => onImgClick(movie[9])}/>
                <img id ="11" onClick={() => onImgClick(movie[10])}/>
                <img id ="12" onClick={() => onImgClick(movie[11])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[9])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[10])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[11])}><img src="images/like2.PNG" /></button>
                <img id ="13" onClick={() => onImgClick(movie[12])}/>
                <img id ="14" onClick={() => onImgClick(movie[13])}/>
                <img id ="15" onClick={() => onImgClick(movie[14])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[12])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[13])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[14])}><img src="images/like2.PNG" /></button>
                <img id ="16" onClick={() => onImgClick(movie[15])}/>
                <img id ="17" onClick={() => onImgClick(movie[16])}/>
                <img id ="18" onClick={() => onImgClick(movie[17])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[15])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[16])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[17])}><img src="images/like2.PNG" /></button>
                <img id ="19" onClick={() => onImgClick(movie[18])}/>
                <img id ="20" onClick={() => onImgClick(movie[19])}/>
                <img id ="21" onClick={() => onImgClick(movie[20])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[18])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[19])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[20])}><img src="images/like2.PNG" /></button>
                <img id ="22" onClick={() => onImgClick(movie[21])}/>
                <img id ="23" onClick={() => onImgClick(movie[22])}/>
                <img id ="24" onClick={() => onImgClick(movie[23])}/>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[21])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[22])}><img src="images/like2.PNG" /></button>
                <button type="button" class="like_button2" onClick={() => onBtnClick(movie[23])}><img src="images/like2.PNG" /></button>
            </form>
        </div>
    );
}

export default App;
