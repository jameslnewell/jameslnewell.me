import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import {Margin} from 'styled-components-spacing';
import {Text} from 'site-ui';

const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

const Role = props => {
  const {logo, title, organisation, startedAt, finishedAt, children} = props;
  return (
    <Margin vertical={3}>
      <Grid verticalAlign="center" wrap={false}>
        <Grid.Unit width={'min'}>
          <Margin right={3}>
            <Logo src={logo} alt={`${title} @ ${organisation}`} title={`${title} @ ${organisation}`}/>
          </Margin>
        </Grid.Unit>
        <Grid.Unit width={'max'}>
          <h3>{title}</h3>
          <h4>{organisation}</h4>
          <Text size="sm">{startedAt} &mdash; {finishedAt}</Text>
          <Text size="sm">
            {children}
          </Text>
        </Grid.Unit>
      </Grid>
    </Margin>
  );
};

Role.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
  startedAt: PropTypes.string.isRequired,
  finishedAt: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Role;