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

        con.query('UPDATE scrum SET s_name = ?, state= ? WHERE s_num = ?', [event.s_name, event.state, event.s_num], function (err, result) {
            if (err) {
                callback(err);
            } else {
                console.log("update " + event.s_name + " " + event.state + " " + event.s_num);

                callback(null, "update done");
            }
            con.end();
        });
    });
};