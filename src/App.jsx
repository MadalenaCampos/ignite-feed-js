import "./global.css";
import style from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// Dados mockados
const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://marketplace.canva.com/EAFD355TMik/2/0/1600w/canva-moldura-para-perfil-de-facebook-com-foto-lgbtqia%2B-colorido-frase-wV7EM3Jz9uU.jpg",
      name: "Marta Silva",
      role: "Engenheira de Software",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-05-29 12:50:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://alonsofotografia.com.br/wp-content/uploads/2020/07/felipe-baptista-depoimento-perfil-profissional.jpg",
      name: "João de Oliveira",
      role: "Desenvolvedor Back-end",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-04-28 05:12:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://img.freepik.com/vetores-gratis/moldura-plana-floral-do-facebook-para-foto-do-perfil_23-2148962057.jpg",
      name: "Maria de Souza",
      role: "Desenvolvedora Front-end",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-02-15 08:30:00"),
  },
];

export function App() {
  return (
    <div className="ignite-feed">
      <div className="ignite-feed-header">
        <Header />
      </div>

      <div className={style["ignite-feed-timeline"]}>
        <Sidebar />

        <div className={style["ignite-feed-timeline-posts"]}>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
