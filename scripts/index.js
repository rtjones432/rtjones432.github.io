function gen_name(){
    let answer = "";
    while (answer.length < 8){
        if (Math.random() < 0.5){
            answer += "0";
        } else {
            answer += "1";
        }
    }
    return answer;
}
function slow_append_inner(elementId, text, baseTimeout){
    for (let index = 0; index < text.length; index++) {
        setTimeout(() => {document.getElementById(elementId).innerHTML += text[index];}, baseTimeout + index * 20)
    }
    setTimeout(() => {document.getElementById(elementId).innerHTML += "<br>><br>";}, baseTimeout + text.length * 20)
    return baseTimeout + text.length * 20;
}