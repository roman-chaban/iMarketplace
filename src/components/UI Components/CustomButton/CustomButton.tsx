import React, { FC } from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: 'button' | 'submit';
  to?: string;
  className: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  to,
  style,
  type,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      style={style}
      variant='outlined'
      component='button'
      href={to}
      type={type}
      className={className}
    >
      {children}
    </Button>
  );
};

export { CustomButton };
