const PROXY_CONFIG = [
    {
        context: [
            '/activityLog/rest',
            '/adminOAuth/rest',
            '/ca/rest',
            '/config/rest',
            '/configuration/rest',
            '/darkmail/rest',
            '/darkserver/rest',
            '/darkserverAdmin/rest',
            '/encryptedLog/rest',
            '/systemLog/rest',
            '/systemUsage/rest',
            '/userCircle/rest',
            '/darkMdmServer/rest',
            '/darkBackupServer/rest'
        ],
        // target: 'https://localhost:8345',
        // target: 'https://darkcloud6.darkmatter.ae:7345', // forward RESTful API requests to Google Cloud
        // target: 'https://darkcloud6.darkmatter.ae:10345', // forward RESTful API requests to Google Cloud
        // target: 'https://darkcloud8.darkmatter.ae:7345', // forward RESTful API requests to Google Cloud
        // target: 'https://darkcloud8.darkmatter.ae:10345', // forward RESTful API requests to Google Cloud
        // target: 'https://localhost:7345', // forward RESTful API requests to Google Cloud
        target: 'https://localhost:10345', // forward RESTful API requests to Google Cloud
        // target: 'https://localhost:54345', // forward RESTful API requests to Google Cloud
        // target: 'https://localhost:14345', // forward RESTful API requests to Google Cloud
        // target: 'https://localhost:54345', // forward RESTful API requests to Google Cloud

        // target: 'https://localhost:32290', // for BNR
        secure: false
    }
];

module.exports = PROXY_CONFIG;
