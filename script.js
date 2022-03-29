let print = function(msg) {
    alert(msg)
    document.getElementById("output").innerHTML = msg;
}
document.getElementById('btn').onclick = () => {
    print(document.getElementById('str').value.length);
}