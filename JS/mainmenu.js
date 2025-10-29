function init() {

}
function start_game() {
    /*init();
    var now_data=new Object();
    //now_data.data_id=-1;
    now_data.data_id=0;
    save_user_data("now_data",JSON.stringify(now_data));*/
    location.assign("./html/game_login.html");
}
function load_game() {
    /*var now_data=JSON.parse(localStorage.getItem("now_data"));
    if(!now_data) now_data=new Object();
    now_data.url=get_now_file();
    now_data.back_ground="url(../img/titlebackground.jpg)";
    localStorage.setItem("now_data",JSON.stringify(now_data));*/
    location.assign("./html/game_login_load.html");
}
function achievement() {
    location.assign("./html/game_login_achievement.html");
}

function about_game() {
    location.assign("./about_game/about_game_homepage.html");
}

function about_us() {
    location.assign("./about_us/intro.html");
}
