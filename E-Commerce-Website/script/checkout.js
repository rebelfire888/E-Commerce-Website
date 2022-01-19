const outerEl = document.getElementById('outer');
const homeEl = document.getElementById('home');

function getCartTotal(){
    const temp = localStorage.getItem('cartTotal');
    const total = parseInt(temp);
    const cartArr = [];
    localStorage.setItem('cartArr', JSON.stringify(cartArr));
    localStorage.setItem('cartTotal', 0);
    updateDOM(total);
}

function updateDOM(total){
    outerEl.innerHTML = `
        <h2>Thank you for shopping with us</h2>
        <h3>Your final total is : ${total}</h3>
    `;
}

homeEl.addEventListener('click', ()=>{
    window.location.href = "./products.html";
});

getCartTotal();
