function checkName(name) {
    if (!Array.isArray(name) && typeof name === 'string') {
        const lastCharacter = name[name.length - 1].toLowerCase();
        if (lastCharacter === 'a' || lastCharacter === 'y' || lastCharacter === 'i' || lastCharacter === 'e' || lastCharacter === 'o' || lastCharacter === 'u' || lastCharacter === 'w') {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    } else {
        return "invalid";
    }
}
console.log(checkName("Salman")); // bad Name
console.log(checkName("RAFEE")); // Good Name
console.log(checkName("Jhankar")); // Bad Name
console.log(checkName(["Rashed"])); // "invalid"
console.log(checkName(199)); // invalid
