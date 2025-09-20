// Devuelve la URL correcta de un asset respetando la base de Vite (GitHub Pages)
export const asset = (p) =>
    `${import.meta.env.BASE_URL}${String(p).replace(/^\/+/, "")}`;
