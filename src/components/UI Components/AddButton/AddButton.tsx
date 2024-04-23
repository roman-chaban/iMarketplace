import styled from 'styled-components';
import { FC, ReactNode } from 'react';
import { FavoriteBorder } from '@mui/icons-material';

const AddButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledAddButton = styled.button`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  width: 263px;
  padding: 13.5px;
  background: #313237;
  border-radius: 5px;
`;

const StyledFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  background: transparent;
  border: 1.5px solid #89939a;
`;

interface IAddButtonProps {
  children: ReactNode;
}

export const AddButton: FC<IAddButtonProps> = ({
  children,
  ...props
}: IAddButtonProps) => {
  return (
    <AddButtonContainer>
      <StyledAddButton {...props}>{children}</StyledAddButton>
      <StyledFavoriteButton>
        <FavoriteBorder style={{ color: ' #313237' }} />
      </StyledFavoriteButton>
    </AddButtonContainer>
  );
};
