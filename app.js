const express = require('express');
const { ytdown, tikdown, twitterdown, GDLink, capcut } = require("api-roffineru4k");
const path = require('path');
const app = express();
const cron = require('node-cron');
const port = 80;
const jsonFilePath = './assets/json/server.json';
const fs = require('fs');

// Function to get main HTML content
const mainhtml = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '/assets/json/main.json'), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const config = JSON.parse(data);
        const html = `
          <!-- Your HTML content here -->
        `;
        resolve(html);
      }
    });
  });
};

// Function to read server.json
function readServerJson(callback) {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      callback(err, null);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      callback(parseErr, null);
    }
  });
}

// Function to write to server.json
function writeServerJson(jsonData, callback) {
  fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      callback(err);
    } else {
      callback(null);
    }
  });
}

// Function to handle API requests
function handleRequest(apikey, callback) {
  readServerJson((err, data) => {
    if (err) return callback(err);

    if (!data.key[apikey]) {
      return callback(new Error('Invalid API key'));
    }

    if (data.key[apikey] <= 0) {
      return callback(new Error('API key limit reached'));
    }

    data.key[apikey] -= 1;
    data.request.alltime += 1;
    data.request.today += 1;

    writeServerJson(data, (err) => {
      if (err) return callback(err);
      callback(null, data);
    });
  });
}

// API route for /api/tiktok
app.get('/api/tiktok', (req, res) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  handleRequest(apikey, (err, data) => {
    if (err) {
      console.error('Error:', err.message);
      return res.status(400).send(err.message);
    }

    tikdown(url).then(data => {
      res.json(data);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  });
});

app.get('/api/ytdown', (req, res) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  handleRequest(apikey, (err, data) => {
    if (err) {
      console.error('Error:', err.message);
      return res.status(400).send(err.message);
    }

    ytdown(url).then(data => {
      res.json(data);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  });
});

app.get('/api/capcut', (req, res) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  handleRequest(apikey, (err, data) => {
    if (err) {
      console.error('Error:', err.message);
      return res.status(400).send(err.message);
    }

    capcut(url).then(data => {
      res.json(data);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  });
});

app.get('/api/gdlink', (req, res) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  handleRequest(apikey, (err, data) => {
    if (err) {
      console.error('Error:', err.message);
      return res.status(400).send(err.message);
    }

    GDLink(url).then(data => {
      res.json(data);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  });
});

// Function to reset daily limits
function resetDailyLimits() {
  readServerJson((err, data) => {
    if (err) return;

    data.request.today = 0;
    for (let key in data.key) {
      data.key[key] = 50;
    }

    writeServerJson(data, (err) => {
      if (err) console.error('Error resetting daily limits:', err);
      else console.log('Daily limits reset');
    });
  });
}

cron.schedule('1 0 * * *', resetDailyLimits);

// Home route
app.get('/', (req, res) => {
  mainhtml().then(html => {
    res.send(html);
  }).catch(err => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });
});

// API route for total requests
app.get('/total-request', (req, res) => {
  readServerJson((err, jsonData) => {
    if (err) {
      console.error('Failed to read JSON:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(jsonData);
    }
  });
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'assets', '404.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
