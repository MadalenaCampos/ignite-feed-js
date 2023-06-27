import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

import { Trash, HandsClapping } from "phosphor-react";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
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
