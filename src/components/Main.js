import React from 'react';

const Main = (props) => {
    return (
      <div>
        <div>
          <div>
            React boilerplate with Karma for testing
            {props.children}
          </div>
        </div>
      </div>
    );
  }

export default Main;
