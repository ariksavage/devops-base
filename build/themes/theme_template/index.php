<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="https://gmpg.org/xfn/11" />
  <?php wp_head(); ?>
</head>
<?php get_header(); ?>

  <section id="primary" class="content-area">
    <main id="main" class="site-main">

    <?php
    if ( have_posts() ) {

      // Load posts loop.
      while ( have_posts() ) {
        the_post();
        the_content();
      }

    } else {
      echo "No posts found";
    }
    ?>
    </main><!-- .site-main -->
  </section><!-- .content-area -->

<?php get_footer();
