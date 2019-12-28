function math_operation(n1, n2, operation)
{
    switch(operation){
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            return n1 / n2;
            break;

        default:
            return "Unknown Operation";

    }
}

let n1 =Number(prompt("Please enter first number:", ""));
let n2 = Number(prompt("Please enter second number:", ""));

let operator = prompt("Please Enter Operation as +, -, * or / ", "");
while(true){
    if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
        console.log(math_operation(n1, n2, operator));
        break;
    }
    else{
        operator = prompt("Please Enter Valid Operation as +, -, * or / ", "");
    }
}