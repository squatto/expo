import * as React from 'react';

import { requireNativeViewManager } from '@unimodules/core';

export default class ExpoApplicationView extends React.Component {
  static NativeView = requireNativeViewManager('ExpoApplicationView');

  render() {
    return (
      <ExpoApplicationView.NativeView />
    );
  }
}
