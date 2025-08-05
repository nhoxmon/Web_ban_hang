//Xử lí sản phẩm

import { products } from './data.js';
import { renderProducts } from './render.js';
import { filterProducts } from './filter.js';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  const search = document.getElementById('search');
  const filter = document.getElementById('filter');
  const sort = document.getElementById('sort');

  function updateView() {
    const keyword = search.value;
    const category = filter.value;
    const sortValue = sort.value;

    const result = filterProducts(products, keyword, category, sortValue);
    renderProducts(result, grid);
  }

  search.addEventListener('input', updateView);
  filter.addEventListener('change', updateView);
  sort.addEventListener('change', updateView);

  renderProducts(products, grid);
});
