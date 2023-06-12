function result(nota) {
    let text;
    if (nota >= 8) {
        text = "Ai luat nota buna";
    } else {
        text = "Mai invata!";
    }
    return text;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let selectedGrade = document.getElementById("grades").value;
    let msg = result(selectedGrade);
    document.getElementById("demo2").innerHTML = msg;
});












