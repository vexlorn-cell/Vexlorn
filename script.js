const cart = {
  total: 0,
  count: 0,
};

const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartPanel = document.querySelector('.mini-cart');
const closeCartButton = document.querySelector('.close-cart');
const addButtons = document.querySelectorAll('[data-price]');

function updateCart() {
  cartTotal.textContent = cart.total;
  cartCount.textContent = cart.count;
  cartPanel.classList.toggle('hidden', cart.count === 0);
}

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const price = Number(button.dataset.price || 0);
    cart.total += price;
    cart.count += 1;
    updateCart();
  });
});

closeCartButton.addEventListener('click', () => {
  cartPanel.classList.add('hidden');
});

const cartPill = document.querySelector('.cart-pill');
cartPill.addEventListener('click', () => {
  cartPanel.classList.toggle('hidden');
});

const previewButtons = document.querySelectorAll('.preview-btn');
previewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const title = card.querySelector('h3')?.textContent || 'Preview';
    alert(`${title}\nPreview mode activated. This is a static storefront demo.`);
  });
});

updateCart();
