import React, { Children } from 'react'

interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success';
    onClick:() => void;
}

const Button = ({ children,color='primary', onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button