var body = document.getElementsByTagName("body")[0]

function red(){
    body.style.backgroundColor = "red";


    setTimeout(() => {green();}, 1000);
}

function green(){
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        purple()
    },1000)
}

function purple(){
    body.style.backgroundColor = "purple";

    setTimeout(()=>{
        pink()
    },1000)
}

function pink(){
    body.style.backgroundColor = "pink";

    setTimeout(()=>{
        yellow();
    },1000)
}

function yellow(){
    body.style.backgroundColor = "yellow";


    setTimeout(()=>{
        red()
    },1000)
}
