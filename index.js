// index.js

const express = require('express');
const app = express();

// تفعيل CORS لتمكين منصة freeCodeCamp من فحص الـ API
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// تقديم الملفات الثابتة (CSS, JS)
app.use(express.static('public'));

// الصفحة الرئيسية
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Endpoint المطلوبة: /api/whoami
app.get('/api/whoami', function (req, res) {
  res.json({
    ipaddress: req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// تشغيل السيرفر
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});