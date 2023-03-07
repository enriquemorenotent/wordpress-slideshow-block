<?php
/**
 * Plugin Name:       EMT Slideshow
 * Description:       This is a slideshow
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            Enrique Moreno Tent
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       emt-slideshow
 *
 * @package           emt
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function emt_slideshow_block_init()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'emt_slideshow_block_init');
