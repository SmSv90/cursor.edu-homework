import './App.css';
import Post from './Components/Post.js';
import './Components/Post.css'

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const LUKE_IMAGE =`${process.env.PUBLIC_URL}/assets/luke.jpg`;
const VEGAS_IMAGE = `${process.env.PUBLIC_URL}/assets/vegas.jpg`;

function App() {
  return (
    <div className="App">
      <Post author = {{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
      content = "WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image = {RAY_IMAGE}
      date = {"26 февр."}
      comment = {482}
      retweet = {146}
      like = {887}
      />
      <Post author = {{
        name: "Luke skywalker",
        photo: LUKE_IMAGE,
        nickname: "@last_jedi"
      }}
      content = "It happened in Vegas. I was young and drunk..."
      image = {VEGAS_IMAGE}
      date = {"27 февр."}
      comment = {555}
      retweet = {344}
      like = {999}
      />
    </div>
  );
}

export default App;
