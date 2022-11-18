import './index.css';
import NickName from '../Nickname';

function Comment({selected = false}) {
  return (
    <div
      className="comment-root"
      style={{
        backgroundColor: selected ? '#FFC3C3' : '#FFFFFF'
      }}
    >
      <NickName />
      <p className="short-comment">
        Vivamus eu nulla a turpis pharetra laoreet. Maecenas blandit eros nec
        metus finibus, non gravida leo pharetra. Maecenas dapibus condimentum
        metus eu ultrices. Aliquam sollicitudin rhoncus magna, at vestibulum
        justo rutrum id. Proin feugiat enim quis nunc fermentum sagittis.
        Vivamus finibus ex eget eros consequat, ac vulputate leo ultrices.
      </p>
    </div>
  );
}

export default Comment;
