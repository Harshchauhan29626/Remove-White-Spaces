function Removespace() {
    
    let text = document.getElementById("text").value;
    let remove = text.trim();
    
    document.getElementById("p1").innerHTML = "Result: " +remove;
}