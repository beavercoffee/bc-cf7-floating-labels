<?php
/*
Author: Beaver Coffee
Author URI: https://beaver.coffee
Description: Add floating labels to Contact Form 7 fields.
Domain Path:
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Network: true
Plugin Name: BC CF7 Floating Labels
Plugin URI: https://github.com/beavercoffee/bc-cf7-floating-labels
Requires at least: 5.7
Requires PHP: 5.6
Text Domain: bc-cf7-floating-labels
Version: 1.7.19
*/

if(defined('ABSPATH')){
    require_once(plugin_dir_path(__FILE__) . 'classes/class-bc-cf7-floating-labels.php');
    BC_CF7_Floating_Labels::get_instance(__FILE__);
}
