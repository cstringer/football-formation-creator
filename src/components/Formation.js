import React from 'react';
import result from 'lodash/result';

import Player from './Player';
import '../styles/Formation.css';

function Formation(props) {
  const formation = result(props, 'formation', []);
  let playerCounter = 0;
  return (
    <div className="Formation">

      {formation.map((line, formIdx) => {
        return (
          <div
            className="Formation-line"
            key={formIdx}>

            {line.map((player, lineIdx) => {
              playerCounter++;  
              const num = player.number || playerCounter;
              const isGK = (formIdx === 0 && lineIdx === 0);
              return (
                <Player
                  actions={props.actions}
                  formIdx={formIdx}
                  isGK={isGK}
                  key={player.label + formIdx + lineIdx}
                  lineIdx={lineIdx}
                  label={player.label}
                  left={player.left}
                  number={num}
                  top={player.top}
                  shirtColor={props.shirtColor}
                  shortsColor={props.shortsColor}
                  stripes={props.stripes}
                  stripeColor={props.stripeColor}
                ></Player>
              );
            })}

          </div>
        );
      })}

    </div>
  );
}

export default Formation;
