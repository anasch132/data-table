import { shallowMount } from "@vue/test-utils";
import TableBody from "@/components/TableBody.vue";

describe("TableBody.vue", () => {
  it("Should be rendred", () => {
    let headers = [
      {
        text: "test1",
        value: "test1",
        id: "test1",
      },
      {
        text: "test2",
        value: "test2",
        id: "test2",
      },
      {
        text: "test3",
        value: "test3",
        id: "test3",
      },
    ];
    let tbody = [
      {
        test1: "dumb data for test 1",
        test2: "dumb data for test 1",
        test3: "dumb data for test 1",
      },
    ];
    const wrapper = shallowMount(TableBody, {
      propsData: { headers, tbody },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
