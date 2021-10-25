function UpperCase() {
    let text = document.getElementById("text").value
    let uc = text.toUpperCase();
    document.getElementById("text").value = uc;
}
function LowerCase(){
    let text = document.getElementById("text").value;
    let lc = text.toLowerCase();
    document.getElementById("text").value = lc;
}
function ProperCase() {
    let text = document.getElementById("text").value;
    const words = text.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let ntext=words.join(" ");
    document.getElementById("text").value=ntext;
}
function  SentenceCase() {
    let text = document.getElementById("text").value.toLowerCase();
    let words = text.split('.');

    for (let i = 0; i < words.length; i++) {
        let sentence = words[i].trim();

        let newSentence = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());
        words[i] = newSentence;
    }
    let ntext = words.join(". ");

    document.getElementById("text").value = ntext.trim();
}

function download(filename, text) {
    let element = document.createElement("a");
    element.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function SaveTextFile(){
    let text = document.getElementById("text").value;
    let filename = "text";
    download(filename,text);
}