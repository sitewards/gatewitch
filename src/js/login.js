
Gatewitch.screens.Login = function () {

    var node = null;

    function init() {
        node = Gatewitch.getElement('gw-login');
        Gatewitch.getElement('gw-lnk-account').click(function () {
            Gatewitch.screenController.open("account");
        });
    }

    return {
        id : "login",
        init: init,
        node: function () { return node }
    }
}();