const parseArgs = require('minimist');
const colors = require('colors');
const fs = require('fs');

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
        handleData(1, add)
    } else if (remove) {
        if (typeof remove !== 'string' || remove.length < 7) {
            return console.log('Wpisz nazwe usuwanego zadania!'.red);
        }
        handleData(2, remove);
    } else if (list || list === '') {
        handleData(3, null);
    } else {
        console.log(`Nie rozumiem zadania. Wzyj --add'nazwa zadania', --remove='nazwa-zadania' lub opcji '--list'`);
    }
}

const handleData = (type, title) => {
    //type - number (1 - add; 2 - remove; 3 - list)
    //title (string || null)

    const data = fs.readFileSync('data.json');
    const tasks = JSON.parse(data);

    if (type === 1 || type === 2) {
        const isExisted = tasks.find(task => task.title === title) ? true : false;

        if (type === 1 && isExisted) {
            return console.log('Takie zadanie juz isteniej')
        } else if (type === 2 && !isExisted) {
            return console.log('Nie moge usunac zadania, ktore nie istnieje');
        }
    }
}

handleCommand(command)