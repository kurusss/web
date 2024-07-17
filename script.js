
let carrito = [];

function addToCart(producto, precio, categoria) {
    carrito.push({
        producto: producto,
        precio: precio,
        categoria: categoria
    });
    updateCart();
}


function updateCart() {
    let cartCount = document.getElementById('cart-count');
    let cartItems = document.getElementById('cart-items');

   
    cartItems.innerHTML = '';

    cartCount.textContent = carrito.length;

    carrito.forEach((item, index) => {
        let cartItem = document.createElement('li');
        cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        cartItem.innerHTML = `
            ${item.producto} - ₡${item.precio}
            <span class="badge badge-primary badge-pill" onclick="removeFromCart(${index})">X</span>
        `;
        cartItems.appendChild(cartItem);
    });
}


function removeFromCart(index) {
    carrito.splice(index, 1);
    updateCart();
}


function clearCart() {
    carrito = [];
    updateCart();
}


document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});

        function toggleAddressField() {
            var deliveryOption = document.getElementById("delivery-option").value;
            var addressField = document.getElementById("address-field");

            if (deliveryOption === "Recoger en ubicación") {
                addressField.style.display = "none";
            } else {
                addressField.style.display = "block";
            }
        }

     
        function submitOrder() {
            var name = document.getElementById("name").value;
            var phone = document.getElementById("phone").value;
            var deliveryOption = document.getElementById("delivery-option").value;
            var address = document.getElementById("address").value;
            var paymentOption = document.getElementById("payment-option").value;

           
            if (name === "" || phone === "") {
                alert("Por favor, ingrese su nombre y número de teléfono.");
                return;
            }

            
            var order = {
                name: name,
                phone: phone,
                deliveryOption: deliveryOption,
                address: address,
                paymentOption: paymentOption
            };

           
            console.log("Pedido enviado:", order);
            alert("Pedido enviado correctamente.");

            
            document.getElementById("checkout-form").reset();
        }

document.addEventListener('DOMContentLoaded', function () {
    const deliveryMethod = document.getElementById('deliveryMethod');
    const paymentMethod = document.getElementById('paymentMethod');
    const sinpeInfo = document.getElementById('sinpeInfo');
    const efectivoOption = document.querySelector('#paymentMethod option[value="efectivo"]');

    function updatePaymentOptions() {
        if (deliveryMethod.value === 'uberFlash') {
            efectivoOption.style.display = 'none';
            if (paymentMethod.value === 'efectivo') {
                paymentMethod.value = 'sinpeMovil';
            }
        } else {
            efectivoOption.style.display = 'block';
        }
        updateSinpeInfo();
    }

    function updateSinpeInfo() {
        if (paymentMethod.value === 'sinpeMovil') {
            sinpeInfo.style.display = 'block';
        } else {
            sinpeInfo.style.display = 'none';
        }
    }

    deliveryMethod.addEventListener('change', updatePaymentOptions);
    paymentMethod.addEventListener('change', updateSinpeInfo);

    updatePaymentOptions(); 
});


