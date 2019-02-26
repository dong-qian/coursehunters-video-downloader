import React from 'react';
import * as S from './styles';

const Checkbox = React.memo(({ className, checked, label, ...props }) => {
  return (
    <label>
      <S.CheckboxContainer className={className}>
        <S.HiddenCheckbox checked={checked} {...props} />
        <S.StyledCheckbox checked={checked} {...props}>
          <S.Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </S.Icon>
        </S.StyledCheckbox>
      </S.CheckboxContainer>

      <S.Label style={{ marginLeft: 8 }}>{label}</S.Label>
    </label>
  );
});

export default Checkbox;
