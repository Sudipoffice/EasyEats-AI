import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';

const TiltComponent = ({options, children}) => {
    const tiltRef = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tiltRef.current, options);
  
      return () => tiltRef.current.vanillaTilt.destroy();
    }, [options]);
  
    return (
      <div ref={tiltRef} className="tilt-container">
        {children}
      </div>
    );
}

export default TiltComponent
