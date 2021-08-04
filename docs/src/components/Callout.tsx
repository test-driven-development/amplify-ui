import * as react from 'react';

// TODO: replace this with the real Callout component
export const Callout = ({ title, children, info, warning }) => (
  <div
    className={`callout ${info ? 'info' : null} ${warning ? 'warning' : null}`}
  >
    <div>
      {title ? (
        <div>
          <b>{title}</b>
        </div>
      ) : null}
      {children}
    </div>
  </div>
);
