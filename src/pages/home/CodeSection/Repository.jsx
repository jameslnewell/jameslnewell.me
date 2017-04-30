import React from 'react';
import PropTypes from 'prop-types';
import {Margin, Padding} from 'styled-components-spacing';
import Grid from 'styled-components-grid';
import {ExternalLink} from 'site-ui';

const Repository = ({name}) => (
  <Margin vertical={3}>
    <Grid verticalAlign="center" wrap={false}>
      <Grid.Unit width="min">
        <Padding right={3}>
          img
        </Padding>
      </Grid.Unit>
      <Grid.Unit width="max">
        <ExternalLink href={`https://github.com/jameslnewell/${name}`}>
          <h2>{name}</h2>
        </ExternalLink>
      </Grid.Unit>
    </Grid>
  </Margin>
);

Repository.propTypes = {
  name: PropTypes.string.isRequired
};

export default Repository;