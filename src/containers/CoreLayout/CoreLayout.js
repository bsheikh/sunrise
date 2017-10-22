import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { internationalizationBuilder } from '../../helpers';

// Assets
import '../../styles/core.scss';
import './CoreLayout.scss';

class CoreLayout extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const appLocal = internationalizationBuilder("eng");
    return (
      <LocaleProvider locale={appLocal.antd}>
        <IntlProvider locale={appLocal.reactIntl}>
          <div className="sunrise core__layout">
            <div className={`app__layout package`}>
              { this.props.children }
            </div>
          </div>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default connect(null, null)(CoreLayout);
