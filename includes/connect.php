 
<?php 

    $db_dsn = array(
        'host' => 'localhost',
        'dbname' => 'db_favthings',  //!put you database name 
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'root';
    $db_pass = '';

    $pdo = new PDO($dsn, $db_user, $db_pass);

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // var_dump($pdo);
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }