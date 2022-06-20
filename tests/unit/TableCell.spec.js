import { shallowMount } from "@vue/test-utils";
import TableCell from "@/components/TableCell.vue";

describe("TableCell.vue", () => {
  it("Should be rendred", () => {
    let classes = ["bg-red-200"];
    let value = "test-value";
    let name = "test-name";
    let editable = false;

    const wrapper = shallowMount(TableCell, {
      propsData: { classes, value, name, editable },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("Should have the prop classes", () => {
    let classes = ["bg-red-200"];
    let value = "test-value";
    let name = "test-name";
    let editable = false;

    const wrapper = shallowMount(TableCell, {
      propsData: { classes, value, name, editable },
    });
    const cell = wrapper.get("[data-test=td-test-name]");
    expect(cell.classes("bg-red-200")).toBe(true);
  });

  it("Should emit en event after the change event is done", async () => {
    let classes = ["bg-red-200"];
    let value = "test-value";
    let name = "test-name";
    let editable = true;

    const wrapper = shallowMount(TableCell, {
      propsData: { classes, value, name, editable },
    });
    const cell = wrapper.get("[data-test=td-test-name]");
    await cell.trigger("click");
    await cell.get('input').setValue("test-value-1");
    await cell.get('input').trigger("change");

    expect(cell.emitted()).toHaveProperty('blurInput');
  });

  it("Should not have the input field when editable is false", async () => {
    let classes = ["bg-red-200"];
    let value = "test-value";
    let name = "test-name";
    let editable = false;

    const wrapper = shallowMount(TableCell, {
      propsData: { classes, value, name, editable },
    });
    const cell = wrapper.get("[data-test=td-test-name]");
    await cell.trigger("click");

    expect(cell.findComponent('input').exists()).toBe(false);
  });

//   it("Should have the new data set", async () => {
//     let classes = ["bg-red-200"];
//     let value = "test-value";
//     let name = "test-name";
//     let editable = true;

//     const wrapper = shallowMount(TableCell, {
//       propsData: { classes, value, name, editable },
//     });

//     const cell = wrapper.get("[data-test=td-test-name]");
//     await cell.trigger("click");
//     await cell.get('input').setValue("test-value-1");
//     await cell.get('input').trigger("change");
    
//     expect(cell.get('div').text()).toContain("test-value-1");

//   })

  //   it("Should ")
});
