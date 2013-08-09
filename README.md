## How to install the jqGrowl plugin on your website

_Note: This README is an abbreviated version describing Greg Sidelnikov's jqGrowl. Read the full page at: http://www.learnjquery.org/plugin/jq-growl/_

Download and include plugin resource files shown below to your web page. Place the image files into the plugin directory together with the CSS file.

* jqgrowl.js - the jQuery plugin code
* jqgrowl.css - the HTML growl message box CSS styles (you can re-style it yourself to make the messages imitate any look you want.)
* jqgrowl-icon.png - the message icon picture
* jqgrowl-close.png - the close button's icon

### Add the plugin to your page

To add the plugin to your page, include these CSS and Javascript files (you will also need jQuery added to your project):

    <script  src='jqgrowl.js'  type='text/javascript'></script>
    <link   href='jqgrowl.css' type='text/css' rel='stylesheet' />
    
### Initializing jqGrowl

The plugin (jgrowl.js) sets the default location (lower right) and timeout (3 seconds).
You may call the _init_ method to change these parameters. Here are the default setting:

    $.jqGrowl.init( { position: 'absolute', bottom: '8px', right: '8px' }, 3000);

You may also change the timeout by setting the value directly:

    $.jqGrowl.timeout = 4000;

### How to add jqGrowl messages to the queue

Use the _msg_ method to add a message to the queue.

    $.jqGrowl.msg('This message was generated using jqGrowl, a jQuery plugin. This message can be customized to appear in any of the four screen corners.', 'Notification Message');

Note: This plugin is still in beta. It has been tested with jQuery 1.10.2 and 2.0.3. 
It may not work correctly in some browsers (probably older versions of IE). 
If you notice something please let me know, and I'll update the code.

