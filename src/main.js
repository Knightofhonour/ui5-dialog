import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/TextArea";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/Dialog";
import React from 'react';
import ReactDOM from 'react-dom';

const button = document.getElementById("button");
button.addEventListener("click", function() {
    const element = React.createElement('ui5-dialog');
    const container = document.createElement('div');
    container.setAttribute('id', 'modal_dialog');
    document.body.appendChild(container);
    const elementRendered = ReactDOM.render(element,container);
});