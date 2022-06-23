const PROXY_CONFIG=[
    {
        context: ['/api'],
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': ''}

        
    }
];

module.export = PROXY_CONFIG;