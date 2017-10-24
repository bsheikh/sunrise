// Add any code to configure or set up the testing environment before each test.
// Since every test runs in its own environment, these scripts will be executed in
// the testing environment immediately before executing the test code itself.

// Make Enzyme functions available in all test files without importing
import { render } from 'enzyme';
import { mountWithIntl, shallowWithIntl } from 'enzyme-react-intl';

global.shallow = shallowWithIntl;
global.render = render;
global.mount = mountWithIntl;
