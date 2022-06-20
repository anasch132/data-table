import { shallowMount } from "@vue/test-utils";
import TableHeader from "@/components/TableHeader.vue";

describe("TableHeader.vue", () => {
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
    const wrapper = shallowMount(TableHeader, {
      propsData: { headers },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("Should have the prop classes", () => {
    let headers = [
      {
        text: "test1",
        value: "test1",
        id: "test1",
        __classes__: ["bg-red-200"],
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
    const wrapper = shallowMount(TableHeader, {
        propsData: { headers },
      });
      const head = wrapper.get('[data-test=head-test1]')
      expect(head.classes('bg-red-200')).toBe(true);
  });

//   it("Should ")
});
