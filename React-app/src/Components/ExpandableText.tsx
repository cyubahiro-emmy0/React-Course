import React from 'react'

interface Props {
  children: string;
  maxChars? : number;
}

const ExpandableText = ({children, maxChars=100}: Props) => {
    if(children.length <= maxChars) return <p>{children}</p>

    const text = children.substring(0, maxChars);
  return (
    <p>{text}...</p>
  )
};

export default ExpandableText;