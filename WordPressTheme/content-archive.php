<!-- ニュース記事 -->
<li class="p-newsBlock__item">
  <div class="p-newsBlock__header">
    <time class="p-newsBlock__date"><?php the_time('Y.m.d'); ?></time>
    <div class="p-newsBlock__category"><?php the_category(); ?></div>
  </div>
  <div class="p-newsBlock__titleblock">
    <a href="<?php the_permalink(); ?>">
      <h3 class="p-newsblock__title"><?php the_title(); ?></h3>
    </a>
  </div>
</li>