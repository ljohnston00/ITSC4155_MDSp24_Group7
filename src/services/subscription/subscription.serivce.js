import { loadStripe } from "@stripe/stripe-js";
import Cookies from 'js-cookie';
import Paths from "../path.service";

const stripePromise = loadStripe("pk_live_51PD07B04Pi0sMGC4WVepxza75TcZaIBeGdosVTmUj3FveE5CJ4VfMA5qLVtbAgWzKFbuKeanzB5MppNRD7TRsPKb00m0sU5zvd");

const createSubscription = async () => {
    try {
      const token = Cookies.get('Authorization');
  
      const response = await fetch(`${Paths.API_BASE}/payment/create-checkout-session`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const session = await response.json();
  
      console.log(session);
  
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (error) {
        console.log(error.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  export default createSubscription;
  