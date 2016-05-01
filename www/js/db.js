var db;
var rows;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    db = window.openDatabase("IdiomDB", "1.0", "Funny Idiom Game Database", 1024 * 1024);
    //call method create table when error and when success
    db.transaction(createTable, _error, _success);

}


function createTable(tx) {

    //tx.executeSql('DROP TABLE IF EXISTS tbexpense');
    var sql = "CREATE TABLE IF NOT EXISTS tbidiom (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "player VARCHAR(50)," +
        "result_point VARCHAR(50)" +
        ")";
    tx.executeSql(sql);
}





function _error(tx, error) {
    alert("database Error :" + error);
}

function _success() {
    //alert("create database success...");
}


function insertDB() {

    var _player = $('#player').val();
    var _rerultPoint = $('#resultPoint').val();

    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO tbidiom(player,result_point) VALUES (?,?)', [_player, _rerultPoint], function (tx, results) {
            //alert('insert record success');
            refreshPage();
            $.mobile.pageContainer.pagecontainer("change", "#home");
        }, _error);

    }, _error);

}



function viewRank() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM tbidiom ORDER BY result_point DESC', [], showRank, _error);
    }, _error);
}

function showRank(tx, results) {
    rows = [];
    var len = results.rows.length;
    var listContent = "";
    //เคลียร์เพื่อไม่ให้มันเรียกซ้ำซ้อนกัน
    $('#viewRank').empty();
    for (var i = 0; i < len; i++) {
        var rec = results.rows.item(i);
        listContent += '<li>' + (i + 1) + '.'+ "<b>" + rec.player + "</b>" + '<br>' + " ได้คะแนน " + rec.result_point + ' คะแนน' +
            '</li>';
        rows.push(rec);


    }
    $('#viewRank').append(listContent);
    $('#viewRank').listview().listview("refresh");
    $.mobile.changePage('#rank', {
        transition: "slide"
    });

}