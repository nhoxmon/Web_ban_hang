// Xử lí hàm lọc, tìm kiếm, sắp xếp
export function filterProducts(products, keyword, category, sort) {
  let filtered = products.filter(p => {
    let matchKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
    let matchCategory = category === 'all' || p.category === category;
    return matchKeyword && matchCategory;
  });

  if (sort === 'asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}
