<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/fonts.css">

    <title>Column_task</title>
</head>

<body>
    <?php
    include('nav.php');
    ?>

    <div class="container">
        <h1 class="column__title">Spreading text across columns</h1>
        <div class="column__number">
            <label for="column">Choose the number of columns:</label>
            <select id="column">
                <option value="two" selected>2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
            </select>
        </div>
        <div class="column__gutters">
            <label for="gutters">Choose the gutters between rows and columns:</label>
            <select id="gutters">
                <option value="ten" selected>10</option>
                <option value="twenty">20</option>
                <option value="thirty">30</option>
                <option value="fourty">40</option>
                <option value="fifty">50</option>
            </select>
            <span>px</span>
        </div>
        <button class="column__btn sample_btn">Enjoy</button>
        <div class="root">
            <div class="root__el" id="el1">1. На рассвете—без меня
                На кассете — без меня
                Без меня — за дверь,без меня — домой
                Без меня — теперь,без меня — анекдот с бородой навсегда </div>
            <div class="root__el" id="el2">2. И убегает мой мир
                Убегает земля
                Бежит далеко-далеко
                Куда-то далеко-далеко
                И убегает мой мир
                Убегает земля
                Бежит далеко-далеко
                Без оглядки далеко-далеко...</div>
            <div class="root__el" id="el3">Корка хлеба без меня
                Пальцем в небо — без меня
                Без меня — апрель,без меня — январь
                Без меня — капель,без меня — отрывной календарь на стене</div>
            <div class="root__el" id="el4">4. И убегает мой мир
                Убегает земля
                Бежит далеко-далеко
                Куда-то далеко-далеко
                И убегает мой мир
                Убегает земля
                Бежит далеко-далеко
                Навек далеко-далеко....</div>
            <div class="root__el" id="el5">5. Добрый ослик без меня
                Горький дождик без меня
                Без меня — сирень,без меня — герань
                Без меня моя тень,без меня — поздравления оттуда сюда</div>
            <div class="root__el" id="el6">6. И убегает весь мир...

                И убегает мой мир.</div>
        </div>
    </div>
    <footer id="footer">
        <?php
        include('footer.php');
        ?>
    </footer>

    <script src="column.js"></script>
</body>

</html>