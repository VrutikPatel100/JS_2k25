var output = document.getElementById("output")

const addPass = ()=>{
    //name
    const nameLabel = document.createElement("lable")
    nameLabel.innerHTML = "Name :"
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    const br = document.createElement("br")

    //age
    const agelabel = document.createElement("lable")
    agelabel.innerHTML = "Age :"
    const AgeInput = document.createElement("input")
    AgeInput.type = "text"
    const br2 = document.createElement("br")

     //email
     const emaillabel = document.createElement("lable")
     emaillabel.innerHTML = "email :"
     const EmailInput = document.createElement("input")
     EmailInput.type = "text"
     const br3 = document.createElement("br")

    //name
    output.appendChild(nameLabel)
    output.appendChild(nameInput)
    output.appendChild(br)

    //age
    output.appendChild(agelabel)
    output.appendChild(AgeInput)
    output.appendChild(br2)

    //email
    output.appendChild(emaillabel)
    output.appendChild(EmailInput)
    output.appendChild(br3)
}