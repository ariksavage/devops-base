<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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
      /* Start the Loop */
      while ( have_posts() ) :
        the_post();
        the_content();
        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) {
          comments_template();
        }
      endwhile; // End of the loop.
    ?>
    </main><!-- .site-main -->
  </section><!-- .content-area -->

<?php get_footer();
