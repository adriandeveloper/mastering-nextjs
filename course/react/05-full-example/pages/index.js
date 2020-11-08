import React from 'react';

const List = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);

  const filterItems = (e) => {
    // what user typed in
    const searchValue = e.target.value;
    // full list of items. using spread operator to copy the arr without modifing properties directly
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
    // same thing as doing setFilteredItems
    //   this.setState({
    //     filteredItems: matchingItems
    //   });
  };
  return (
    // fragment? WTF is that?
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const ListContainer = () => (
  <List
    aria-label="My Fancy List"
    items={['Learn React', 'Learn Next.js', '???', 'Profit']}
  />
);

export default ListContainer;
