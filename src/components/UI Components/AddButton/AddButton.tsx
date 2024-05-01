import { FC, ReactNode } from 'react';
import { FavoriteBorder } from '@mui/icons-material';
import {
  AddButtonContainer,
  StyledAddButton,
  StyledFavoriteButton,
} from './styled/AddButton';

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
