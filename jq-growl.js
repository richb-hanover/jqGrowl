$.jqGrowl = {

    /* 3 seconds default timeout */
    timeout: 3000,

    /* count of messages displayed - private */
    msg_ctr: 0,

    /* Instantiate the jqGrowlContainer and the list if they don't exist */
    makeGrowlContainer: function() {
        if ($("#jqGrowlContainer").length == 0)  {       // Is the container instantiated?
            $('body').append('<div id = "jqGrowlContainer"></div>');
            $('body').append('<ul  id = "jq-growl-clone"><ul><li class = "jqgrowl-title"></li><li class = "jqgrowl-msg"></li><li class = "jqgrowl-icon"></li><li class = "jqgrowl-close"></li></ul></ul>');
        }
    },

    /* initialize the plugin */
    init: function(corner, timeout) {

        this.jqGrowl.makeGrowlContainer();
        $("#jqGrowlContainer").css(corner);
        if (!timeout)
        { this.jqGrowl.timeout = timeout }
    },

    /* add a message */
    msg: function(message, title) {
        
        $.jqGrowl.makeGrowlContainer();                  // instantiate the container & list if necessary
        // Store objects for reuse
        var container = $("#jqGrowlContainer");
        var clone = $("#jq-growl-clone");    
        var tag = "#jqmg" + $.jqGrowl.msg_ctr;
        
        // Fade out after a period of time (3 sec. default)
        setTimeout(function() { $(tag).fadeOut(2000); }, $.jqGrowl.timeout);
        
        $("ul", clone).attr("id", "jqmg" + $.jqGrowl.msg_ctr);
        $("li.jqgrowl-title", clone).text(title);
        $("li.jqgrowl-msg", clone).text(message);
                
        // Append this message to the queue
        container.append(clone.html());
        
        // Attach close button event
        $(tag + " li.jqgrowl-close").on("click", function() { $(tag).fadeOut(300); });

        $.jqGrowl.msg_ctr++;
    },

    /* clear all messages */
    clear: function()
    {
        $.jqGrowl.makeGrowlContainer();
        $("#jqGrowlContainer").html("");
    }
};

$(document).ready(function() {
    $.jqGrowl.init( { position: 'absolute', bottom: '8px', right: '8px' }, 5000);
});
