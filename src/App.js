import React from "react";
import Figure from "./components/Figure";
import Art from "./components/Art";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>Geometrizando</h1>

        <Art>
          <Figure type="Circle" color="red" />
          <Figure type="Square" color="blue" />
          <Figure type="Rectangle" color="yellow" />
          <Figure type="Triangle" color="green" />
        </Art>

      </div>
    )
  }
}

export default App;