//for display of Item JSX
//we change to const declaration

//we use const over here in order to use the arrow function
//props is derived from BobaTeaShop
//remember to apply export at the end
//we will take in an item obj
const Item = (props) => {
  return (
    <div className="item-info">
      <h2>Name: {props.item.name}</h2>
      <h3>Price: {props.item.price}</h3>
      <h4>Sugar Level: {props.item.sugar}</h4>
      <button onClick={() => props.beginEdit(props.item)}>Edit</button>
      <button onClick={() => props.delete(props.index)}>Delete By Index</button>
      <button onClick={() => props.deleteByItem(props.item)}>Delete By Item</button>
    </div>
  );
};

export default Item;
