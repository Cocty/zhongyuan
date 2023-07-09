const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 创建与MySQL数据库的连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'zhongyuan'
});

// 连接到MySQL数据库
connection.connect();

app.use(bodyParser.json()); // 解析 Content-Type 为 "application/json" 的请求体
app.use(bodyParser.urlencoded({ extended: true })); // 解析 Content-Type 为 "application/x-www-form-urlencoded" 的请求体

// 处理POST请求，将表单数据插入数据库
app.post('/api/submitForm', (req, res) => {
  const formData = req.body;
  console.log(req.body); // 输出接收到的请求体内容
  const donorData = {
    name: formData.name,
    email: formData.email,
    place: formData.place,
    idcard_num: formData.id_number,
    sex: formData.sex,
    job: formData.job
  };

  const donateData = {
    donate_time: new Date(),
    donor_name: formData.name,
    money: formData.money
  };

  const cardData = {
    donor_id: null,
    type: formData.card_type,
    number: formData.id_number,
  };

  // 先插入捐赠者信息到 donor 表中
  connection.query('INSERT INTO donor SET ?', donorData, (error, results) => {
    if (error) throw error;

    // 获取插入捐赠者的自增ID
    const donorId = results.insertId;

    // 更新捐赠表的 donorid 字段
    donateData.donorid = donorId;

    // 插入捐赠信息到 donate 表中
    connection.query('INSERT INTO donate SET ?', donateData, (error, results) => {
      if (error) throw error;

      // 更新 card 表的 donor_id 字段
      cardData.donor_id = donorId;

      // 插入 card 信息到 card 表中
      connection.query('INSERT INTO card SET ?', cardData, (error, results) => {
        if (error) throw error;

        // 插入成功
        res.send('表单数据成功插入到数据库中！');
      });
    });
  });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器正在监听端口 ${port}`);
  });
