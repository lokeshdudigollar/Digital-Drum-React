import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton = (e) => {
    var snd = new Audio(
      //"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      document.getElementById(e.target.innerHTML).src
    );
    this.setState({
      inputValue: document.getElementById(e.target.innerHTML).innerHTML
    });

    if (document.getElementById("power-switch").checked === true) {
      //document.getElementById('myRange').disabled= false;

      snd.play();
    } else {
      //document.getElementById('myRange').disabled= true;
      snd.pause();
    }
  };

  handleSlider = (e) => {
    this.setState({
      inputValue: "Volume: " + e.target.value
    });
  };

  render() {
    return (
      <div className="container" id="drum-machine">
        <div className="music-buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    Q
                  </button>
                  <audio
                    className="clip"
                    id="Q"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  >
                    Heater 1
                  </audio>
                </td>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    W
                  </button>
                  <audio
                    className="clip"
                    id="W"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  >
                    Heater 2
                  </audio>
                </td>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    E
                  </button>
                  <audio
                    className="clip"
                    id="E"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  >
                    Heater 3
                  </audio>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    A
                  </button>
                  <audio
                    className="clip"
                    id="A"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                  >
                    Heater 4
                  </audio>
                </td>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    S
                  </button>
                  <audio
                    className="clip"
                    id="S"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  >
                    Clap
                  </audio>
                </td>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    D
                  </button>
                  <audio
                    className="clip"
                    id="D"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                  >
                    Open HH
                  </audio>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    Z
                  </button>
                  <audio
                    className="clip"
                    id="Z"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                  >
                    Kick n' Hat
                  </audio>
                </td>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    X
                  </button>
                  <audio
                    className="clip"
                    id="X"
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  >
                    Kick
                  </audio>
                </td>
                <td>
                  <button
                    className="drum-pad"
                    onClick={(e) => this.handleButton(e)}
                  >
                    C
                  </button>
                  <audio
                    className="clip"
                    id="C"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                  >
                    Closed HH
                  </audio>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="controls-container">
          <div className="logo">Made by Lokesh</div>
          <div className="power">
            <h3>Power</h3>
            <label className="switch switch1">
              <input type="checkbox" id="power-switch" />
              <span className="slider slider1"></span>
            </label>
          </div>
          <p id="display">{this.state.inputValue}</p>

          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              defaultValue="50"
              className="volumeslider"
              id="myRange"
              onInput={(e) => this.handleSlider(e)}
            />
          </div>
          <div className="bank">
            <h3>Bank</h3>
            <label className="switch switch2">
              <input type="checkbox" />
              <span className="slider slider2"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
