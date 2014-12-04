var _ = require('lodash');

module.exports = {
    
    DEBUG: 10,
    INFO: 20,
    WARN: 30,
    ERROR: 40,

    _shouldLog: function(level) {
        if(Memory.settings === undefined)
            return true;
        if(Memory.settings.log_level === undefined) {
            Memory.settings.log_level = this.INFO;
        }
        return Memory.settings.log_level <= level;
    },

    _log: function(msg) {
        console.log('[' + Game.time + '/' + _.now() + '] ' + msg);
    },

    log: function(msg) {
        // always log
        this._log('LOG   - ' + msg);
    },

    debug: function(msg) {
        if(this._shouldLog(this.DEBUG))
            this._log('DEBUG - ' + msg);
    },

    info: function(msg) {
        if(this._shouldLog(this.INFO))
            this._log('INFO  - ' + msg);
    },

    warn: function(msg) {
        if(this._shouldLog(this.WARN))
            this._log('WARN  - ' + msg);
    },

    error: function(msg) {
        if(this._shouldLog(this.ERROR))
            this._log('ERROR - ' + msg);
    }

}
