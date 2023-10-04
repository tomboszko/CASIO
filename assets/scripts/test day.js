import dayjs from 'dayjs';

// Obtient la date actuelle
const date = dayjs();

// Affiche le jour de la semaine en utilisant 'dddd' comme format
const jourDeLaSemaine = date.format('dddd');

console.log(`Aujourd'hui, c'est ${jourDeLaSemaine} !`);






// dayjs('2018-08-08') // parse

// dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

// dayjs().set('month', 3).month() // get & set

// dayjs().add(1, 'year') // manipulate

// dayjs().isBefore(dayjs()) // query

