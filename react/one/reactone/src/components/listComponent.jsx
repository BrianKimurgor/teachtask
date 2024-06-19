import ItemComponent from "./itemComponent";

const listComponent = ({ list }) => (
  <div>
    {list.map(item => (
      <ItemComponent key={item.objectID} item={item} />
    ))}
  </div>
);

export default listComponent;
