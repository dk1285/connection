function checkValue(event) {
    event.preventDefault();
    var inputValue = document.getElementById('firstInput').value;
    var desiredValue = 'PFSWT{th15_15_part1_';

    if (inputValue === desiredValue) {
        document.getElementById('secondForm').style.display = 'block';
    } 

}

first.addEventListener("click",checkValue);

two.addEventListener("click",(e)=>{
    e.preventDefault();
    host=(new URL(document.location)).origin;
    window.open(`${host}/validate2?username=${secondFormInput.value}`);
});
