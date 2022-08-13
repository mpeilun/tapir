$(".drum").click(function() {playSound(this.innerHTML);});
$(this).keydown(function(e) {playSound(e.key);});

function playSound(key){
    if(["w","a","s","d","j","k","l"].includes(key)){
        elenemt = $(`.${key}`);
        path = elenemt.css("backgroundImage").split("/images/")[1].replace('.png")', "");
        var audio = new Audio(`sounds/${path}.mp3`);
        audio.play();
        elenemt.addClass("pressed");
        setTimeout(() => {elenemt.removeClass("pressed");}, 10);
    }
} 