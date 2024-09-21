let buttons = document.querySelectorAll(".buttons button");
let ticketEl = document.querySelector(".ticket");
let seatCount = document.querySelector(".seat-count");

let totalPrice = 0;
let discountPrice = 0;
let cuponCode = "2345FD";
let cuponCode2 = "AUH2255";
let cuponCode3 = "F255P9";
let seat;

for (const button of buttons) {
  seat = buttons.length;
  seatCount.innerHTML = seat;

  button.classList.add(
    "bg-green-500",
    "px-4",
    "sm:px-8",
    "py-2",
    "text-2xl",
    "hover:bg-orange-500",
    "rounded-md"
  );
  button.addEventListener("click", function () {
    button.classList.add("bg-orange-500");
    ticketEl.innerHTML += `
        <div class="flex justify-between p-2 bg-orange-400 border-b-2 text-black">
            <p>${button.innerText}</p>
            <p>Economy</p>
            <p id="price-per-ticket">550</p>
        </div>
        `;

    const perTicket = document.getElementById("price-per-ticket").innerText;
    const perTicketNum = parseFloat(perTicket);
    totalPrice += perTicketNum;

    document.getElementById("total-amount").innerText = totalPrice;

    if (button) {
      button.disabled = true;
      seatCount.innerHTML = seat -= 1;
    }

    document.getElementById("apply-btn").addEventListener("click", function () {
      const cuponValue = document.querySelector("#cuponValue").value;

      if (
        (totalPrice >= 2000 && cuponValue === cuponCode) ||
        cuponValue === cuponCode2 ||
        cuponValue === cuponCode3
      ) {
        if (cuponValue === cuponCode) {
          const cuponPrice = 550 * 0.5;
          discountPrice = totalPrice - cuponPrice;
          document.getElementById("discount-price").innerText = discountPrice;

          querySelectorByClassAdd(".cupon-main", "hidden");
          querySelectorByClassRemove(".discount-container", "hidden");
          querySelectorByClassAdd(".discount-container", "flex");
        } else if (cuponValue === cuponCode2) {
          const cuponPrice = 550 * 0.7;
          discountPrice = totalPrice - cuponPrice;
          document.getElementById("discount-price").innerText = discountPrice;

          querySelectorByClassAdd(".cupon-main", "hidden");
          querySelectorByClassRemove(".discount-container", "hidden");
          querySelectorByClassAdd(".discount-container", "flex");
        } else if (cuponValue === cuponCode3) {
          const cuponPrice = 550 * 0.3;
          discountPrice = totalPrice - cuponPrice;
          document.getElementById("discount-price").innerText = discountPrice;

          querySelectorByClassAdd(".cupon-main", "hidden");
          querySelectorByClassRemove(".discount-container", "hidden");
          querySelectorByClassAdd(".discount-container", "flex");
        }
      }
    });

    document.getElementById("discount-price").innerText = discountPrice +=
      perTicketNum;
  });
}

document.querySelector(".next-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const passengerName = document.getElementById("passenger-name").value;
    const passengerNumber = document.getElementById("passenger-number").value;
    const passengerEmail = document.getElementById('passenger-email').value;
    console.log(passengerName, passengerNumber, passengerEmail);
    
    
    if (passengerName && passengerNumber && passengerEmail) {
        
        window.location.reload();
        console.log('ok');  
    } else {
        console.log('sorry');
        
    }
});

function querySelectorByClassAdd(className, name) {
  document.querySelector(className).classList.add(name);
}
function querySelectorByClassRemove(className, name) {
  document.querySelector(className).classList.remove(name);
}



