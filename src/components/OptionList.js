import React from 'react';

function OptionList(props) {
  const { options } = props;
  const optKeys = Object.keys(options);

  return (
    <span className={props.className}>
      <label>{props.label}&nbsp;
        <select value={props.value} ref={props.ref} onChange={props.onChange}>
          {optKeys.map((o) => {
            return ( <option key={o} value={options[o]}>{o}</option> );
          })}
        </select>
      </label>
    </span>
  );
}

export default OptionList;
