
Gatewitch.screenController = function () {

    var idMap = {
        "login" : "gw-login",
        "account": "gw-account"
    }

    function open(id) {
        for each (var screen in Gatewitch.screens) {
            if (screen.id != id) {
                screen.node().hide();
            } else {
                screen.node().fadeIn();
            }
        }
    }

    function init() {
        for each (var screen in Gatewitch.screens) {
            screen.init();
        }
    }

    return {
        open: open,
        init: init
    }
}();