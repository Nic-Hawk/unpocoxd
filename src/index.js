const messages = [
    'Hello World',
    'Hello Motherfucker',
    'Hello little kid',
    'Grevin gei',
    'Adil god',
    'arista Zzz'
];

const randomMsg = () => {
    const msj = messages[Math.floor(Math.random() * messages.length)];
    console.log(msj);
};

module.exports = { randomMsg };