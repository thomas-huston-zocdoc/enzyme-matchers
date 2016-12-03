/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toBeDisabledAssertion
 * @flow
 */

import type { Matcher } from '../../../../types/Matcher';
import type { EnzymeObject } from '../../../../types/EnzymeObject';
import getNodeName from '../utils/name';

export default function toBeDisabled(enzymeWrapper:EnzymeObject) : Matcher {
  const pass = !!enzymeWrapper.prop('disabled');

  return {
    pass,
    message: `Expected node (${getNodeName(enzymeWrapper)}) to be "disabled" but it wasn't.`,
    negatedMessage: `Expected node (${getNodeName(enzymeWrapper)}) not to be "disabled" but it was`,
    contextualInformation: {
      expected: `Node HTML output: ${enzymeWrapper.html()}`,
    },
  };
}