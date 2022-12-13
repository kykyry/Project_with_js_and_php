<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/fonts.css">

    <title>my_study_project</title>
</head>

<body>
    <?php
    include('nav.php');
    ?>

    <div class="gradient container">
        <h1 class="gradient__title">Generate a random gradient background color</h1>
        <h2 class="gradient__info">Background: #fff</h2>
        <div class="gradient__type">
            <label for="type">Choose gradient type:</label>
            <select id="type">
                <option value="linear" selected>linear</option>
                <option value="conic">conic</option>
                <option value="radial">radial</option>
            </select>
        </div>
        <div class="gradient__type">
            <label for="number">Choose the number of colors:</label>
            <select id="number">
                <option value="two" selected>2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
            </select>
        </div>
        <button class="gradient__button sample_btn">Enjoy</button>
    </div>

    <footer id="footer">
        <?php
        include('footer.php');
        ?>
    </footer>

    <script src="./gradient.js"></script>
</body>

</html>