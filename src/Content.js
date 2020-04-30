import React from 'react'

//quiz form
export default function Content({ className, ...props }) {
  return (
    <div className={['Content', className].join(' ')} {...props} />
  );
}