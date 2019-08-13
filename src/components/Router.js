import React, { Component } from 'react';
import PropTypes from 'prop-types';

const matchPath = (pathname, options) => {
  const { exact = false, path } = options;
  if (!path) {
    return {
      path: null,
      url: pathname,
      isExact: true,
    }
  }
  const match = new RegExp(`^${path}`).exec(pathname);
  if (!match) {
    return null;
  }
  const url = match[0];
  const isExact = pathname === url;
  if (exact && !isExact) {
    return null;
  }
  return {
    path,
    url,
    isExact,
  }
}

let instances = [];
const register = comp => instances.push(comp);
const unregister = comp => instances.splice(instances.indexOf(comp), 1);

export const historyPush = path => {
  window.history.pushState({}, null, path);
  instances.forEach(instance => instance.forceUpdate());
}

export class Route extends Component {
  constructor(props) {
    super(props);
    this.handlePop = this.handlePop.bind(this);
  }
  componentWillMount() {
    window.addEventListener('popstate', this.handlePop);
    register(this);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePop);
    unregister(this);
  }

  handlePop() {
    this.forceUpdate();
  }

  render() {
    const { path, exact, component } = this.props;
    const match = matchPath(window.location.pathname, { path, exact });
    if (!match) return null;
    if (component) return React.createElement(component, { match });
    return null;
  }
}

Route.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func
}
