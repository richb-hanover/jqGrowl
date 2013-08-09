$.jqGrowl = {

    /*
    timeout before the notification fades; initialization code below will set to 3 seconds
    User code can also set this with $.jqGrowl.timeout = xxxx;
    */
    timeout: 0,

    /* count of messages displayed - private */
    msg_ctr: 0,

    /* Instantiate the jqGrowlContainer and the list if they don't exist */
    makeGrowlContainer: function() {
        if ($("#jqgrowlContainer").length == 0)  {       // Is the container instantiated? Make one if not...
            $('body').append('<div id = "jqgrowlContainer"></div>');
            $('body').append('<ul  id = "jqgrowlClone"><ul><li class = "jqgrowl-title"></li><li class = "jqgrowl-msg"></li><li class = "jqgrowl-icon"></li><li class = "jqgrowl-close"></li></ul></ul>');
        }
    },

    /* initialize the plugin */
    init: function(corner, tout) {

        this.makeGrowlContainer();
        $("#jqgrowlContainer").css(corner);
        if (tout) {
            this.timeout = tout
        }
    },

    /* add a message */
    msg: function(message, title) {
        
        this.makeGrowlContainer();                  // instantiate the container & list if necessary
        // Store objects for reuse
        var container = $("#jqgrowlContainer");
        var clone = $("#jqgrowlClone");
        var tag = "#jqgrowlMsg" + this.msg_ctr;
        
        // Fade out after a period of time (3 sec. default)
        setTimeout(function() { $(tag).fadeOut(2000); }, this.timeout);
        
        $("ul", clone).attr("id", "jqgrowlMsg" + this.msg_ctr);
        $("li.jqgrowl-title", clone).text(title);
        $("li.jqgrowl-msg", clone).text(message + "\nTimeout (ms): " + this.timeout);
                
        // Append this message to the queue
        container.append(clone.html());
        
        // Attach close button event
        $(tag + " li.jqgrowl-close").on("click", function() { $(tag).fadeOut(300); });

        this.msg_ctr++;
    },

    /* clear all messages */
    clear: function()
    {
        this.makeGrowlContainer();
        $("#jqgrowlContainer").html("");
    }
};

$(document).ready(function() {
    $.jqGrowl.init( { position: 'absolute', bottom: '8px', right: '8px' }, 3000);
});
