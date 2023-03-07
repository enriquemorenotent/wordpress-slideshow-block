<?php $slides = $attributes['slides'] ?? []; ?>
<div <?= get_block_wrapper_attributes() ?>>

    <?php if (!empty($slides)): ?>
        <div class="slideshow">
            <button class="arrow arrow-previous">Previous</button>
            <button class="arrow arrow-next">Next</button>

            <?php foreach ($slides as $index => $slide): ?>


                <?php $title = $slide['title']; ?>
                <?php $content = $slide['content']; ?>
                <?php $image = $slide['image'] ?? []; ?>
                <?php $url = $image['url'] ?? ''; ?>
                <?php $alt = $image['alt'] ?? ''; ?>

                <div class="slide <?= $index === 0 ? 'active' : '' ?>">
                    <div class="left-side">
                        <div class="content">
                            <h4 class="slide-title"><?= $index ?> <?= $title ?></h4>
                            <div class="slide-content"><?= $content ?></div>
                        </div>
                    </div>
                    <div class="right-side">
                        <img class="slide__image" src="<?= $url ?>" alt="<?= $alt ?>">
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>
