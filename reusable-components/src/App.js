import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png";
import CortanaImage from "./img/cortana.png";
import SiriImage from "./img/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
        <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>
      
     
     <div className='container'>
      <section className='section'>
        <div className='columns'>
          <div className='column is-3'>
          <ProfileCard 
          title="Alexa" 
          handle="@alexa99" 
          image={AlexaImage} 
          description="Alexa was created by Amazon and helps you buy things."/>
          </div>
          <div className='column is-3'>
          <ProfileCard 
          title="Cortana" 
          handle="@cortana32" 
          image={CortanaImage}
          description="Cortana was made by Microsoft. Who knows what is does?" />
            </div>
            <div className='column is-3'>
            <ProfileCard 
            title="Siri" 
            handle="@siri01" 
            image={SiriImage}
            description="Siri was made by Apple and is the most private intelligent assistant." />
            </div>
        </div>
      </section>
     </div>        

    </div>
  );
}

export default App;
