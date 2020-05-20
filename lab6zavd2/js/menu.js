function buttonClick() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function onLoad() {
    phrases = ["Що розум людини може осягнути і в що він може повірити, те він здатний досягти", "Неосмислене життя не варте того, щоб його прожити", "За свою кар’єру я пропустив понад 9000 кидків, програв майже 300 ігор. 26 раз мені довіряли зробити фінальний переможний кидок, і я промахувався. Я зазнавав поразок знову, і знову, і знову. І саме тому я домігся успіху", "Наука – це організовані знання, мудрість – це організоване життя."];
    document.getElementById('phraseOfDay').innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}