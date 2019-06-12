const colors = require('colors');
const handleData = require('./handleData');

const handleCommand = ({
    add,
    remove,
    list
}) => {
    if (add) {
        if (typeof add !== 'string') {
            return console.log('Wpisz nazwe zadania!'.red)
        } else if (add.length < 7) {
            return console.log('Nazwa zadnaia musi miec wiecej niz 6 znakow'.red);
        }
        handleData(1, add)
    } else if (remove) {
        if (typeof remove !== 'string' || remove.length < 7) {
            return console.log('Wpisz nazwe usuwanego zadania!'.red);
        }
        handleData(2, remove);
    } else if (list || list === '') {
        handleData(3, null);
    } else {
        console.log(`Nie rozumiem zadania. Uzyj --add'nazwa zadania', --remove='nazwa-zadania' lub opcji '--list'`.red);
    }
}

module.exports = handleCommand;