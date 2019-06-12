const parseArgs = require('minimist');
const colors = require('colors');

const command = parseArgs(process.argv.slice(2, 3));
delete command._;

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
    } else if (remove) {
        if (typeof remove !== 'string' || remove.length < 7) {
            return console.log('Wpisz nazwe usuwanego zadania!'.red);
        }
    } else if (list || list === '') {

    } else {
        console.log(`Nie rozumiem zadania. Wzyj --add'nazwa zadania', --remove='nazwa-zadania' lub opcji '--list'`);
    }
}



handleCommand(command)