import firstPicture from './assets/MM1.jpg'
import secondPicture from './assets/MM2.png'
import thirdPicture from './assets/MM3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'


function Index(){

    return(
      <div>
        <section className = 'section'>
          <div className='index-nLIpt1'>
            <div className='MM'>Money Market</div>
            <div className='ASP'>Alpha Storm Project</div>
          </div>
        </section>

        <section className = 'section'>
          <div className='index-nLIpt2'>
            <p className='data'>Get access to real time data that gives you the edge you need to win</p>
            <Button>Read More</Button>
            <img className='data-img' alt="Money Market Live Markets" src={firstPicture}></img>
          </div>
        </section>

        <section className = 'section'>
          <div className='index-nLIpt3'>
            <div className='pt3-1'>
              <img className='data-img-pt2' alt="Money Market Live Markets" src={secondPicture}></img>
              <p className='data-pt2'>Make money by helping other investors grow their skills</p>
            </div>

            <div className='pt3-2'>
              <p className='data-pt2'>Grow your knowledge so you can grow your bank account</p>
              <img className='data-img-pt2' alt="Money Market Live Markets" src={thirdPicture}></img>
            </div>
          </div>
        </section>
        
        <section className = 'section'>
          <div className='index-nLIpt4'>
            <h1>We want to hear from you</h1>
            <div className='flex'>
              <div className='pt4-1'>
                <p className='data-pt2'>Tell us what you want to see from our platform</p>
              </div>

              <form className='pt4-2'>
                <input className='input' type="text" id="firstName" name="firstName" placeholder='First Name'  required/>
                <input className='input' type="text" id="lastName" name="lastName" placeholder='Last Name'  required/>
                <input className='input'type="email" id="email" name="email" placeholder='Email'  required/>
                <textarea className='input-t' id="details" cols="20" rows="2" placeholder="Message" name="content" required minlength="10"></textarea>
              </form>
            </div>
            <p className='bottom-2'>Money Market is maintained by Alpha Storm Project and was created by students in ITSC 4155 at the University of North Carolina at Charlotte in 2024.</p>
          </div>
        </section>

    </div> 
    );
}

export default Index;