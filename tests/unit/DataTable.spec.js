import { shallowMount } from '@vue/test-utils'
import DataTable from '@/components/DataTable.vue'
import JsonTable from "../../src/assets/DataTable.json"

describe('DataTable.vue', () => {
  it('Should be rendred', () => {
    let summ = jest.fn().mockReturnValue('200')
    const data = JsonTable.body.map((item) => {
      if (item.key == "key3")
        return {
          ...item,
          fat: { rows: ["key1", "key2", "key4", "key5"], value: summ },
        };
      return item;
    });
    const wrapper = shallowMount(DataTable, {
      propsData: { data }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
