function science(per,name)
{
    return name + " ur selected in science stream with percentage is " + per
}
function commerce(per,name)
{
    return name + " ur selected in commerce stream with percentage is " + per
}
function arts(per,name)
{
    return name + " ur selected in arts stream with percentage is " + per
}

var percentage = parseInt(prompt("enter no:-"));
var flag;

if(percentage > 90)
{
    flag =science(percentage,"vrutik")
}else if(percentage > 70)
{
   flag= commerce(percentage,"jalay")
}else if(percentage > 60)
{
   flag= arts(percentage ,"guru")
}
else{
    console.log("fail");
}
console.log(flag);
