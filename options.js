let page = document.getElementById("buttonDiv");
const kButtonColours = [
    '#b22c45',
    '#2cb245',
    '#3a57a7',
    '#d2d32c'
];

function constructOptions(buttonColors) {
    for(let item of buttonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({
                color: item
            },
            function() {
                console.log('Selected color: ' + item);
            });
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColours);