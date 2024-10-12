import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';

console.log(_.join(['Hello', 'webpack'], ' '));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
