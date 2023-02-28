import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.image} />
          <p>{post.body}</p>
          <h3>Assuntos deste post:</h3>
          <div className={styles.tags}>
            {post &&
              post.tagsArray.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
