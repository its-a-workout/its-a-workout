const db = require('./config/database');
const express = require("./config/express");
const app = express();

// db.execute('SELECT * FROM user')
//     .then(result => {
//         console.log(result[0], result[1]);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// sequelize
//     // .sync({ force: true }) //강제로 덮어쓰도록
//     .sync()
//     .then((result) => {
//         return User.findByPk(1); //유저가 있다면
//         //console.log(result);
//     })
//     .then((user) => {
//         if (!user) {
//             return User.create({ name: "Max", email: "test@test.com" });
//         }
//         return user; //즉시 사용자를 확인하는 promise
//     })
//     .then((user) => {
//         // console.log(user);
//         return user.createCart();
//     })
//     .then((cart) => {
//         app.listen(3000); // 서버 수신
//     })
//     .catch((err) => {
//         console.log(err);
//     }); //

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));