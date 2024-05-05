import { loadStripe } from "@stripe/stripe-js";
import Cookies from 'js-cookie';
import Paths from "../path.service";

const stripePromise = loadStripe("pk_test_51OpF11G76qvcfE1h6K9Xto1rrc1X2AEFXikynboKnRu4rlVoPyF2Vd8A46Y2abxfwbf09JWJEDezifV8MXOikDAL00nI7bNx1I");

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
  
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (error) {
        console.log(error.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  
  export default createSubscription;
  