var calculator = {
    Number: [],
    numberClick: numberClick,
    operatorClick: operatorClick,
    equalClick: equalClick,
    clearClick: clearClick
}

var numberClick = function (value) {
    var val = document.getElementById("result").value;
    if(value == "0" && val == "0") {
        return;
    }
    if(val == "0") {
        document.getElementById("result").value = value;
    } else {
        document.getElementById("result").value = val + value;
    }
}

var operatorClick = function (value) {
    var val = document.getElementById("result").value;
    if (val[val.length - 1] == " ") {
        return;
    }
    document.getElementById("result").value = val + " " + value + " ";
}

var equalClick = function () {
    number = document.getElementById("iputNum").value.split(" ");
    for (var index = 0; index < number.length; index++) {
        if (this.number[index + 1] == "") {
            this.number[index + 1] = "1";
        }
        if (this.number[index == "*"]{
            var index_num = this.number[index];
            var firstNum = Number(this.number[index_num - 1])
            var secondNum = Number(this.number[index_num + 1])
            var result = firstNum * secondNum;
            this.number.split(index_num, -1, 3, result);
        } else if (this.number[index] == "/") {
            var index_num = this.number[index];
            var firstNum = Number(this.number[index_num - 1])
            var secondNum = Number(this.number[index_num + 1])
            var result = firstNum / secondNum;
            this.number.split(index_num, -1, 3, result);
        }
    }
        index--;
    }
}
for (var index = 0; index < this.number.length; index++){
    if (this.number[index] == "+") {
        var index_num = this.number[index];
        var firstNum = Number(this.number[index_num - 1])
        var secondNum = Number(this.number[index_num + 1])
        var result = firstNum + secondNum;
        this.number.split(index_num, -1, 3, result);
        //删除数组已计算数字，并添加计算后的数字
        var index_num = this.number[index];
        var firstNum = Number(this.number[index_num - 1])
        var secondNum = Number(this.number[index_num + 1])
        var result = firstNum + secondNum;
        this.number.split(index_num, -1, 3, result);
    }
    index--;
} document.getElementById("result").value = number[0];

var cleanClick = function () {
    document.getElementById("result").value = "";
}
