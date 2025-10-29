//读取localStorage里的值,形成账户列表
var len = localStorage.length;
var account_arr = new Array()
for (var i = 0; i < len; i++) {
    var key = localStorage.key(i);
    if (key.includes(".load")) {
        continue;
    }
    var value = localStorage.getItem(key);
    account_arr.push({
        username: key,
        password: value,
    })
}

//根据账户列表形成存档列表，暂定24个存档位
/*var load_arr = new Array()
load_arr = [null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null]
var len_account = account_arr.length;
for (var i = 0; i < len_account; i++) {
    username_str = account_arr[i].username;
    loadname_str = username_str + ".load";
    var load = JSON.stringify(load_arr);
    localStorage.setItem(loadname_str, load)
}*/

//形成存档的函数
function make_load(username) {
    let load_arr = new Array()
    load_arr = [null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null]
    //let username = document.getElementById('regUN').value;
    loadname = username + ".load";
    let load = JSON.stringify(load_arr);
    localStorage.setItem(loadname, load)
}

//读取键盘进行跳转 Esc
document.onkeydown = function (e) {
    var x = e.code
    if (x == 'Escape') {
        var url = location.href
        localStorage.setItem("__url.load", url)
        window.location.href = './save_and_load.html'
    }
}

//在登录时读取账户
function currentUser(str) {
    localStorage.setItem("__currentUser.load", str)
}

//存档函数
function save(str, desc) {
    var current_user = localStorage.getItem("__currentUser.load");
    var current_load = current_user + ".load";
    let load_arr = JSON.parse(localStorage.getItem(current_load));
    let load_num = parseInt(str.slice(-2));
    let load_obj = { description: desc, url: localStorage.getItem("__url.load") };
    load_arr[load_num - 1] = load_obj;
    let load = JSON.stringify(load_arr);
    localStorage.setItem(current_load, load)
}

//读档函数
function load(str) {
    var current_user = localStorage.getItem("__currentUser.load");
    var current_load = current_user + ".load";
    let load_arr = JSON.parse(localStorage.getItem(current_load));
    let load_num = parseInt(str.slice(-2));
    window.location.href = load_arr[load_num - 1].url
}

//成就系统部分

//形成成就存档的函数
function make_achievements(username) {
    let achi_arr = new Array()
    achi_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //let username = document.getElementById('regUN').value;
    achiname = username + ".achi";
    let achi = JSON.stringify(achi_arr);
    localStorage.setItem(achiname, achi)
}

//成就函数
//i为成就对应的位置，从零开始。
//在成就对应的场景的<script>里加入这个函数，参数为成就对应的位置。
function makeAchi(i) {
    var current_user = localStorage.getItem("__currentUser.load");
    var current_achi = current_user + ".achi";
    let achi_arr = JSON.parse(localStorage.getItem(current_achi));
    achi_arr[i] = 1;
    let achi = JSON.stringify(achi_arr);
    localStorage.setItem(current_achi, achi);
}
