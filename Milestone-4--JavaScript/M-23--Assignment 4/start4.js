function password(obj) {
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return 'invalid';
    }

    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    const capitalizedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

    const generatedPassword = `${capitalizedSiteName}#${obj.name}@${obj.birthYear}`;

    return generatedPassword;
}


console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" })); // Google#kolimuddin@1999
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" })); // Facebook#rahat@2002
console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" })); // invalid
console.log(password({ name: "maisha" , birthYear: 2002 })); // invalid"