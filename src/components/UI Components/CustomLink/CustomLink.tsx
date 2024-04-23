import { FC, ReactNode } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

interface ICustomLinkProps {
  children: ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
}

const CustomLink: FC<ICustomLinkProps> = ({
  children,
  to,
  onClick,
  ...props
}: ICustomLinkProps): JSX.Element => {
  const match = useMatch(to);
  return (
    <NavLink
      onClick={onClick}
      to={to}
      {...props}
      style={{
        color: match ? '#323739' : '#89939a',
      }}
    >
      {children}
    </NavLink>
  );
};

export { CustomLink };
