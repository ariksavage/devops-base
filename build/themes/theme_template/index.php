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
<?php get_template_part( 'head', 'head' ); ?>
<body class="theme-name-theme index">
  <?php get_header(); ?>
  <main id="main" class="site-main">
    <?php
    if ( have_posts() ) {
      while ( have_posts() ) {
        the_post();
        the_content();
      }
    } else {
      echo "No posts found";
    }
    ?>
  </main><!-- .site-main -->
  <?php get_footer();
