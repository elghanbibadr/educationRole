// vite.config.js
import Pages from 'vite-plugin-pages';

export default {
    plugins: [Pages()],
    build: {
        outDir: 'dist',
    },
};
