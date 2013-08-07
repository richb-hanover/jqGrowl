msg_ctr = 0;
$.jqGrowl = {

    /* 3 seconds default timeout */
    timeout: 3000,

    /* initialize the plugin */
    init: function(corner, timeout) {
        $("#jqGrowlContainer").css(corner);
    },

    /* add a message */
    msg: function(message, title) {
        
        // Store objects for reuse
        var container = $("#jqGrowlContainer");
        var clone = $("#jq-growl-clone");    
        var tag = "#jqmg" + msg_ctr;
        
        // Fade out after a period of time (3 sec. default)
        setTimeout(function() { $(tag).fadeOut(2000); }, $.jqGrowl.timeout);
        
        $("ul", clone).attr("id", "jqmg" + msg_ctr);
        $("li.title", clone).text(title);
        $("li.msg", clone).text(message);
                
        // Append this message to the queue
        container.append(clone.html());
        
        // Attach close button event
        $(tag + " li.close").on("click", function() { $(tag).fadeOut(300); });  
        
        msg_ctr++;
    },

    /* clear all messages */
    clear: function()
    {
        $("#jqGrowlContainer").html("");
    }
};

$(document).ready(function() {
    $.jqGrowl.init( { position: 'absolute', bottom: '8px', right: '8px' }, 5000);
});