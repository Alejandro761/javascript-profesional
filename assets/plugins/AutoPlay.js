function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    if (!player.mute){
        player.muted = true;
    }

    player.play();
};

export default AutoPlay;