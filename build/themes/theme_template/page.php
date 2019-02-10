<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 */
?>
<?php get_template_part( 'head', 'head' ); ?>
<body class="theme-name-theme template-page">
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
  </main>
  <?php get_footer();
