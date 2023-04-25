<?php


    class Task{ //setup task class

        public $description; // create description of class
        public $completed = false; //var to see if commpleted or not

        public function __construct($description)   //builds the class and setter
        {
            $this->description = $description;
        }


        public function complete()      //function that can be called to make completed as true
        {
            $this->completed = true;
        }


        public function isComplete()
        {
            return $this -> completed;
        }
    }


    $tasks = [
        new Task ('got to the store'),
        new Task ('finish work'),
        new Task ('Clean my room')
    ];
    
    $tasks[0] -> complete();



    require 'index.view.php';
