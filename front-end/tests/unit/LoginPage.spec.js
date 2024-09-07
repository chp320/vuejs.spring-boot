/*
import { Vue } from 'vue'
import LoginPage from '@/views/LoginPage'

describe('LoginPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoginPage)
    const vm = new Constructor() .$mount ()
    expect(vm.$el.querySelector('h1').textContent).toEqual('TaskAgile')
  })
})
*/

import { mount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage.vue'

describe('LoginPage.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(LoginPage)
    expect(wrapper.find('h1').text()).toBe('TaskAgile')
  })
})
