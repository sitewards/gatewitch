
Gatewitch.screens.Account = function () {

    var node = null;
    var button = null;

    function checkAvailability(text) {
        if (text.length == 0) {
            button.attr('disabled', 'disabled');
            return;
        }
        button.removeAttr('disabled');
    }

    function init() {
        node = Gatewitch.getElement('gw-account');
        button = Gatewitch.getElement('gf-account-button');
        button.attr('disabled', 'disabled');
        Gatewitch.getElement('gw-account-name').keyup(function () {
            checkAvailability($(this).val());
        });
    }

    return {
        id : "account",
        init: init,
        node: function () { return node }
    }
}();