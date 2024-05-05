import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paths from '../services/path.service';
import { verifySubscription } from '../services/subscription/verifySubscription.service';

const withSubscription = (WrappedComponent) => {
    return (props) => {
      const [isSubscribed, setIsSubscribed] = useState(false);
      const nav = useNavigate();
  
      useEffect(() => {
        const checkSubscription = async () => {
          const subscribed = await verifySubscription(nav);
          setIsSubscribed(subscribed);
        };
  
        checkSubscription();
      }, [nav]);
  
      if (!isSubscribed) {
        return (
          <div className='mustSub'>
            <div className='mustSub2'>
                <h1>You need to subscribe to get access to the learning content.</h1>
                <p>The scubscription can be found in the menu dropdown tab above.</p>
            </div>
          </div>
        );
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withSubscription;
