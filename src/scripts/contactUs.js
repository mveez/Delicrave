navBbar();

function handleSubmit(e) {
    e.preventDefault();

    const URI = "";

    const formInputs = document.getElementsByTagName("INPUT");    

    const fullName = formInputs[0].value;
    const messageReason = document.getElementById("messageReason").value;
    const email = formInputs[1].value;
    const message = document.getElementById("message").value;
    const image = formInputs[2].value;
    const checkbox = formInputs[3].checked;
    
    console.log("fullName: " + fullName + " | messageReason: " + messageReason + " | email: " + email + " | message: " + message + " | image: " + image + " | checkbox: " + checkbox);

    if(!fullName || !messageReason || !email || !message || !checkbox) {
        alert("Please fill all filds");
        return;
    }

    let data;
    let contactData = [];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.length >= 3 && fullName.length <= 75) {
        if(regex.test(email)) {

            contactData = [
                {
                    "fullName":fullName,
                    "messageReason":messageReason,
                    "email":email,
                    "message":message,
                    "image":image,
                    "checkbox":checkbox,
                }
            ]
            
            /*
            fetch(URI, {
                    method:'POST',
                    headers:{
                        'Content-type':'application/json',
                    },
                    body: JSON.stringify(contactData),
            })
            .then((response) => response.json())
            .then((response) => {data = response})
            .catch((error) => console.log("Error: ", error));
            */
            alert("Hello!");
        } else {
            alert("Please enter a valid email!");
        }
    } else {
        alert("Please enter a full name valid! It must be between 5 and 100 characters.");
    }
}