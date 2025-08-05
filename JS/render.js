//render sản phẩm
export function renderProducts(data, container) {
  container.innerHTML = '';

  data.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Giá: ${p.price.toLocaleString()}đ</p>
        <a href="details.html?id=${p.id}" class="btn">Xem chi tiết</a>
      </div>
    `;
  });
}
