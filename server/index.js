
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8000;

// 创建MySQL数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.my_sql_password,
  database: 'login_db'
});

// 连接到MySQL数据库
db.connect((err) => {
  if (err) {
    console.error('无法连接到数据库:', err);
    return;
  }
  console.log('已成功连接到数据库');

  // 获取当前数据库的表的所有数据
  db.query('SHOW TABLES', (err, results) => {
    if (err) {
      console.error('获取表数据错误:', err);
      return;
    }
    
    // 解析结果并输出表名
    const tables = results.map(row => row[`Tables_in_${db.config.database}`]);
    console.log('数据库表名:', tables);
    
    // // 关闭数据库连接
    // db.end((err) => {
    //   if (err) {
    //     console.error('关闭数据库连接错误:', err);
    //     return;
    //   }
    //   console.log('数据库连接已关闭');
    // });
  });
});

// 调用插入数据函数
const userData = {
  username: 'user1',
  password: 'passworduser1',
  walletAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  walletPublicKey: '0x8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5',
  walletPrivateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
};

const factoryAccount = {
  username: 'factory',
  password: 'factoryPassword',
  walletAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  walletPublicKey: '0x8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5',
  walletPrivateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
};

const supplierAccount = {
  username: 'supplier',
  password: 'supplierPassword',
  walletAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  walletPublicKey: '0xba5734d8f7091719471e7f7ed6b9df170dc70cc661ca05e688601ad984f068b0d67351e5f06073092499336ab0839ef8a521afd334e53807205fa2f08eec74f4',
  walletPrivateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'
};

const userAccount = {
  username: 'user',
  password: 'userPassword',
  walletAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  walletPublicKey: '0x9d9031e97dd78ff8c15aa86939de9b1e791066a0224e331bc962a2099a7b1f0464b8bbafe1535f2301c72c2cb3535b172da30b02686ab0393d348614f157fbdb',
  walletPrivateKey: '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
};

// 向 users 表插入数据的函数
const insertUser = (userData) => {
  const { username, password, walletAddress, walletPublicKey, walletPrivateKey } = userData;

  // 检查是否已存在相同的 username 或 wallet_public_key
  const checkQuery = 'SELECT COUNT(*) AS count FROM users WHERE username = ? OR wallet_public_key = ?';
  const checkValues = [username, walletPublicKey];

  db.query(checkQuery, checkValues, (checkErr, checkResults) => {
    if (checkErr) {
      console.error('查询数据错误:', checkErr);
      return;
    }

    const count = checkResults[0].count;

    if (count > 0) {
      console.log('用户名或钱包公钥已存在');
      return;
    }

    // 执行插入操作
    const insertQuery = `INSERT INTO users (username, password, wallet_address, wallet_public_key, wallet_private_key) VALUES (?, ?, ?, ?, ?)`;
    const insertValues = [username, password, walletAddress, walletPublicKey, walletPrivateKey];

    db.query(insertQuery, insertValues, (insertErr, insertResults) => {
      if (insertErr) {
        console.error('插入数据错误:', insertErr);
        return;
      }
      console.log('成功插入数据');
    });
  });
};
insertUser(factoryAccount);
insertUser(supplierAccount);
insertUser(userAccount);

const queryAllInfo = () => {
  // 查询 users 表中的所有数据
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('查询数据错误:', err);
      return;
    }

    console.log('users 表中的所有数据:');
    console.log(results);
  });
}; 

// 调用查询函数
queryAllInfo();

const ethUtil = require('ethereumjs-util');
// 获取公钥函数
const getPublicKey = (privateKey) => {
  const privateKeyBuffer = ethUtil.toBuffer(privateKey);

  // 通过私钥推导出公钥
  const publicKeyBuffer = ethUtil.privateToPublic(privateKeyBuffer);
  const publicKey = ethUtil.bufferToHex(publicKeyBuffer);

  return publicKey;
};
// // 调用获取公钥函数
// const privateKey = '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'; // 替换为实际的私钥
// const publicKey = getPublicKey(privateKey);

// console.log('公钥:', publicKey);

// 设置 express-session 中间件
app.use(session({
  secret: 'your-secret-key', // 用于签署会话ID的密钥，可以是任意字符串
  resave: false,
  saveUninitialized: true
}));

app.use(cors({
  origin: 'http://localhost:3000',  // 设置允许访问的前端域名和端口号
  credentials: true  // 允许携带凭证（会话 cookie）
}));

// // 解析请求体中的 JSON 数据
app.use(express.json());

// 创建登录验证接口
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 在数据库中查询用户名和密码是否匹配
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('数据库查询错误:', err);
      res.status(500).send('数据库查询错误');
      return;
    }

    if (results.length > 0) {
      // 设置用户登录状态为已登录
      req.session.isLoggedIn = true;
      req.session.username = username;
      res.status(200).send('登录成功');
    } else {
      res.status(401).send('用户名或密码不正确');
    }
  });
});

// 路由处理用户退出登录请求
app.post('/logout', (req, res) => {
  // 清除会话中的登录信息
  req.session.isLoggedIn = false;
  req.session.username = "";
  
  res.status(200).send('Logout successful');
});

app.get('/check-login-status', (req, res) => {
  const { username, password } = req.body;
  if (req.session.isLoggedIn) {
    // 用户已登录
    const response = {
      isLoggedIn: true,
      username: req.session.username
    };
    res.status(200).json(response);
  } else {
    // 用户未登录
    const response = {
      isLoggedIn: false
    };
    res.status(401).json(response);
  }
});

// 路由处理获取用户钱包地址和私钥请求
app.get('/user-wallet/:username', (req, res) => {
  const { username } = req.params;


  // 在数据库中查询用户的地址和私钥
  const query = `SELECT wallet_address, wallet_private_key FROM users WHERE username = ?`;
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('数据库查询错误:', err);
      res.status(500).send('数据库查询错误');
      return;
    }

    if (results.length > 0) {
      const walletAddress = results[0].wallet_address;
      const walletPrivateKey = results[0].wallet_private_key;
      res.json({ walletAddress, walletPrivateKey });
    } else {
      res.status(404).send('未找到用户');
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器已启动在端口 ${port}`);
});

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '52XiaoyuanXun',
//   database : 'login_db'
// });
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });