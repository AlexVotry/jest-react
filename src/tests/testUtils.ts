import { ShallowWrapper, shallow } from "enzyme";
import React, { Component } from "react";


export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
}
