var arr = [1, 27, 3, 9, 4];
function fn(arr) {
    return Math.max.apply(null, arr);
}
console.log(fn(arr)); 
document.write(fn(arr));