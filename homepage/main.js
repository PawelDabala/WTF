console.log('siema');
const name = 'Maciek';
const age = 80;
console.log(name);
console.log(age)

console.log(`Nazywam się ${name} i mam ${age} lat.`);

const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);

about.innerHTML = `<strong>Nazywam</strong> się ${name} i mam ${age} lat.`;

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);

if ('javasript' != 'java') {
    console.log('to prawda!!')
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld)

let oldIndicator;

if (age > 70) {
    oldIndicator = 'yes';
} else {
    oldIndicator = 'no';
}

function calculate(x) {
    x = x + 3;
    console.log('tradycyjnie: ${x}');
    return x*7
}

console.log(calculate(2));
const mycalculate = calculate(4);
console.log(mycalculate);

// nowa sposób zapisu funkcji:
// const calculateFat = (x) => {
//     x = x + 3;
//     console.log('fat: ${x}');
//     return x*7
// }
const calculateFat = x => (x+3)*7;

console.log(calculateFat(2));