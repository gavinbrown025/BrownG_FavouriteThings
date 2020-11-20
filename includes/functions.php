<?php

    $result = array();

    function getAllUsers($conn) {
        //$query = "SELECT * FROM tbl_favthings";
        $query = "SELECT f.*, GROUP_CONCAT(m.source) as media 
        FROM tbl_favthings f 
        LEFT JOIN tbl_favthings_media link 
        ON link.favthing_id = f.id 
        LEFT JOIN tbl_media m 
        ON m.id = link.id 
        GROUP BY f.id ";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        
        echo (json_encode($result));
    }

    function getSingleUser($conn, $id) {
        $query = "SELECT f.*, GROUP_CONCAT(m.source) as media 
        FROM tbl_favthings f 
        LEFT JOIN tbl_favthings_media link 
        ON link.favthing_id = f.id 
        LEFT JOIN tbl_media m 
        ON m.id = link.id 
        WHERE f.id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    } 