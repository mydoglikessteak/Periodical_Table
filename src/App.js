import "./App.css";
import { Component } from "react";
import { getPeriodicTable } from "./utils/load-Posts";
import { Atom } from "./componnets/PostCard";

class App extends Component {
  state = {
    atoms: [],
  };

  async componentDidMount() {
    await this.loadTable();
  }
  componentDidUpdate() {}

  componentWillUnmount() {}

  loadTable = async () => {
    const table = await getPeriodicTable();
    this.setState({ atoms: table });
  };

  render() {
    const { atoms } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {atoms.map((atom) => {
            return (
              <Atom
                id={atom.name}
                color={`#${atom.cpkHexColor}`}
                symbol={atom.symbol}
                atomicNumber={atom.atomicNumber}
                name={atom.name}
                groupBlock={atom.groupBlock}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default App;
