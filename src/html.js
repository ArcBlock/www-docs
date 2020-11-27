import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  static propTypes = {
    headComponents: PropTypes.any.isRequired,
    body: PropTypes.any.isRequired,
    postBodyComponents: PropTypes.any.isRequired,
  };

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" type="text/css" href="/icons/css/all.css" />
          <script type="text/javascript" src="/get_env_script.js"></script>
          {this.props.headComponents}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
