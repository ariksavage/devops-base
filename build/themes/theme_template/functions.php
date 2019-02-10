<?php
/**
* Theme functions and definitions
*
* @link https://developer.wordpress.org/themes/basics/theme-functions/
*
**/

/**
 * Proper way to enqueue scripts and styles
 */
function theme_name_scripts() {
    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
    wp_enqueue_script( 'theme-scripts', get_template_directory_uri() . '/js/theme.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
