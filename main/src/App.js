import { useState } from "react";
import axios from "axios";

function App() {
    let contents, len;
    let book = [], drama = [], movie = [];
    var config = {
        headers: { 'Content-Type': 'application/json',
        'loginId': document.cookie.slice(3)}
    };
    axios.get('https://4bcf-219-255-158-172.jp.ngrok.io/main', config, {withCredentials: true}).then(response => {
        contents = response.data;
        len = response.data.length;
    }).then(response => {
        for(var i = 0; i < len; i++){
            if(contents[i].contentType === "drama"){
                drama.push(contents[i]);
            }
            else if(contents[i].contentType === "movie"){
                movie.push(contents[i]);
            }
            else if(contents[i].contentType === "book"){
                book.push(contents[i]);
            }
        }
        for(i = 0; i < 5; i++){
            document.getElementById(1+i).src = movie[i].imageLink;
            document.getElementById(21+i).src = drama[i].imageLink;
            if(book.length > i){
                document.getElementById(11+i).src = book[i].imageLink;
            }
        }
    });

    const onImgClick = (page) => {
        if(page.contentType === "book"){
            window.open(`https://book.naver.com/search/search.nhn?query=${page.title}`, '_blank', );
        }
        else if(page.contentType === "drama"){
            window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${page.title} 드라마`, '_blank', );
        }
        else if(page.contentType === "movie"){
            window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${page.title}`, '_blank', );
        }
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
                        document.location.href = "../../main/build/index.html";
                    }
                }
            })
        }
    };

    const onAClick = (location) => {
        let wo = window.open(location, '팝업창','width=1000,height=800, top=100, left=500');
        wo.addEventListener('beforeunload', () => {
            location.reload();
        });
    }


    return (
        <div>
            <div className="media">영화 (Top5)</div>
            <div className="mrecommend">
                <div className="contents">
                    <img id ="1" onClick={() => onImgClick(movie[0])}/>
                    <img id ="2" onClick={() => onImgClick(movie[1])}/>
                    <img id ="3" onClick={() => onImgClick(movie[2])}/>
                    <img id ="4" onClick={() => onImgClick(movie[3])}/>
                    <img id ="5" onClick={() => onImgClick(movie[4])}/>
                    <button type="button" className="like_button" onClick={() => onBtnClick(movie[0])}>
                        <img src="images/like.PNG" className="tooltip" />
                        <div className="tooltip"> Tips !
                            <span className="tooltiptext">좋아요 버튼을 누르면 당신의 취향을 다시 조사해서 추천해드립니다</span>
                        </div>
                    </button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(movie[1])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(movie[2])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(movie[3])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(movie[4])}><img src="images/like.PNG" /></button>
                </div>
            </div>
            <a href="#/" onClick={() => onAClick("../../movies/build/index.html")}>더 보기</a>
            <div className="media">책 (Top5)</div>
            <div className="mrecommend">
                <div className="contents">
                    <img id ="11" onClick={() => onImgClick(book[0])}/>
                    <img id ="12" onClick={() => onImgClick(book[1])}/>
                    <img id ="13" onClick={() => onImgClick(book[2])}/>
                    <img id ="14" onClick={() => onImgClick(book[3])}/>
                    <img id ="15" onClick={() => onImgClick(book[4])}/>
                    <button type="button" className="like_button" onClick={() => onBtnClick(book[0])}>
                        <img src="images/like.PNG" className="tooltip" />
                        <div className="tooltip"> Tips !
                            <span className="tooltiptext">좋아요 버튼을 누르면 당신의 취향을 다시 조사해서 추천해드립니다</span>
                        </div>
                    </button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(book[1])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(book[2])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(book[3])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(book[4])}><img src="images/like.PNG" /></button>
                </div>
            </div>
            <a href="#/" onClick={() => onAClick("../../books/build/index.html")}>더 보기</a>
            <div className="media">드라마 (Top5)</div>
            <div className="mrecommend">
                <div className="contents">
                    <img id ="21" onClick={() => onImgClick(drama[0])}/>
                    <img id ="22" onClick={() => onImgClick(drama[1])}/>
                    <img id ="23" onClick={() => onImgClick(drama[2])}/>
                    <img id ="24" onClick={() => onImgClick(drama[3])}/>
                    <img id ="25" onClick={() => onImgClick(drama[4])}/>
                    <button type="button" className="like_button" onClick={() => onBtnClick(drama[0])}>
                        <img src="images/like.PNG" className="tooltip" />
                        <div className="tooltip"> Tips !
                            <span className="tooltiptext">좋아요 버튼을 누르면 당신의 취향을 다시 조사해서 추천해드립니다</span>
                        </div>
                    </button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(drama[1])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(drama[2])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(drama[3])}><img src="images/like.PNG" /></button>
                    <button type="button" className="like_button" onClick={() => onBtnClick(drama[4])}><img src="images/like.PNG" /></button>
                </div>
            </div>
            <a href="#/" onClick={() => onAClick("../../dramas/build/index.html")}>더 보기</a>
        </div>
    )
}

export default App;
