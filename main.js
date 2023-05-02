'use strict';

import { users, currentUser } from './users.js'; // wheen using import you must set <script type = "module" src = "main.js"></script> in the index file
import helper from './helper.js'

//document.getElementById('output').innerHTML = users[currentUser].name;

const userEmails = users.map(user => user.email);
document.getElementById('output2').innerHTML = helper(userEmails).join(', ');
