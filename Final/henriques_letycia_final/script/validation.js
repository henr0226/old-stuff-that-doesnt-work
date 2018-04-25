window.onload = init;

function validateForm() {
    var x = document.forms["name"]["email"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    if (x == "") {
        alert("E-mail must be filled out");
        return false;
    }
}