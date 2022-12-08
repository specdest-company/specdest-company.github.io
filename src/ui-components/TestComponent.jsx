/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, View, useBreakpointValue } from "@aws-amplify/ui-react";
export default function TestComponent(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 1": {},
        "Rectangle 3": {},
        "Rectangle 2": {},
        TestComponent: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "Rectangle 1": { width: "200px" },
        "Rectangle 3": { width: "200px", display: "block" },
        "Rectangle 2": { width: "200px" },
        TestComponent: {},
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "base",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="194px"
      direction="row"
      width="988px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "TestComponent")}
    >
      <View
        width="100px"
        height="166px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <View
        width="100px"
        height="155px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        width="100px"
        height="144px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
    </Flex>
  );
}
