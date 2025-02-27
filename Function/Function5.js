function science(per,name)
{
    console.log(name + "ur addmition confirm in science stream with per " + per);
}
function commerce(per,name)
{
    console.log(name + "ur addmition confirm in commerce stream with per " + per);
}
function arts(per,name)
{
    console.log(name + "ur addmition confirm in arts stream with per " + per);
}

var percentage = parseInt(prompt("enter percentage:-"));

if(percentage > 90)
{
    science(percentage,"vrutik")
}
else if(percentage > 70)
{
    commerce(percentage ,"shobha")
}
else if(percentage > 50)
{
    arts(percentage,"priya")
}
else{
    console.log("not eligible for addmission");
}