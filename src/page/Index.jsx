import firstPicture from '../assets/MM1.jpg'
import secondPicture from '../assets/MM2.png'
import thirdPicture from '../assets/MM3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Index(){

    return(
      <div>
        <section className = 'section'>
          <div className='index-nLIpt1 text-center'>
            <p className='welcome-text'>Easily learn and invest in stocks at <span className="MM">MoneyMarket</span></p>
            <p className='data'>Get access to real time data that gives you the edge you need to win</p>
            <div>
              <Link to='Login'>
                <Button className="btn-login">LOGIN</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className = 'section'>
          <div className='index-nLIpt2'>
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
              <img className='data-img-pt2' alt="Money Market Live Markets" src={thirdPicture}></img>
              <p className='data-pt2'>Grow your knowledge so you can grow your bank account</p>
            </div>
          </div>
        </section>
        
        <section className = 'section'>
          <div className='index-nLIpt4'>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 mt-5">
                  <h1 className="mb-4 text-center">We want to hear from you</h1>
                  <form>
                    <div className="form-group">
                      <p className=''>First Name:</p>
                      <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required />
                    </div>
                    <div className="form-group">
                      <p>Last Name:</p>
                      <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="form-group">
                      <p>Email:</p>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <p>Comments:</p>
                      <textarea className="form-control" id="message" rows="3" placeholder="Message" required minLength="10"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <p className='bottom-2'>Money Market is maintained by Alpha Storm Project and was created by students in ITSC 4155 at the University of North Carolina at Charlotte in 2024.</p>
          </div>
        </section>

        <section className="contact-section">
          
      </section>

    </div> 
    );
}

export default Index;