import React from 'react';
import Post from './PostFeed';
import epicImg from '../assets/database/epic.jpg';
import moonImg from '../assets/database/moon.jpg';
import robodogImg from '../assets/database/robodog.jpeg'


const posts = [
  {
    userName: "Alan Brasil",
    userRole: "Estudante de Eng. Elétrica",
    title: "Ideia 1",
    description: "Descrição da ideia 1",
    imageSrc: robodogImg,
    status: "Aberto",
    tags: "Robótica"
  },
    {
    userName: "Emanuelle Arruda",
    userRole: "Estudante de Eng. Ambiental",
    title: "Ideia 2",
    description: "Descrição da ideia 2",
    imageSrc: moonImg,
    status: "Aberto",
    tags: "Elétrica"
  },
  {
    userName: "José Marques",
    userRole: "Estudante de Eng. Eletrônica",
    title: "Ideia 3",
    description: "Descrição da ideia 3",
    imageSrc: robodogImg,
    status: "Aberto",
    tags: "Elétrica"
  },
  {
    userName: "Felipe Souza",
    userRole: "Estudante de Eng. Civil",
    title: "Ideia 4",
    description: "Descrição da ideia 4",
    imageSrc: robodogImg,
    status: "Aberto",
    tags: "Elétrica"
  },
  {
    userName: "Maria Clara",
    userRole: "Professora da UPE",
    title: "Ideia 5",
    description: "Descrição da ideia 5",
    imageSrc: epicImg,
    status: "Aberto",
    tags: "Elétrica"
  },
];

const Main = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Main;

