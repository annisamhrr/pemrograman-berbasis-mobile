const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Tampilkan semua buku
app.get('/', (req, res) => {
  db.query('SELECT * FROM buku', (err, results) => {
    if (err) throw err;
    res.render('index', { data: results });
  });
});

// Form tambah buku
app.get('/add', (req, res) => {
  res.render('form', { buku: {}, action: '/add' });
});

app.post('/add', (req, res) => {
  const { judul, penulis, genre, sinopsis } = req.body;
  db.query('INSERT INTO buku (judul, penulis, genre, sinopsis) VALUES (?, ?, ?, ?)',
    [judul, penulis, genre, sinopsis], (err) => {
      if (err) throw err;
      res.redirect('/');
    });
});

// Form edit buku
app.get('/edit/:id', (req, res) => {
  db.query('SELECT * FROM buku WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.render('form', { buku: results[0], action: '/edit/' + req.params.id });
  });
});

app.post('/edit/:id', (req, res) => {
  const { judul, penulis, genre, sinopsis } = req.body;
  db.query('UPDATE buku SET judul=?, penulis=?, genre=?, sinopsis=? WHERE id=?',
    [judul, penulis, genre, sinopsis, req.params.id], (err) => {
      if (err) throw err;
      res.redirect('/');
    });
});

// Hapus buku
app.get('/delete/:id', (req, res) => {
  db.query('DELETE FROM buku WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
