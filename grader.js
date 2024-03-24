// marks Grading program

const marks  = prompt("enter your marks")
if(marks<0 || marks>100){
    alert("please enter valid marks")
}else if(marks>79){
    alert("A")
}else if(marks >60 && marks<79){
alert("B")
}else if(marks >49 && marks <59){
    alert("C")
}else if(marks >40 &&marks <49){
    alert("D")
}else if (marks<40) {
    alert("E")
}
