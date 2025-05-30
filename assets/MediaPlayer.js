function MediaPlayer (config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.play(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },

        set muted(value) {
            this.media.muted = value;
        }
    };

    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function() {
    if(this.media.paused){
        this.media.play();
    } else {
        this.media.pause();
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.unmuted = false;
}

export default MediaPlayer;