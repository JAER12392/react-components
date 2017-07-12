var App = () => (
  <div>
    <h1> GroceryList </h1>
    <GroceryList items={['Tequila', 'Spinach', 'Vodka', 'Lime', 'Tapatio']}/>
  </div>
);

var GroceryList = (props) => (
  <ul> 
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hover: false
    };
  }
  
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  
  render() {
    var style;
    
    if (this.state.hover) {
      style = {fontWeight: 'bold'}
    } else {
      style = {fontWeight: 'normal'};
    }
    
    return (
      <li style={style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.item}</li>
    );
  }
  
}



ReactDOM.render(<App />, document.getElementById("app"));