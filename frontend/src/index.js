var React = require('react');
import ReactDOM from 'react-dom';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const element = <h1>Hello Word!</h1>;

// Bind React Element into HTML Document
ReactDOM.render(element, document.getElementById('react-root'));
