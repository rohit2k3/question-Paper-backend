{
    "version": 2,
    "name": "paperAnswer",
    "builds": [
      { "src": "app.js", "use": "@vercel/node" }
    ],
    "routes": [
      { "src": "/(.*)", "dest": "/server.js" }
    ]
  }
