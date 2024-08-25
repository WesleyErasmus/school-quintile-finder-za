<?php

class DatabaseConnector
{
    private $serverName = 'sql15.cpt2.host-h.net';
    private $username = 'p74wi_xp192';
    private $password = '06U6616Y96nx3k';
    private $dbname = 'lb5gx_hb76h';
    private $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->serverName, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            throw new Exception('Failed to connect to the database' . $this->conn->connect_error);
        }
    }

    public function getConnection()
    {
        return $this->conn;
    }
}
