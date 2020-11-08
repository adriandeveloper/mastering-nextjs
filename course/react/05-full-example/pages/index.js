import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredItems: this.props.items
    };

    this.filterItems = this.filterItems.bind(this);
  }

  filterItems(e) {
    // what user typed in
    const searchValue = e.target.value;
    // full list of items. using spread operator to copy the arr without modifing properties directly
    const currentItems = [...this.props.items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    this.setState({
      filteredItems: matchingItems
    });
  }
  render() {
    return (
      // fragment? WTF is that?
      <>
        <input onChange={this.filterItems} />
        <ul>
          {this.state.filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

const ListContainer = () => (
  <List items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
);

export default ListContainer;
