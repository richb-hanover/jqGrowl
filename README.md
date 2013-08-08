## How to install the jqGrowl plugin on your website

_Note: This README is an abbreviated version of the full page at: http://www.learnjquery.org/plugin/jq-growl/_

Download and include plugin resource files shown below to your web page. Place the image files into the plugin directory together with the CSS file.

* jq-growl.js - the jQuery plugin code
* jq-growl.css - the HTML growl message box CSS styles (you can re-style it yourself to make the messages imitate any look you want.)
* jq-g-icon.png - the message icon picture
* jq-g-close.png - the close button

### Add the plugin to your page

To add the plugin to your page, include these CSS and Javascript files (you will also need jQuery added to your project):

    <script src='jquery.js'   type='text/javascript'></script>
    <script src='jq-growl.js' type='text/javascript'></script>
    <link   rel='stylesheet'  type='text/css' href = 'jq-growl.css' />
    
You must also add a _div_ with id of jqGrowlContainer, and a _ul_ of id jq-growl-clone to the HTML of the page. 

    <!-- Growl HTML Begin //-->
    <div id = "jqGrowlContainer"></div>
    <!-- Blueprint CSS, used to clone messages, always hidden //-->
    <ul id = "jq-growl-clone"><ul><li class = "title"></li><li class = "msg"></li><li class = "icon"></li><li class = "close"></li></ul></ul>
    <!-- Growl HTML End //-->

### Initializing jqGrowl

Once the items above are added you are ready to start using it. First you need to initialize it. 
This is usually done on the document/ready event once all DOM elements have finished downloading:

    <script type = "text/javascript">
    $(document).ready(function()
    {
        // Initialize the plugin and define queue location on the screen
        $.jqGrowl.init( {
            position: 'absolute',
              bottom: '8px',
               right: '8px'
        }, 5000);
    });
    </script>
    
The plugin is now initialized.

### How to add jqGrowl messages to the queue

Use the _msg_ method to add a message to the queue.

    $.jqGrowl.msg('This message was generated using jqGrowl, a jQuery plugin. This message can be customized to appear in any of the four screen corners.', 'Notification Message');

Note: This plugin is still in beta. It has been tested with jQuery 1.10.2 and 2.0.3. 
It may not work correctly in some browsers (probably older versions of IE). 
If you notice something please let me know, and I'll update the code.

