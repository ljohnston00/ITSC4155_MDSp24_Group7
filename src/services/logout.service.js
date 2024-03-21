import Cookies from 'js-cookie';

const signoutHandler = async () => {
    try{

        Cookies.remove("Authorization");
        localStorage.removeItem('isLoggedIn');
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export default signoutHandler;