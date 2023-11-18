// import React from 'react'

// function WomenShoes() {
//     const products = [
//   {
//     name: "NIKE-AIRMAX",
//     description:
//       "The Air Max SYSTM brings back everything you love about your favourite '80s vibes (without the parachute trousers).",
//     images: [
//       "../Images/nike-airmax1.webp",
//       "../Images/nike-airmax2.webp",
//       "../Images/nike-airmax3.webp",
//     ],
//   },
//   {
//     name: "COLEHAAN GrandPrø Wellesley ",
//     description:
//       "Cole Haan leather products support responsible manufacturing via the Leather Working Group.",
//     images: [
//       "../Images/colehaan-women1.jpg",
//       "../Images/colehaan-women2.jpg",
//       "../Images/colehaan-women3.jpg",
//     ],
//   },
//   {
//     name: "GUCCI WOMEN ACE SNEAKERS",
//     description:
//       " Louis Vuitton designs shoes for men to fit every occasion elegant derbies and refined richelieus for casuals.",
//     images: [
//       "../Images/gucci-women1.jpg",
//       "../Images/gucci-women2.jpg",
//       "../Images/gucci-women3.jpg",
//     ],
//   },
//   {
//     name: "VERSACE CHAIN-REACTION",
//     description:
//       "A chunkier construction defines the shape, while a metal “ACE” tag shines atop the lace-up closure. ",
//     images: [
//       "../Images/versace-women1.jpg",
//       "../Images/versace-women2.jpg",
//       "../Images/versace-women3.jpg",
//     ],
//   },
//   {
//     name: "JUST CAVALLI",
//     description:
//       "Just Cavalli stilettos are a tribute to haute couture fashion. With the snake print that adds a dose of drama to your look.",
//     images: [
//       "../Images/jc-women1.webp",
//       "../Images/jc-women2.webp",
//       "../Images/jc-women3.webp",
//     ],
//   },
//   {
//     name: "DKNY-BOOTS",
//     description:
//       "Shop our collection of women's boots and booties. Find tall boots, ankle booties, and more with the iconic DKNY style.",
//     images: [
//       "../Images/dkny-women1.jpg",
//       "../Images/dkny-women2.jpg",
//       "../Images/dkny-women3.jpg",
//     ],
//   },
// ];

// function generateProductCards() {
//   const productContainer = document.querySelector(".row");

//   products.forEach((product, index) => {
//     const productCard = document.createElement("div");
//     productCard.classList.add("col-lg-4", "col-md-6", "mb-4");
//     productCard.innerHTML = `
//       <div class="card">
//         <div class="carousel slide" data-ride="carousel" id="productCarousel${index}">
//           <ol class="carousel-indicators">
//             ${product.images
//               .map(
//                 (image, i) =>
//                   `<li data-target="#productCarousel${index}" data-slide-to="${i}"${
//                     i === 0 ? ' class="active"' : ""
//                   }></li>`
//               )
//               .join("")}
//           </ol>
//           <div class="carousel-inner">
//             ${product.images
//               .map(
//                 (image, i) => `
//                 <div class="carousel-item${i === 0 ? " active" : ""}">
//                   <img src="${image}" class="d-block w-100" alt="Image ${
//                   i + 1
//                 }" />
//                 </div>`
//               )
//               .join("")}
//           </div>
//           <!-- Previous and Next controls here -->
//         </div>
//         <div class="card-body">
//               <button
//         class="btn btn-primary"
//         data-toggle="modal"
//         data-target="#recipientModal"
//       >
//         Buy Now
//       </button>
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text">${product.description}</p>
//       </div>
//     `;

//     productContainer.appendChild(productCard);
//   });
// }

// // Function to filter products based on search input
// function filterProducts(searchQuery) {
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Get the product container to display the results
//   const productContainer = document.querySelector(".row");
//   productContainer.innerHTML = "";

//   if (filteredProducts.length === 0) {
//     productContainer.innerHTML = "<p>No matching products found.</p>";
//   } else {
//     filteredProducts.forEach((product, index) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("col-lg-4", "col-md-6", "mb-4");
//       productCard.innerHTML = `
//         <div class="card">
//           <div class="carousel slide" data-ride="carousel" id="productCarousel${index}">
//             <ol class="carousel-indicators">
//               ${product.images
//                 .map(
//                   (image, i) =>
//                     `<li data-target="#productCarousel${index}" data-slide-to="${i}"${
//                       i === 0 ? ' class="active"' : ""
//                     }></li>`
//                 )
//                 .join("")}
//             </ol>
//             <div class="carousel-inner">
//               ${product.images
//                 .map(
//                   (image, i) => `
//                   <div class="carousel-item${i === 0 ? " active" : ""}">
//                     <img src="${image}" class="d-block w-100" alt="Image ${
//                     i + 1
//                   }" />
//                   </div>`
//                 )
//                 .join("")}
//             </div>
//             <!-- Previous and Next controls here -->
//           </div>
//           <div class="card-body">
//                <button
//         class="btn btn-primary"
//         data-toggle="modal"
//         data-target="#recipientModal"
//       >
//         Buy Now
//       </button>
//             <h5 class="card-title">${product.name}</h5>
//             <p class="card-text">${product.description}</p>
//         </div>
//       `;

//       productContainer.appendChild(productCard);
//     });
//   }
// }

// // Event listener for the search button
// document.getElementById("searchButton").addEventListener("click", function () {
//   const searchInput = document.getElementById("searchInput").value;
//   filterProducts(searchInput);
// });

// // Event listener for Enter key in the search input
// document
//   .getElementById("searchInput")
//   .addEventListener("keyup", function (event) {
//     if (event.key === "Enter") {
//       const searchInput = document.getElementById("searchInput").value;
//       filterProducts(searchInput);
//     }
//   });

// // Initial display of all products
// generateProductCards();

//   return (
//     <div><!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>COMFORT_PATH</title>

//     <link rel="icon" href="../Images/title-logo.png" />
//     <!-- Include Bootstrap CSS -->
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
//     />
//     <link rel="stylesheet" href="../Css/style.css" />
//   </head>

//   <body>
//     <!-- Main content container -->
//     <div class="container mt-4">
//       <h1>Welcome to Comfort Path</h1>
//       <p>
//         Explore our wide range of products and enjoy a comfortable shopping
//         experience.
//       </p>

//       <!-- Search bar -->
//       <div class="input-group mb-3">
//         <input
//           type="text"
//           class="form-control"
//           id="searchInput"
//           placeholder="Search something..."
//           aria-label="Search something..."
//           aria-describedby="basic-addon2"
//         />
//         <div class="input-group-append">
//           <button class="btn btn-primary" type="button" id="searchButton">
//             <i class="fas fa-search"></i> Search
//           </button>
//         </div>
//       </div>

//       <div class="row"></div>

//       <!-- Recipient Email Modal -->
//       <div
//         class="modal fade"
//         id="recipientModal"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="recipientModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="recipientModalLabel">
//                 Enter Recipient's Email
//               </h5>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div class="form-group">
//                 <label for="recipientEmail">Recipient's Email:</label>
//                 <input type="email" class="form-control" id="recipientEmail" />
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-primary"
//                 id="proceedToPayment"
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer class="bg-dark text-white">
//         <div class="container text-center">
//           <p class="footer-container">Copyright &copy; Comfort Path 2023</p>
//         </div>
//       </footer>
//     </div>

//     <!-- Include Bootstrap JS and jQuery -->
//     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//     <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
//     <script src="../Js/WomenShoes.js"></script>
//     <script>
//       document.addEventListener("DOMContentLoaded", function () {
//         const recipientModal = document.getElementById("recipientModal");
//         const proceedToPaymentButton =
//           document.getElementById("proceedToPayment");
//         const recipientEmailInput = document.getElementById("recipientEmail");

//         // Function to handle Proceed to Payment button click
//         proceedToPaymentButton.addEventListener("click", function () {
//           const recipientEmail = recipientEmailInput.value;
//           if (!recipientEmail || !isValidEmail(recipientEmail)) {
//             alert("Please enter a valid recipient email address.");
//             return;
//           }

//           // Example: Simulating a successful payment
//           const orderData = {
//             amount: 1000, // Replace with the actual amount in paisa (e.g., 1000 for 10 INR)
//             recipientEmail: recipientEmail, // Add the recipient's email to the order data
//           };

//           // Replace 'your_api_key' with your actual Razorpay API key

//           // Create a new order on your backend and get the order ID
//           fetch("http://localhost:4000/payment/create-order", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(orderData),
//           })
//             .then((response) => response.json())
//             .then((orderData) => {
//               if (orderData.id) {
//                 const options = {
//                   amount: orderData.amount,
//                   currency: "INR",
//                   name: "Comfort Path",
//                   description: "Payment for Order",
//                   order_id: orderData.id,
//                   handler: function (response) {
//                     // Handle the payment success on your backend
//                     fetch("http://localhost:4000/payment/success", {
//                       method: "POST",
//                       headers: {
//                         "Content-Type": "application/json",
//                       },
//                       body: JSON.stringify(response),
//                     })
//                       .then((response) => response.json())
//                       .then((data) => {
//                         if (data.success) {
//                           alert(
//                             "Payment successful. An email confirmation has been sent."
//                           );
//                           // Close the recipient email modal
//                           $("#recipientModal").modal("hide");
//                         } else {
//                           alert("Payment processing failed");
//                         }
//                       });
//                   },
//                 };

//                 const rzp = new Razorpay(options);
//                 rzp.open();
//               } else {
//                 alert("Failed to create the payment order");
//               }
//             });
//         });

//         // Function to validate email address
//         function isValidEmail(email) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(email);
//         }
//       });
//     </script>
//     <script src="https://js.stripe.com/v3/"></script>
//   </body>
// </html>
// </div>
//   )
// }

// export default WomenShoes
