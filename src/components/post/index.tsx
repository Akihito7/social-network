import Image from "next/image";
import { UserPhoto } from "../user-photo";
import sytles from "./post.module.css";

export function Post() {
  return (
    <div className={sytles.container}>
      <div className={sytles.header}>
        <UserPhoto />

        <div>
          <span>Guilherme Akihito</span>
          <p>Há 3 dias</p>
        </div>
      </div>

      <div className={sytles.legend}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum culpa ad maxime iusto consequatur corporis quasi expedita aliquid delectus repellat vero, veritatis eligendi quidem temporibus magnam maiores reiciendis reprehenderit.
        </p>
      </div>

      <div className={sytles.containerPhoto}>
        <Image
          src="/profile-image.png"
          alt="post image"
          width={1300}
          height={1454}
          sizes="80vw"
          quality={100}
          priority
        />
      </div>

      <div className={sytles.containerMetrics}>
        <span
          style={{
            flex: 1,
          }}
        >
          56 Likes
        </span>
        <span>2 Comentarios</span>
        <span>1 Compartilhamento</span>
      </div>

      <div className={sytles.row} />

      <div className={sytles.containerReactions}>
        <div className={sytles.containerButton}>
          <Image
            src="like-icon.svg"
            alt="lke icon"
            width={44}
            height={44}
            sizes="100"
          />

          <span>Curtir</span>
        </div>
        <div className={sytles.containerButton}>
          <Image
            src="comment-icon.svg"
            alt="lke icon"
            width={44}
            height={44}
            sizes="100"
          />

          <span>Comentar</span>
        </div>
        <div className={sytles.containerButton}>
          <Image
            src="share-icon.svg"
            alt="lke icon"
            width={44}
            height={44}
            sizes="100"
          />

          <span>Compartilhar</span>
        </div>
      </div>
    </div>
  );
}
