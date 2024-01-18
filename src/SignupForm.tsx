//   4085512444
// +1 408 113 1224
// +1 (408) 121 1234
// +1 (408) 121 1234

import { useState } from 'react';

// +1 408 124 1234

//(408) 121 1234
const isValidPhone = (phone: string): boolean => {
  const hasCountryCode = phone.startsWith('+');
  if (hasCountryCode) {
    phone = phone.slice(2);
  }

  const digits = phone.trim().split('');
  const isValidNumbers = digits.every((digit) => +digit >= 0 && +digit <= 9);

  if (isValidNumbers && digits.length === 0) {
    return true;
  }

  const filtered = digits.filter(
    (digit) =>
      digit !== ' ' &&
      digit !== '.' &&
      digit !== '_' &&
      digit !== '(' &&
      digit !== ')'
  );

  if (
    filtered.length === 10 &&
    filtered.every((digit) => +digit >= 0 && +digit <= 9)
  ) {
    return true;
  }

  return false;
};

export const SignupForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  const submitHandler = (event: any) => {
    event.preventDefault();
    // console.log('submitted', event);

    if (isValidPhone(state.phone)) {
      onSubmit();
    }
    console.log(state, isValidPhone(state.phone));
    // all validations passes
  };

  return (
    <div className="signupForm">
      <form onSubmit={submitHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={256}
            value={state.name}

            onChange={(event) =>
              setState((state) => ({ ...state, name: event.target.value }))
            }
            required
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="test"
            name="phone"
            id="phone"
            required
            value={state.phone}
            onChange={(event) =>
              setState((state) => ({ ...state, phone: event.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={state.email}
            onChange={(event) =>
              setState((state) => ({ ...state, email: event.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            required
            value={state.address}
            onChange={(event) =>
              setState((state) => ({ ...state, address: event.target.value }))
            }
          />
        </div>
        <div>
          <button>Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
