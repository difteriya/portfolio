let n = prompt("Please Enter a number:", "");
if(isNaN(Number(n)) || n=="")
{
    n = prompt("Please Enter a valid Number:", "");
}
let counter = -1;
for(let i = 0; i <= n; i++)
{
    if(i % 5 == 0)
    {
        console.log(i);
        counter++;
    }
}

if(counter == 0)
{
    console.log("Sorry no numbers");
}
