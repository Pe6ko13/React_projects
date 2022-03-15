import { Component } from "react";

import * as postService from "./services/postServices";

import style from "./App.module.css";
import Header from "./components/Header/Header/Header";
import Menu from "./components/Header/Menu/Menu";
import Main from "./components/Header/Main";
import Footer from "./components/Header/Footer/Footer";

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />

//       <div className={style.container}>
//         <Menu />
//         <Main />
//       </div>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPost: null,
    };
  }

  componentDidMount() {
    postService.getAll().then((posts) => {
      this.setState({ posts });
    });
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });
  }

  getPosts() {
    if (this.state.selectedPost) {
      return [this.state.posts.find((x) => x.id == this.state.selectedPost)];
    } else {
      return this.state.posts;
    }
  }

  render() {
    return (
      <div className={style.app}>
        <Header />

        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick.bind(this)} />
          <Main posts={this.getPosts()} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
