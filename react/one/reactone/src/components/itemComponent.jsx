/* eslint-disable react/prop-types */
const ItemComponent = ({ item }) => (
    <div>
      <h2>
        <a href={item.url}>{item.title}</a>
      </h2>
      <p>Author: {item.author}</p>
      <p>Comments: {item.num_comments}</p>
      <p>Points: {item.points}</p>
    </div>
  );

  export default ItemComponent;
