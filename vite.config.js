import { fileURLToPath } from 'url'

export default {
    build: {
        rollupOptions: {
            input: {
                home: fileURLToPath(new URL('./index.html', import.meta.url)),
                restaurant: fileURLToPath(new URL('./restaurant.html', import.meta.url)),
            },
        },
    },
    server: {
        host: "0.0.0.0",
        port: 5173
    }
}
