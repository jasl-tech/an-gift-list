// document.addEventListener("DOMContentLoaded", function () {
//     const giftListElement = document.getElementById('gift-list');
//     const form = document.getElementById('gift-form');

//     // Fetch the list of gifts from the API
//     function fetchGifts() {
//         fetch('http://an-gift-list.us-east-2.elasticbeanstalk.com/api/Gift/availables')
//             .then(response => response.json())
//             .then(data => displayGifts(data))
//             .catch(error => console.error('Error fetching gifts:', error));
//     }

//     // Display gifts in the UI as checkboxes
//     function displayGifts(gifts) {
//         giftListElement.innerHTML = ''; // Clear previous gifts
//         gifts.forEach(gift => {
//             const giftItem = document.createElement('div');
//             giftItem.classList.add('gift-item');

//             // Disable checkbox if the gift is already selected
//             giftItem.innerHTML = `
//                 <input type="checkbox" id="gift-${gift.id}" value="${gift.id}" ${gift.person ? 'disabled' : ''}>
//                 <label for="gift-${gift.id}">
//                     ${gift.name} ${gift.person ? `(Already selected by ${gift.person})` : ''}
//                 </label>
//             `;
//             giftListElement.appendChild(giftItem);
//         });
//     }

//     // Function to handle form submission
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const personName = document.getElementById('person-name').value.trim();
//         if (personName === '') {
//             alert('Por favor, informe o seu nome!');
//             return;
//         }

//         const selectedGifts = Array.from(document.querySelectorAll('#gift-list input[type="checkbox"]:checked'))
//             .map(checkbox => Number(checkbox.value));

//         if (selectedGifts.length === 0) {
//             alert('Selecione pelo menos 1 item!');
//             return;
//         }

//         // Prepare the payload to send to the server
//         const payload = {
//             personName: personName,
//             ids: selectedGifts
//         };

//         // Send the selected gifts and person name to the server
//         fetch('http://an-gift-list.us-east-2.elasticbeanstalk.com/api/gift', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message) {
//                     alert(data.message);
//                     fetchGifts(); // Refresh the list after successful submission
//                 }
//             })
//             .catch(error => console.error('Erro ao salvar items:', error));
//     });

//     // Initial fetch of the gifts when the page loads
//     fetchGifts();
// });
