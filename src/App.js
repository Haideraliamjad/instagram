import Header from "./Components/Header";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import Post from "./Components/Post";
function App() {
  return (
    <>
      <Header />
      <div className="story-container">
        <Story title="Your Story" image="images/img1.jpg" />
        <Story title="Usman" image="images/img2.jpg" />
        <Story title="Muzamil" image="images/img3.jpg" />
        <Story title="Iqra" image="images/img4.jpg" />
        <Story title="Sara" image="images/img5.jpg" />
        <Story title="Someone" image="images/img6.jpg" />
      </div>
      <div className="newsfeed">
        <Post dp="images/img3.jpg" views="10" name="Muzammil Rasheed" post="images/car.jpg" />
        <Post dp="images/img2.jpg" views="30" name="Usman Mustafa" post="images/car1.jpg" />
        <Post dp="images/img4.jpg" views="40" name="Nida Anjum" post="images/flowers.jpg" />
      </div>
      <Footer/>
    </>
  );
}
export default App;
