import {TextInput, TextView, ui} from 'tabris';

new TextInput({
    bottom: 10, left: '10%', right: '10%',
    message: 'does this work?'
}).on('accept', ({text}) => {
    new TextView({
        top: 'prev() 20', left: '20%',
        text: text
    }).appendTo(ui.contentView);
}).appendTo(ui.contentView);