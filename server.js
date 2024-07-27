const express = require('express');
const { ytdown, tikdown, twitterdown, GDLink, capcut } = require("api-roffineru4k");
const path = require('path');
const app = express();
const port = 80;

// Home route
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>RoffiNeru4K - Public Api!</title>
  <meta name="description" content="With our global CDN, upload your files anywhere with exceptional speed and reliability.">
  <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.nekohime.xyz/images/favicon.ico">
  <link rel="stylesheet" href="https://cdn.nekohime.xyz/assets/css/style.min.css">
  <link rel="stylesheet" href="https://cdn.nekohime.xyz/assets/css/prims.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    @keyframes rgbAnimation {
      0% { color: red; }
      33% { color: green; }
      66% { color: blue; }
      100% { color: red; }
    }
    .history li a {
      animation: rgbAnimation 1.2s linear infinite;
      transition: color 0.8s ease-in-out;
    }
    .draggable {
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 20px;
      cursor: move;
    }
    #content1 {
      background-color: #CAC9C7;
      padding: 20px;
      border-radius: 10px;
      max-width: 100%;
      overflow: auto;
    }
    #response1 {
      color: #000000;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Website to try & use Api for free.</h1>
      <p>Made With </p>
    </div>

    <div class="preview" id="preview"></div>

    <div class="history">
      <h2>List Api:</h2>
      <ul>
        <li><a href="/api/ytdown?url=[your-url]">ytmp4</a></li>
        <li><a href="/api/ytdown?url=[your-url]">ytmp3</a></li>
        <li><a href="/api/twitter?url=[your-url]">Twitter</a></li>
        <li><a href="/api/gdlink?url=[your-url]">Google Drive</a></li>
        <li><a href="/api/tiktok?url=[your-url]">Tiktok</a></li>
        <li><a href="/api/capcut?url=[your-url]">Capcut</a></li>
      </ul>
      <hr>
    </div>
  </div>

  <div class="go-container">
    <a href="https://ungu.in/ChennelRoffiNeru4K" class="go-button github">Chennel</a>
    <a href="https://telegra.ph/file/6f5989813774fba1671ec.jpg" class="go-button donation">Donation</a>
  </div>

  <div class="container">
    <div class="draggable" draggable="true">
      <h2>Penggunaan </h2>
      <div id="content1">
        <pre id="response1">const axios = require('axios');

axios.get('url-api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Ada kesalahan:', error);
  });</pre>
        <div class="drop-area"></div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <p>Developed by RoffiNeru4K 2020 - <span id="currentYear">2024</span></p>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const draggables = document.querySelectorAll('.draggable');
      const containers = document.querySelectorAll('.container');

      draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging');
        });
      });

      containers.forEach(container => {
        container.addEventListener('dragover', e => {
          e.preventDefault();
          const afterElement = getDragAfterElement(container, e.clientY);
          const draggable = document.querySelector('.dragging');
          if (afterElement == null) {
            container.appendChild(draggable);
          } else {
            container.insertBefore(draggable, afterElement);
          }
        });
      });

      function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
      }
    });
  </script>
</body>
</html>`);
});

// API route for /api/tiktok
app.get('/api/tiktok', (req, res) => {
  const url = req.query.url;
  if (url === "[your-url]") {
    const dataDummy = {
      "creator": "RoffiNeru4K",
      "community": "https://ungu.in/ChennelRoffiNeru4K",
      "status": true,
      "data": {
        "author": {
          "id": "7091238689779237889",
          "unique_id": "roffineru",
          "nickname": "RoffiNeru",
          "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/23c12927706bd51d441934d2bdf02c9b~c5_300x300.jpeg?lk3s=45126217&nonce=7953&refresh_token=a1a3ff01bcf8a03ff94ebd204741d09c&x-expires=1722178800&x-signature=KC7stPeWfIiqaeAc4HV6VL8oA40%3D&shp=45126217&shcp=-"
        },
        "view": 8706,
        "comment": 241,
        "play": 146913,
        "share": 105,
        "download": 131,
        "duration": 18,
        "title": "Rasanya yesek pasti kakak sendiri di bunuh sama temen yang lagi mereka cari || #anime #kumodesugananika #indonesia #foryou #xyzbca #isekai #fyp #fyp #bstation ",
        "video": "https://v16m-default.akamaized.net/6376a737592864314ada5ef4fa76af9d/66a56428/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/o4PqBnnWoAPl8lgCtDSDfeQE3QkVQg8aj9BCMb/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1962&bt=981&cs=0&ds=6&ft=XE5bCqT0majPD12hGqu73wUOx5EcMeF~O5&mime_type=video_mp4&qs=0&rc=O2hmZzdpNzloNDRnPDw7N0BpM2x0amU6ZjxkaDMzZjgzM0A0MS4vXzUzNV4xX19fLjJhYSNncjFjcjRfNWNgLS1kL2Nzcw%3D%3D&vvpl=1&l=20240727151813F6FB04EE69BD354E79CF&btag=e00088000",
        "audio": "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7178355665960815386.mp3"
      }
    };
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Tiktok Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(dataDummy, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
  } else {
    tikdown(url).then(data => {
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Tiktok Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(data, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  }
});

// API route for /api/ytdown
app.get('/api/ytdown', (req, res) => {
  const url = req.query.url;
  if (url === "[your-url]") {
    const dataDummy = {
  "creator": "RoffiNeru4K",
  "community": "https://ungu.in/ChennelRoffiNeru4K",
  "status": true,
  "data": {
    "title": "Mc got rejected because he was fat |Goblin's night #manhwa #shorts  #manhwareccomendation",
    "video": "https://rr3---sn-4g5ednsd.googlevideo.com/videoplayback?expire=1722119082&ei=Sh-lZqnkLofBhcIP75K_6A4&ip=2a01%3A4f8%3A1c1c%3A15cc%3A9237%3A354a%3A59c%3A63c7&id=o-AJfCdHSPkou1vOcr5KUpfXFtiH8vUENeP1zZ2mhMusGt&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=B3&mm=31%2C26&mn=sn-4g5ednsd%2Csn-f5f7knee&ms=au%2Conr&mv=m&mvi=3&pl=47&ctier=SH&initcwndbps=575000&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=2611184&ratebypass=yes&dur=18.794&lmt=1713691189209031&mt=1722097035&fvip=1&c=ANDROID_TESTSUITE&txp=6300224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAIWjCEa6ijT1CVXLRRphtHI0GhMNO2Rj8byRR2imJNODAiEAgGynXhHkUgm1PCuLNivVKzwuH5aQIrnDMhuBy6Kiwv8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAKORzKTVBGytxfY8TCTu3BryJXM8C-afNMzmeK2V_JV5AiEAz4NJc5-El1D_j6P9N5Z5k5KT6FOLy4k0gke4o9I7OsM%3D",
    "video_hd": "https://rr3---sn-4g5ednsd.googlevideo.com/videoplayback?expire=1722119082&ei=Sh-lZqnkLofBhcIP75K_6A4&ip=2a01%3A4f8%3A1c1c%3A15cc%3A9237%3A354a%3A59c%3A63c7&id=o-AJfCdHSPkou1vOcr5KUpfXFtiH8vUENeP1zZ2mhMusGt&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=B3&mm=31%2C26&mn=sn-4g5ednsd%2Csn-f5f7knee&ms=au%2Conr&mv=m&mvi=3&pl=47&ctier=SH&initcwndbps=575000&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=2611184&ratebypass=yes&dur=18.794&lmt=1713691189209031&mt=1722097035&fvip=1&c=ANDROID_TESTSUITE&txp=6300224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAIWjCEa6ijT1CVXLRRphtHI0GhMNO2Rj8byRR2imJNODAiEAgGynXhHkUgm1PCuLNivVKzwuH5aQIrnDMhuBy6Kiwv8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAKORzKTVBGytxfY8TCTu3BryJXM8C-afNMzmeK2V_JV5AiEAz4NJc5-El1D_j6P9N5Z5k5KT6FOLy4k0gke4o9I7OsM%3D",
    "audio": "https://rr3---sn-4g5ednsd.googlevideo.com/videoplayback?expire=1722119082&ei=Sh-lZqnkLofBhcIP75K_6A4&ip=2a01%3A4f8%3A1c1c%3A15cc%3A9237%3A354a%3A59c%3A63c7&id=o-AJfCdHSPkou1vOcr5KUpfXFtiH8vUENeP1zZ2mhMusGt&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=B3&mm=31%2C26&mn=sn-4g5ednsd%2Csn-f5f7knee&ms=au%2Conr&mv=m&mvi=3&pl=47&ctier=SH&initcwndbps=575000&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=299825&dur=18.761&lmt=1713691188083926&mt=1722097035&fvip=1&keepalive=yes&c=ANDROID_TESTSUITE&txp=6308224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgSevZgTX0gG_l00ZxfeXPxnzIVJiI56nFAjaYsfL16b4CIQCWbe8hY5ABinkm-bfyTgRqCN6UGa_YSMgWynyZTVXmvw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAKORzKTVBGytxfY8TCTu3BryJXM8C-afNMzmeK2V_JV5AiEAz4NJc5-El1D_j6P9N5Z5k5KT6FOLy4k0gke4o9I7OsM%3D",
    "quality": "360p",
    "thumbnail": "https://i.ytimg.com/vi/bsJz5lh_OEQ/default.jpg?sqp=-oaymwEmCHgQWvKriqkDHBgA8AEB-AG2CIACxgqKAgwIABABGHAgPChyMA8=&rs=AOn4CLAmgUuy9KIPuJrj3aK9ZPCNd8TxqA",
    "channel": "Abyssal Manhwa",
    "desc": "COPYRIGHT DISCLAIMER:\n\nI donot own the right to the manhwa and audio feature in this video.This video is only created and edited by me for entertainment and review purpose only.\n\nAll right and Credits goes to the original creators and publisher.Before giving copyright claims or strikes please contact me at -dotanewme@gmail.com. I'll remove the video thanks\ncapcut template credit-@FREXS-S \n\n#manhwa \n#manhwaedit \n#manhuarecommendation \n#manhwareccomendations"
  }
}
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - YouTube Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(dataDummy, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
  } else {
    ytdown(url).then(data => {
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - YouTube Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(data, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  }
});

// API route for /api/capcut
app.get('/api/capcut', (req, res) => {
  const url = req.query.url;
  if (url === "[your-url]") {
    const dataDummy = {
  "creator": "RoffiNeru4K",
  "community": "https://ungu.in/ChennelRoffiNeru4K",
  "status": 200,
  "platform": "capcut",
  "data": {
    "title": "CHAMMAK CHALLO",
    "description": "VERSI CEWE#ryzaam #trend#chammakchallo",
    "usage": "6.5K",
    "video": "https://tinyurl.com/2yutg6d5",
    "thumbnail": "https://tinyurl.com/29gdyb7b",
    "authorPic": "https://tinyurl.com/2xw5k7r9"
  }
}
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Capcut Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(dataDummy, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
  } else {
    capcut(url).then(data => {
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Capcut Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(data, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  }
});

// API route for /api/Twitter 
app.get('/api/twitter', (req, res) => {
  const url = req.query.url;
  if (url === "[your-url]") {
    const dataDummy = {
  "creator": "RoffiNeru4K",
  "community": "https://ungu.in/ChennelRoffiNeru4K",
  "status": false
}
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Twitter Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(dataDummy, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
  } else {
    twitterdown(url).then(data => {
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Twitter Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(data, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  }
});

// API route for /api/gdlink
app.get('/api/gdlink', (req, res) => {
  const url = req.query.url;
  if (url === "[your-url]") {
    const dataDummy = {
  "creator": "RoffiNeru4K",
  "community": "https://ungu.in/ChennelRoffiNeru4K",
  "status": true,
  "data": "https://drive.google.com/uc?export=download&id=1M3PP50avjzJL2Pl11WWOVtf2w5Uu1ik6"
}
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Google Drive Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(dataDummy, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
  } else {
    GDLink(url).then(data => {
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoffiNeru4k - Google Drive Downloader</title>
    <style>
        body {
            background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            overflow: hidden; 
        }
        #content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            overflow: auto; 
        }
        #response {
            color: #fff;
            white-space: pre-wrap; 
        }
    </style>
</head>
<body>
    <div id="content">
        <pre id="response"></pre>
    </div>
    <script>
        function main() {
            const responsePre = document.getElementById("response");
            const responseObject = ${JSON.stringify(data, null, 2)};
            responsePre.innerText = JSON.stringify(responseObject, null, 2);
        }
        main();
    </script>
</body>
</html>`);
    }).catch(error => {
      console.error('Error:', error);
      res.status(500).send('An error occurred while processing your request.');
    });
  }
});

app.use((req, res, next) => {
    res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    width: 100%;
    overflow: hidden; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://cdn.donmai.us/original/d7/aa/__eula_genshin_impact_drawn_by_bshi_edayo__d7aaebd87946789037a0ebb6cc59d5a9.jpg');
    background-size: cover;
    background-position: center;
}

.container {
    text-align: center;
    background: rgba(0, 0, 0, 0.3); 
    padding: 20px;
    border-radius: 3%; 
}

h1 {
    font-size: 5em;
    color: white;
}

p {
    font-size: 2em;
    color: white;
}
</style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <p>Not Found</p>
    </div>
</body> 
</html>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
