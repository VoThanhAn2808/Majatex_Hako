// Animation
  function counterUp(element, endValue) {
    let startValue = 0;
    let duration = 1000; 
    let increment = endValue / duration; 
  
    let interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(interval);
      }
      element.textContent = Math.floor(startValue);
    }, 1); 
  }
  

  window.addEventListener("DOMContentLoaded", function() {
    let cityCount = document.getElementById('city-count');
    let customerCount = document.getElementById('customer-count');
    let transactionCount = document.getElementById('transaction-count');
  

    counterUp(cityCount, 30);
    counterUp(customerCount, 100000);
    counterUp(transactionCount, 1000000);
  });

  //About btn
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("about-btn").addEventListener("click", function () {
      window.location.href = "about.html";
    });
    document.getElementById("product-btn").addEventListener("click", function () {
      window.location.href = "product.html"; 
    });
  });
  