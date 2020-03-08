import { h, Component, render } from './preact';
import htm from './htm';

const html = htm.bind(h);

class App extends Component {
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    return fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=3')
      .then((response) => response.json())
      .then((responseJson) => {
        const { posts = [] } = this.state;
        this.setState({ posts: [...posts, ...responseJson] });
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render({}, { posts = [] }) {
    return html`
      <div class="app">
        <${Navbar} title="Blog"/>
        <div class="jumbotron mt-5">
          <div class="container">
            <h1 class="display-3">Welcome to Lorem Ipsum Blog!</h1>
            <p>This blog is powered by Preact and HTM template engine. For more information use google. You can also click button below to display older posts.</p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            ${posts.map((post, index) => html`
              <div class="col-md-4">
                <h2>${'Post ' + (index+1)}</h2>
                <p>${post} </p>
              </div>  
            `)}
          </div>
          <p class="text-center"><button onClick=${() => this.getPosts()} class="btn btn-link btn-lg" role="button">Older posts</button></p>
        </div>
        <${Footer}/>
      </div>
    `;
  }
}

const Navbar = ({ title }) => html`
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="/">${title}</a>
</nav>
`

const Footer = () => html`
<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Build with Webpack, Preact and Bootstrap</span>
  </div>
</footer>
`

render(html`<${App} />`, document.body);