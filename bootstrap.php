<?php



$config = require 'config.php';



require 'database/QueryBuilder.php';

require 'database/connection.php';



return new QueryBuilder(
    
    Connection::make($config['database'])
); 