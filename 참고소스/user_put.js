exports.handler = (event, context, callback) => {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "cloudfunding.cmavyiefeafb.ap-northeast-2.rds.amazonaws.com",
        user: "han",
        password: "han12345",
        database: "cloudfunding"
    });

    con.connect(function (err) {
        if (err) {
            callback(err);
        }

        con.query('UPDATE user SET cash = ? where id = ? ', [event.cash, event.id], function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(null, event.id + "의 캐쉬가 " + event.cash + "로 변경되었습니다.");
            }
            con.end();
        });
    });
};