
var Gatewitch = function () {

    var gwWindow = null;

    function centerWindow() {
        var width = gwWindow.width();
        var winWidth = $(window).width();
        var targetLeft = (winWidth - width) / 2;
        var offset = gwWindow.offset();
        if (offset.left != targetLeft) {
            offset.left = targetLeft;
            gwWindow.offset(offset);
        }
    }

    // constructor
    $(document).ready( function () {
        gwWindow = $('#gw-window');
        gwWindow.corners('10px');
        Gatewitch.screenController.init();
        Gatewitch.screenController.open("login");
        centerWindow();
        setInterval(centerWindow, 1000);
    });

    function getElement(id) {
        return $('#gw-window #' + id);
    }

    return {
        screens : {},
        getElement : getElement
    }
}();