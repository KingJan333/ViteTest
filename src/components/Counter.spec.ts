// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import Counter from "./Counter.vue";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  const wrapper = mount(Counter);
  it("Отрисовка компонента", () => {
    expect(wrapper.html()).toContain("Clicks: 0");
  });

  it("Обновление значение клика", async () => {
      await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain("Clicks: 1")
  });
});
