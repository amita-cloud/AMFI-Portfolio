const http = require('http');

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AMFI Portfolio</title>
    <style>
      body {
        font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        max-width: 48rem;
        margin: 4rem auto;
        line-height: 1.6;
        padding: 0 1rem;
      }
      .card {
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 1.25rem;
      }
      code {
        background: #f5f5f5;
        padding: 0.1rem 0.35rem;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>AMFI Portfolio</h1>
      <p>Your app is running successfully.</p>
      <p>Health check: <code>/health</code></p>
    </div>
  </body>
</html>`);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
