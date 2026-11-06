// Небольшой скрипт: автоматически обновляет год в подвале.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Если PNG ещё не добавлены в assets, остаётся аккуратная заглушка.
  document.querySelectorAll('.product-image img').forEach((image) => {
    image.addEventListener('error', () => {
      image.style.display = 'none';
    }, { once: true });
  });
});
