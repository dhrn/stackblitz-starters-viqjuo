import { FC } from 'react';
import { SignupForm } from './SignupForm';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <SignupForm
        onSubmit={() => {
          console.log('api call');
        }}
      />
    </div>
  );
};

/**
 * 
 * Design Signup form
 * 
 * name  - maxLength -256
 * phone -  US phone number
 *    408 551 2444
   +1 408 113 1224
   +1 (408) 121 1234
   +1 (408) 121 1234

 * email     - 
 * address.  -
 * 
 * 
 * Actions 
 *  Submit - validate input & fire api
 *  Clear - Reset the form
 * 
 */
