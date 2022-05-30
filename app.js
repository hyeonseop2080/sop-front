let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["여러분이 재밌게 봤던 미디어 문화를 통해 여러분이 즐길만한 미디어 문화를 추천해 드려요 !"
    , "What's Your favorite Media Contents?!", "Mobodra will find the best content through the content that you enjoyed !"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){

    if(randomArr.length > 0 ){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },60)
    }else{
        setTimeout(resetTyping, 2000)
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);

