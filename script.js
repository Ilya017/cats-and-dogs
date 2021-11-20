function animal(animal,n) {
    n = prompt("Input n");
    for (i = 0; i < n; i++) {
        document.write("<img src = 'images/" + animal + ".jpg'>");
        if(i % 10 == 0) {
            document.write("<br>");
        }
    }
}
let k = 0;
animal('dog', k);