import { useState } from "react";
import axios from "axios";

function App() {
    let contents, len;
    let drama = [];
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
            if(contents[i].contentType === "drama"){
                drama.push(contents[i]);
            }
        }
        for(i = 0; i < 15; i++){
            document.getElementById(1+i).src = drama[i].imageLink;
        }
    });

    const onImgClick = (page) => {
        window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${page.title} 드라마`, '_blank', );
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
                        document.location.href = "../../dramas/build/index.html";
                    }
                }
            })
        }
    };

    return (
        <div class="all-recommend">
            <div class="contents">
                <img id ="1" onClick={() => onImgClick(drama[0])}/>
                <img id ="2" onClick={() => onImgClick(drama[1])}/>
                <img id ="3" onClick={() => onImgClick(drama[2])}/>
                <img id ="4" onClick={() => onImgClick(drama[3])}/>
                <img id ="5" onClick={() => onImgClick(drama[4])}/>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[0])}>
                    <img src="images/like.PNG" class="tooltip" />
                    <div class="tooltip"> Tips !
                        <span class="tooltiptext">좋아요 버튼을 누르면 당신의 취향을 다시 조사해서 추천해드립니다</span>
                    </div>
                </button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[1])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[2])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[3])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[4])}><img src="images/like.PNG" /></button>
                <img id ="6" onClick={() => onImgClick(drama[5])}/>
                <img id ="7" onClick={() => onImgClick(drama[6])}/>
                <img id ="8" onClick={() => onImgClick(drama[7])}/>
                <img id ="9" onClick={() => onImgClick(drama[8])}/>
                <img id ="10" onClick={() => onImgClick(drama[9])}/>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[5])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[6])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[7])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[8])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[9])}><img src="images/like.PNG" /></button>
                <img id ="11" onClick={() => onImgClick(drama[10])}/>
                <img id ="12" onClick={() => onImgClick(drama[11])}/>
                <img id ="13" onClick={() => onImgClick(drama[12])}/>
                <img id ="14" onClick={() => onImgClick(drama[13])}/>
                <img id ="15" onClick={() => onImgClick(drama[14])}/>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[10])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[11])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[12])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[13])}><img src="images/like.PNG" /></button>
                <button type="button" class="like_button" onClick={() => onBtnClick(drama[14])}><img src="images/like.PNG" /></button>
            </div>
        </div>
    );
}

export default App;
