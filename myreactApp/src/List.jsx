// rendering a list
import propTypes from "prop-types";
function List(props) {
  //   const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  //   fruits.sort();
  //   return fruits;
  //   const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 129 },
  //     { id: 4, name: "coconut", calories: 37 },
  //     { id: 5, name: "pineapple", calories: 159 },
  //   ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
  //   fruits.sort((a, b) => a.calories - b.calories); //NUMERICAL ORDER
  //   fruits.sort((a, b) => b.calories - a.calories); //reverse NUMERICAL ORDER

  // const listItems = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name}&nbsp;<b>{fruit.calories}</b>
  //     </li>
  //   ));

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}&nbsp;<b>{item.calories}</b>
    </li>
  ));

  //   const listItems = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruit.id}>
  //       {lowCalFruits.name}&nbsp;{lowCalFruit.calories}
  //     </li>
  //   ));

  //   const anotherList = highCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}&nbsp;{highCalFruit.calories}
  //     </li>
  //   ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
      {/* <ul>{anotherList}</ul> */}
    </>
  );
}

List.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
};
List.defaultsProps = {
  category: "Category",
  items: [],
};
export default List;
