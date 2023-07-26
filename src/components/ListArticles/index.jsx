import VerticalLine from "../VerticalLine";
import "./index.css";

const ListArticles = () => {
  return (
    <div className="cssListArticles">
      <section>
        <h3>Articles</h3>
        <VerticalLine></VerticalLine>
        <span>
          <time datetime="11/06/2023">11/06/2023</time>:{" "}
          <b>
            <a href="">Enfrentando dias de chuva e descobrindo dias de sol</a>
          </b>
        </span>
      </section>
    </div>
  );
};

export default ListArticles;
