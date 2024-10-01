import styles from "./components/app.module.css"; 
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Content from "./components/content";
import Video from './components/Video';
import Animation from './components/Animation';
import Animation2 from './components/Animation2';
import Animation3 from './components/Animation3';
import Animation4 from './components/Animation4';
import Content2 from "./components/Content2";
import Latest from "./components/Latest";
import Video2 from "./components/Video2";
import Eone from "./components/Eone";
import Image from "./components/Image";
import Pilot from "./components/Pilot";
import NewPhoto from "./components/NewPhoto";
import Focus from "./components/Focus";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Last from "./components/Last";

function App() {
  return (
    <div>
      <div className={styles.app}>
        <Header />
        <Header2 />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Video />
      </div>
      <div className={styles.app}>
        <Animation />
        <Animation2 />
        <Animation3 />
        <Animation4 />
      </div>
      <div>
        <Content2 />
      </div>
      <div>
        <Latest />
      </div>
      <div>
        <Video2 />
      </div>
      <div>
        <Eone />
      </div>
      <div>
        <Image />
      </div>
      <div>
        <Pilot />
      </div>
      <div>
        <NewPhoto />
      </div>
      <div>
        <Focus />
      </div>
      <div>
        <Content3 />
      </div>
      <div>
        <Content4 />
      </div>
      <div>
        <Last />
      </div>
    </div>
  );
}

export default App;
