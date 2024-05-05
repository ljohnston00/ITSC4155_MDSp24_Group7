import withAuth from '../component/RestrictedPage';

function Index(props){

    return(

      <div className='index'>
        <p className='dash-mm'>Money Market</p>
        <p className='dash-asp'>Alpha Storm Project</p>
        <p className='bottom'>Money Market is maintained by Alpha Storm Project and was created by students in ITSC 4155 at the University of North Carolina at Charlotte in 2024.</p>
      </div> 
    );
}

export default withAuth(Index);