<?php
    // object vars
    // tweak format of player fleet object
    $user = $_POST['hidden'];

    // dump to file
    file_put_contents("../JSON/user.json", $user);

    // redirect
    header("Location: http://localhost/portfolio/projects/splash_onboarding/splash.html");