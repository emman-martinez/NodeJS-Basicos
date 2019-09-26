'use strict'

// Uso de Express
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola Mundo con Express y NodeJS</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server on port 3000...'.cyan);
});


// Módulo HTTP: Para crear servidores
/*
const http = require('http');
const colors = require('colors');

const handleServer = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
};

// Mi primer Servidor
const server = http.createServer(handleServer);
server.listen(3000, () => {
    console.log('Server on port 3000 ...'.cyan);
});
*/

// Manejo de info de SO

/*
const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('Free mem:', os.freemem(), ' bytes');
console.log('Total mem:', os.totalmem(), ' bytes');
*/

// Manejo de archivos
/* Código Asíncrono */
/*
const fs = require('fs');

// Crea archivos
fs.writeFile('./texto.txt', 'línea uno', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo Creado');
    }
});

console.log('Última Línea de Código');

// Lee archivos
fs.readFile('./texto.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
*/