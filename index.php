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


    <div class="objectsBg container">
        <h1 class="object__title">Deep object comparison</h1>
        <h2 class="object__info">Write two objects or arrays</h2>
        <h2 class="object__example">Example: { "a": 1, "b": { "c": 1 }, "d": [1, 2] }</h2>
        <div class="objects">
            <div class="object firstObj">
                <label for="obj1">First object:</label>
                <textarea name="obj1" id="obj1"
                    placeholder="Don't forget these symbols: '{', ':', ',', '&quot;', '}' !"></textarea>
                <!-- <input type="text" placeholder="Don't forget these symbols: '{', ':', ',', '&quot;' '}' !" id="obj1"> -->
            </div>
            <div class="object secondObj">
                <label for="obj2">Second object:</label>
                <textarea name="obj2" id="obj2"
                    placeholder="Don't forget these symbols: '{', ':', ',', '&quot;', '}' !"></textarea>
            </div>
        </div>
        <div class="objectComment"></div>
    </div>

    <footer id="footer">
        <?php
        include('footer.php');
        ?>
    </footer>

    <script src="./object.js"></script>
</body>

</html>