import React from 'react';

import * as S from './hero.styles';

class hero extends React.Component {
  render() {
    return (
      <S.Wrapper>
        <S.Title>Undo git commits</S.Title>
        <S.Subtitle>Shoot.. That was the wrong branch!</S.Subtitle>
      </S.Wrapper>
    );
  }
}

export default hero;
