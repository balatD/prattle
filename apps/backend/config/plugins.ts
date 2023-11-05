module.exports = ({ env }) => ({
    'generate-data': {
        enabled: true,
    },
    'meilisearch': {
        config: {
            host: 'http://localhost:' + env('MEILI_PORT', 7700),
            apiKey: env('MEILI_MASTER_KEY'),
        }
    }
});

