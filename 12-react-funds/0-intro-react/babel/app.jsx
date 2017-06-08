class SuperSweetComponent extends React.Component {
  render() {
    var error = Math.random() < 0.5 ? 
      <h5 className="error">Oh no, there's an error!</h5> :
      null;

    return (
      <div className={this.props.mood}>
        {error}
        <h3>Components are {this.props.opinion}!</h3>
        <p>Everyone {this.props.mood} component architecture.</p>
      </div>
    )
  }
}

class App extends React.Component {

  render() { 
    var opinionsAndMoods = [
      {opinion: "okay", mood: "loves"},
      {opinion: "terrible", mood: "hates"},
      {opinion: "the best thing ever", mood: "loves"}
    ]  

    var components = opinionsAndMoods.map((obj,i) => (
      <SuperSweetComponent 
        opinion={obj.opinion} 
        mood={obj.mood} 
        key={i} 
        anotherprop="boom" 
        omganotherprop="roasted" 
        seriouslywegetheidea="okay i'm done"
      />
    ))
    return (
      <div>
        <SuperSweetComponent opinion="super awesome" mood="loves"/>
        <h1 id="page-title" className={"bar " + this.props.otherClass}>Hello World!</h1>
        <p id="foo" style={{color: 'red'}}>WOAHHHH!</p>
        <SuperSweetComponent opinion="horrible" mood="hates"/>
        {components}
      </div>
    )
  }
}

// lets put this on the DOM
ReactDOM.render(<App otherClass="hmmm"/>, document.getElementById("app"));




