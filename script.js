/* product */
function loadMore() {
    const productGrid = document.getElementById('productGrid');
    const newProduct = `
        <div class="product">
            <img src="https://via.placeholder.com/250" alt="Microwave Oven">
            <h3>Microwave Oven</h3>
            <p>$199.99</p>
        </div>
        <div class="product">
            <img src="https://via.placeholder.com/250" alt="Dishwasher">
            <h3>Dishwasher</h3>
            <p>$599.99</p>
        </div>
    `;
    productGrid.innerHTML += newProduct;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let isValid = true;
    
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }
    
    if (email.trim() === "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Valid email is required";
        isValid = false;
    }
    
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Message is required";
        isValid = false;
    }
    
    if (isValid) {
        alert("Message Sent Successfully!");
    }
}