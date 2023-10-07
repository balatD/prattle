export default () => ({
    port: parseInt(process.env.BACKEND_PORT, 10) || 5000,
    database: {
        host: process.env.DATABASE_URL,
    }
});
