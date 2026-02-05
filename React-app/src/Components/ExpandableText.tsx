import React from 'react'

interface Props {
  children: string;
  maxChars? : number;
}

const ExpandableText = ({children, maxChars=100}: Props) => {
    if(children.length <= maxChars) return <p>{children}</p>
  return (
    <div>{children}</div>
  )
};

export default ExpandableText;