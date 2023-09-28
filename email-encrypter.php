<?php
/**
 * Plugin Name: Email Encrypter
 * Description: Ein Plugin, das E-Mail-Adressen auf der Website findet und mit dem ROT13-Verfahren verschlüsselt.
 * Version: 1.0
 * Author: Marvin Mügge
 */

function enqueue_custom_scripts() {
    wp_enqueue_script('email-encrypter-script', plugins_url('/email-encrypter.js', __FILE__), array('jquery'), null, true);
}

add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
?>
