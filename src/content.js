var content = [
    {
        "day":"0",
        "photo":"images/day-0.jpg",
        "label":"Dia chuvoso no Aeroporto do Rio"
    },
    {
        "day":"1",
        "photo":"images/day-1.jpg",
        "label":"Foto: Noite em Madrid - Paroquia de San Manuel e San Benito"
    }
]

// LET LAST ITEM INSERT IN CONTENT TO TRANSFORM THIS IN SELECTED LABEL AT HTML TEMPLATE
let lastItemContent = content.length - 1;

let actualToday = content.length;

// TRY IF YOUR BROWSER SUPPORT HTML TEMPLATE CHECKING THE "CONTENT" ATTRIBUTE AT TEMPLATE ELEMENT
if ('content' in document.createElement('template')) {

    var label = document.querySelector('#photoLabel'),
        p = label.content.querySelector('.label-photo');
        p.textContent = content[lastItemContent].label;

    document.querySelector('.label-photo').appendChild(p);


}
//IF HTML TEMPLATE IS NOT SUPORTED USE THIS
else{

    // ALTERNATIVE METHOD TO INSERT LABEL AT PAGE
    document.querySelector('.label-photo').textContent = content[lastItemContent].label;

}

// INSERT LAST NODE PHOTO VALUE IN BODY BACKGROUND
document.body.style.backgroundImage = "url("+content[lastItemContent].photo+")";

// REMOVE TEMPLATE FROM PAGE AFTER LOAD
function removeTemplate() {

    document.querySelector('template').remove();

}

window.onload = removeTemplate;