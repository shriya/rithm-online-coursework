import React, { Component } from 'react';
import Box from './Box';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    var boxes = [];
    const numBoxes = 42;
    for (var i = 0; i < numBoxes; i++) {
      let randomIndex = Math.floor(Math.random() * this.props.allColors.length);
      let randomColor = this.props.allColors[randomIndex];
      boxes.push({
        id: i,
        color: randomColor
      });
    }
    this.state = {boxes};

    // setInterval(() => {
    //   const newBoxes = this.state.boxes.slice();
    //   const randomBoxIndex = Math.floor(Math.random() * newBoxes.length);
    //   const colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    //   const randomColor = this.props.allColors[colorIndex];
    //   newBoxes[randomBoxIndex].color = randomColor;
    //   this.setState({
    //     boxes: newBoxes
    //   })
    // }, 300);
  }

  removeBox(id) {
    let boxes = this.state.boxes.slice();
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].id === id) break;
    }
    boxes.splice(i, 1);
    this.setState({ boxes });
  }

  changeColor(id) {
    let boxes = this.state.boxes.slice();
    let randomIndex = Math.floor(Math.random() * this.props.allColors.length);
    let randomColor = this.props.allColors[randomIndex];
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].id === id) break;
    }
    boxes[i].color = randomColor;
    this.setState({boxes});
  }

  render() {
    // console.log("I'm the App!");
    const boxes = this.state.boxes.map(b =>
      <Box 
        key={b.id} 
        color={b.color} 
        handleColor={this.changeColor.bind(this, b.id)}
        handleRemove={this.removeBox.bind(this, b.id)}
      />
    );
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","Aqua","Aquamarine","Azure","Blue","BlueViolet","CadetBlue","Chartreuse","Coral","CornflowerBlue",
              "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGreen","DarkMagenta","DarkOliveGreen",
              "Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkTurquoise","DarkViolet",
              "DeepSkyBlue","DodgerBlue","FireBrick","ForestGreen","Gold","GoldenRod","Green","GreenYellow","HoneyDew","Indigo",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow",
              "LightSeaGreen","LightSkyBlue","LightSteelBlue","LightYellow","Lime","LimeGreen","Maroon","MediumAquaMarine","MediumBlue",
              "MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Navy","Olive","OliveDrab","Orange","OrangeRed","Orchid",
              "PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Pink","Plum","PowderBlue",
              "Purple","Red","RoyalBlue","Salmon","SeaGreen","SeaShell","SkyBlue","SlateBlue","SpringGreen","SteelBlue","Teal",
              "Thistle","Tomato","Turquoise","Violet","Yellow","YellowGreen"]
}



