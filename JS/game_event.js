// j = 0;

function nextDialog() {
    i = 0;
    spk.innerHTML='';
    dlg.innerHTML='';
    
   
    // ++j;
    // if(j==1){
    //     nextDialog();
    // }else if(j==2){
    //     spk.innerHTML = speaker_data[-2];
    //     dlg.innerHTML = dialog_data[-2];
    // }else{
    //     j=0;
    // }

    dialog_id++;
    f++;

    if(speaker_data[dialog_id]!=undefined || dialog_data[dialog_id]!=undefined){
        show();pic();background();
    }else{
        nextScene();
    }

}
 
function lastDialog(){
    spk.innerHTML='';
    dlg.innerHTML='';
    dialog_id--;
    f--;

    if(dialog_id>=0){
        show();pic();
    }else{
        window.history.go(-1);
    }   
}

function judge(){
    var jud=performance.getEntriesByType("navigation")[0].type;
    if(jud=="back_forward"){
        dialog_id=speaker_data.length-1;
        f=speaker_data.length-1;
    }
    else{
        dialog_id=0,f=0;
    }
    show();pic();background();
}

i = 0;

function show() {
    spk.innerHTML=speaker_data[dialog_id];
    dlg.innerHTML = dialog_data[dialog_id].substr(0, i);
    i++;
    if(i<=dialog_data[dialog_id].length){
        setTimeout("show()", 50);
    }
}

function go_mainMenu(){
    location.assign("../index.html");
}


function pic(){
    var p=picture_order[dialog_id]
    $("#A").css("opacity","0");
    $("#B").css("opacity","0");
    $("#C").css("opacity","0");
    $("#D").css("opacity","0");
    $("#E").css("opacity","0");
    $("#F").css("opacity","0");
    // console.log(p,speaker_data[dialog_id]);
    switch(p){
        case "Gillian":$("#A").css("opacity","1");
                break;
        case "（客服）":$("#B").css("opacity","1");
                break;
        case "客服电话动图":$("#C").css("opacity","1");
                break;
        case "Jill":$("#D").css("opacity","1");
                break;
        case "Max":$("#E").css("opacity","1");
                break;   
        case "客服":$("#F").css("opacity","1");
                break;    
    }
}
function background(){
    var f=background_order[dialog_id]
    $("#a").css("opacity","0");
    $("#b").css("opacity","0");
    $("#c").css("opacity","0");
    $("#d").css("opacity","0");
    $("#e").css("opacity","0");
    $("#f").css("opacity","0");
    // console.log(p,speaker_data[dialog_id]);
    switch(f){
        case "家":$("#a").css("opacity","1");
                break;
        case "日出":$("#b").css("opacity","1");
                break;
        case "Rachael":$("#c").css("opacity","1");
                break;
        case "scene":$("#d").css("opacity","1");
                break;
        case "gamebar":$("#e").css("opacity","1");
                break;
        case "Rachael0":$("#f").css("opacity","1");
                break;
    }

}
