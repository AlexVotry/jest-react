import { ShallowWrapper, shallow } from "enzyme";
import React, { Component } from "react";


export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
}
