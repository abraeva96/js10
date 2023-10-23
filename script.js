let a = prompt("Ismingizni kiriting.");
let b = +prompt(" Hozirgi yilni kiriting.");
let c = +prompt(" Yoshingizni kiriting.");

function age(b, c) {
    return b - c
}

console.log(a + " yoshingiz " + age(b, c))