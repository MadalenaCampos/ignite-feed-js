import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

import { Trash, HandsClapping } from "phosphor-react";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((stateAtual) => {
      stateAtual + 1;
    }); // Melhor usar esse formato!

    // setLikeCount(likeCount + 1);
    // Esse aumenta de 1 em 1, independente de quantas vezes repita

    // conts newLikeCount = likeCount + 1;
    // setLikeCount(newLikeCount);
    // setLikeCount(newLikeCount + 1); -> Assim aumenta de 2 em 2

    // setLikeCount((stateAtual) => {stateAtual + 1});
    // setLikeCount((stateAtual) => {stateAtual + 1}); -> Assim aumenta de 2 em 2 também
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comentario}>
      <div className={styles["comentario-foto-usuario"]}>
        <Avatar
          temBorda={false}
          src="https://avatars.githubusercontent.com/u/71613655?v=4"
        />
      </div>

      <div>
        <div className={styles["comentario-conteudo"]}>
          <div className={styles["comentario-conteudo-top"]}>
            <div className={styles["comentario-conteudo-top-usuario"]}>
              <h4>
                Madalena Campos <span>(Você)</span>
              </h4>
              <time
                title="02 de Dezembro às 08:30h"
                dateTime="2022-12-02 08:30:00"
              >
                Públicado há 1h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Apagar comentário">
              <Trash size={24} />
            </button>
          </div>
          <div className={styles["comentario-conteudo-texto"]}>
            <p>{content}</p>
          </div>
        </div>

        <div className={styles["comentario-aplaudir"]}>
          <button onClick={handleLikeComment}>
            <HandsClapping size={20} />
            <p>
              Aplaudir <span>{likeCount}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
