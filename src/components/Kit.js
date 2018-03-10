import React from 'react';

import '../styles/Kit.css';

const shortsPath = [
  'M 31,48 L 68,48 L 74,88.5 L 53,88.5',
  'L 50,75 L 47,88.5 L 25.5,88.5 L 31,48 z'
].join(' ');

const shirtPath = [
  'M -0.5,58.5 L -0.5,31.5 L -6,37 L -19,24 L -0.5,5.5 L 9.6,5.5',
  'C 14,7 16,8 19,8 C 21,8 23,7 28,5.5',
  'L 38.5,5.5 L 57,24 L 44,37 L 38.5,31.5 L 38.5,58.5 L -0.5,58.5'
].join(' ');

function Kit(props) {
  return (
    <svg className="Kit" version="1.0" width="70" height="80" viewBox="0 0 100 90">

    {props.stripes &&
      <pattern id="stripes" width="10" height="80" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="80" style={{stroke:props.stripeColor, strokeWidth:10}} />
      </pattern>
    }

      <path className="shorts" fill={props.shortsFill} stroke={props.shortsStroke} d={shortsPath} />

      <g transform="translate(31,-5)">

        <path className="shirt" fill={props.shirtFill} stroke={props.shirtStroke} d={shirtPath} />

        {props.stripes &&
            <path className="shirt" fill="url(#stripes)" stroke={props.shirtStroke} d={shirtPath} />
        }

      </g>

    </svg>
  );
}

export default Kit;
