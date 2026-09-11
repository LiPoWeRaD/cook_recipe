import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Отключаем оптимизацию картинок, так как стандартный Image Optimization требует сервер Node.js
  images: {
    unoptimized: true,
  },

  // ВАЖНО: Укажите имя вашего репозитория GitHub со слэшем в начале.
  // Например, если репозиторий называется "my-portfolio", то basePath: '/my-portfolio'
  // Если вы разворачиваете на основной домен (username.github.io), basePath писать НЕ нужно.
  basePath: '/cook_recipe',
};

export default nextConfig;
