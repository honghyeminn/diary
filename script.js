function addDiary() {

    let text= document.getElementById('diaryInput').value;

    if (text == '') {
        alert('일기 내용을 입력해주세요!');
        return;
    }

    let newLi = document.createElement('li');
    newLi.textContent = text;

    document.getElementById('diaryList').appendChild(newLi);

    document.getElementById('diaryInput').value = '';
}