import { products } from './data.js';

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function renderDetail(product) {
  const container = document.getElementById('productDetail');
  if (!product) {
    container.innerHTML = `<p>Sản phẩm không tồn tại.</p>`;
    return;
  }

  const galleryImages = product.gallery.map(img => `<img src="${img}" alt="${product.name}">`).join('');

  const specsList = product.specs.map(s => `<li>${s}</li>`).join('');

  container.innerHTML = `
    <div class="product-gallery">
      <img src="${product.image}" alt="${product.name}" class="main-image">
    </div>

    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="price">Giá: <strong>${product.price.toLocaleString()}đ</strong></p>

      <div class="product-specs">
        <ul>${specsList}</ul>
      </div>

      <div class="action-panel">
        <label for="quantity">Số lượng:</label>
        <input type="number" id="quantity" value="1" min="1">
        <div class="buttons">
          <button class="btn add-to-cart">Thêm vào giỏ hàng</button>
          <button class="btn buy-now">Mua ngay</button>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getIdFromURL();
  const product = getProductById(id);
  renderDetail(product);
});
