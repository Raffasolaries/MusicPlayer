import { shallowMount } from '@vue/test-utils'
import VideosList from '@/components/VideosList.vue'

describe('VideosList.vue', () => {
  it('as the component starts, it will be loading', async () => {
    const wrapper = shallowMount(VideosList)
    expect(wrapper.vm.loading).toBe(true)
  })
})
