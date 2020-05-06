import React from 'react';
import './index.scss';

function Labeled({ children, className, title, errorText, isValid }) {
  return (
    <div
      className={`Labeled-Container ${className} ${errorText ? 'Error' : ''}`}
    >
      {title && <span className="Labeled-title">{title}</span>}
      {children}
      {!isValid && <span className="Labeled-error">{errorText}</span>}
    </div>
  );
}

export default Labeled;
