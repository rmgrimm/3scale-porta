// @flow

import React from 'react'
import { mount } from 'enzyme'

import { ProductIndexPage } from 'Metrics'

const defaultProps = {
  applicationPlansPath: '/plans',
  addMappingRulePath: '/mapping-rule/new',
  createMetricPath: '/metrics/new',
  mappingRulesPath: '/mapping-rules',
  metrics: [],
  metricsCount: 0
}

const mountWrapper = (props) => mount(<ProductIndexPage {...{ ...defaultProps, ...props }} />)

it('should render itself', () => {
  const wrapper = mountWrapper()
  expect(wrapper.exists()).toBe(true)
})
