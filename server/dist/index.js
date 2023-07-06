const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// 创建MySQL数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// 连接到MySQL数据库
db.connect(err => {
  if (err) {
    console.error('无法连接到数据库:', err);
    return;
  }
  console.log('已成功连接到数据库');
});

// 解析请求体中的 JSON 数据
app.use(express.json());

// 创建登录验证接口
app.post('/login', (req, res) => {
  const {
    username,
    password
  } = req.body;

  // 在数据库中查询用户名和密码是否匹配
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('数据库查询错误:', err);
      res.status(500).send('数据库查询错误');
      return;
    }
    if (results.length > 0) {
      res.status(200).send('登录成功');
    } else {
      res.status(401).send('用户名或密码不正确');
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器已启动在端口 ${port}`);
});