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
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import Technology from "./Technology";
export default function OurTechnology(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Our Technology": {},
        "Group 2": {},
        "Group 3": {},
        "Group 4": {},
        "Frame 5": {},
        OurTechnology: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "Our Technology": {},
        "Group 2": {},
        "Group 3": {},
        "Group 4": {},
        "Frame 5": {},
        OurTechnology: {},
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
      gap="30px"
      direction="column"
      width="980px"
      height="406px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="43px 101px 43px 101px"
      display="flex"
      {...getOverrideProps(overrides, "OurTechnology")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="19.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.09px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Our Technology"
        {...getOverrideProps(overrides, "Our Technology")}
      ></Text>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Technology
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Group 2")}
        ></Technology>
        <Technology
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Group 3")}
        ></Technology>
        <Technology
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Group 4")}
        ></Technology>
      </Flex>
    </Flex>
  );
}
