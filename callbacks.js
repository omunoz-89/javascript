function checkInstagram(username) {
    // write code and test
    console.log(`My user name is ${username}`);
}
function makePhoneCall(contact) {
    // write code and test
    console.log(`Call ${contact} to see how she's doing`);
}
function playSpotify(song) {
    // write code and test
    console.log(`Play ${song}`);
}
function checkEmail(emailProvider) {
    // write code and test
    console.log(`Go through my ${emailProvider} to read my 9000+ un-read emails.`)
}
function sendEmail(message) {
    // write code and test
    console.log(`Send email to my doctor teliing him that ${message}`);
}
function sendTextMessage(contact) {
    console.log(`Yo, what's the word ${contact}`);
}
function takePicture(filter) {
    console.log(`Take picture with ${filter} filter`);
}
function faceTime(friend) {
    console.log(`Facetiming my friend ${friend}...`);
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
console.log('---');
useMobileDevice('Android', faceTime, 'Jake');
console.log('---');
useMobileDevice('iPhone', takePicture, 'portrait');
console.log('---')
useMobileDevice('iPhone', checkInstagram, 'omunoz');
console.log('---')
useMobileDevice('Android', makePhoneCall, 'Mom');
console.log('---');
useMobileDevice('iPhone', playSpotify, "Whats's Next by Drake");
console.log('---');
useMobileDevice('iPhone', checkEmail, 'G-Mail');
console.log('---')
useMobileDevice('Android', sendEmail, "I'm feeling alot better")
