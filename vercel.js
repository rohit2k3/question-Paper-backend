{
    "version": 2,
    "name": "paperAnswer",
    "builds": [
      { "src": "server.js", "use": "@vercel/node" }
    ],
    "routes": [
      { "src": "/(.*)", "dest": "/server.js" }
    ]
  }
