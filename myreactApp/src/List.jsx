// rendering a list
function List() {
  //   const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  //   fruits.sort();
  //   return fruits;
  //   const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 19 },
    { id: 4, name: "coconut", calories: 37 },
    { id: 5, name: "pineapple", calories: 159 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
  fruits.sort((a, b) => a.calories - b.calories); //NUMERICAL ORDER
  fruits.sort((a, b) => b.calories - a.calories); //reverse NUMERICAL ORDER

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}&nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
export default List;
