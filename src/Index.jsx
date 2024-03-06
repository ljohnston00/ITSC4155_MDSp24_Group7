import firstPicture from './assets/MM1.jpg'


function Index(props){

    return(

      props.isLoggedIn ? 
      <div className='index'>
        <p className='MM'>Money Market</p>
        <p className='ASP'>Alpha Storm Project</p>
        <p className='bottom'>Money Market is maintained by Alpha Storm Project and was created by students in ITSC 4155 at the University of North Carolina at Charlotte in 2024.</p>
      </div> :
      <div>

      <div className='index-nLIpt1'>
      <p className='MM'>Money Market</p>
      <p className='ASP'>Alpha Storm Project</p>
      </div>

      <div className='index-nLIpt2'>
      <p className='data'>Get access to real time data that gives you the edge you need to win</p>
      <img className='data-img' alt="Money Market Live Markets" src={firstPicture}></img>
      </div>

      <div className='index-nLIpt3'>
      <p className='data'>Get access to real time data that gives you the edge you need to win</p>
      <img className='data-img' alt="Money Market Live Markets" src={firstPicture}></img>
      </div>

      </div>
    );
}

export default Index;