import { useState } from "react";
import axios from "axios";

function App() {
    const onImgClick = (event) => {
        window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=범죄도시2', '_blank', );
    };

    return (
        <div>
            <div className="media">영화 (Top5)</div>
            <div className="mrecommend">
                <div className="contents">
                    <img src="images/1.png" id ="1" onClick={onImgClick} style={{cursor: "pointer"}} />
                    <img src="images/1.png" id ="2" />
                    <img src="images/1.png" id ="3" />
                    <img src="images/1.png" id ="4" />
                    <img src="images/1.png" id ="5" />
                </div>
            </div>
            <a href="movies.html" onClick="window.open(this.href,'팝업창','width=1000,height=800, top=100, left=500');">더 보기</a>
            <div className="media">책 (Top5)</div>
            <div className="mrecommend">
                <div className="contents">
                    <img src="images/1.png" id ="11" />
                    <img src="images/1.png" id ="12" />
                    <img src="images/1.png" id ="13" />
                    <img src="images/1.png" id ="14" />
                    <img src="images/1.png" id ="15" />
                </div>
            </div>
            <a href="books.html" onClick="window.open(this.href,'팝업창','width=1000,height=800, top=100, left=500');">더 보기</a>
            <div className="media">드라마 (Top5)</div>
            <div className="mrecommend">
                <div className="contents">
                    <img src="images/1.png" id ="21" />
                    <img src="images/1.png" id ="22" />
                    <img src="images/1.png" id ="23" />
                    <img src="images/1.png" id ="24" />
                    <img src="images/1.png" id ="25" />
                </div>
            </div>
            <a href="dramas.html" onClick="window.open(this.href,'팝업창','width=1000,height=800, top=100, left=500');">더 보기</a>
        </div>
    )
}

export default App;
