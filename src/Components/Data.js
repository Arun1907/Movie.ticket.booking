import React from "react";
import manjumel from '../assets/Mboys.webp';
import ring from '../assets/ring.jpg';
import dear from '../assets/dear.png';
import kungfu from '../assets/kungfu.avif'
import ayalan from '../assets/Ayalan.jpeg'
import premalu from '../assets/Premalu.jpg'

const movies = [
    { id: 1, image:manjumel, title: 'Manjumel Boys', language: 'Tamil/Malayalam', amount: 'Rs.180/Per Seat' },
    { id: 2, image:ring, title: 'The Ring', language: 'English', amount: 'Rs.180/Per Seat'},
    { id: 3, image:dear, title: 'DeAr', language: 'Tamil', amount: 'Rs.180/Per Seat' },
    { id: 4, image:kungfu, title: 'KungFu Panda 4', language: 'English/Tamil', amount: 'Rs.180/Per Seat' },
    { id: 5, image:ayalan, title: 'Ayalaan', language: 'Tamil', amount: 'Rs.180/Per Seat' },
    { id: 6, image:premalu, title: 'Premalu', language: 'Tamil/Malayalam', amount: 'Rs.180/Per Seat' },
    { id: 7, image:'', title: 'Movie', language: 'Tamil', amount: 'Rs.180/Per Seat' },
    { id: 8, image:'', title: 'Movie2', language: 'Tamil', amount: 'Rs.180/Per Seat' },
];

const seats = [
    {
        row: "A",
        columns: Array.from({ length: 10 }, (_, id) => ({ id: id + 1,
isAvailable: true })),
    },
    {
      row: "B",
      columns: Array.from({ length: 10 }, (_, id) => ({ id: id + 1,
isAvailable: true })),
  },
  {
    row: "C",
    columns: Array.from({ length: 10 }, (_, id) => ({ id: id + 1,
isAvailable: true })),
},
{
  row: "D",
  columns: Array.from({ length: 10 }, (_, id) => ({ id: id + 1,
isAvailable: true })),
},
{
  row: "E",
  columns: Array.from({ length: 10 }, (_, id) => ({ id: id + 1,
isAvailable: true })),
},
    // Define seats for other rows
];


export {movies, seats};