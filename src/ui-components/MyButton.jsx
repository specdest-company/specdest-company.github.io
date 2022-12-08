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
import MyIcon from "./MyIcon";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MyButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Button Icon34623446": {},
        label: {},
        "Button Icon34623448": {},
        Button: {},
        MyButton: {},
      },
      variantValues: { icon: "none" },
    },
    {
      overrides: {
        "Button Icon34623446": { display: "block" },
        label: {},
        "Button Icon34623448": {},
        Button: {},
        MyButton: {},
      },
      variantValues: { icon: "left" },
    },
    {
      overrides: {
        "Button Icon34623446": {},
        label: {},
        "Button Icon34623448": { display: "block" },
        Button: {},
        MyButton: {},
      },
      variantValues: { icon: "right" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="33px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "MyButton")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="5px 11px 5px 11px"
        backgroundColor="rgba(4,125,149,1)"
        display="flex"
        {...getOverrideProps(overrides, "Button")}
      >
        <MyIcon
          width="14px"
          height="14px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "Button Icon34623446")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Primary Button"
          {...getOverrideProps(overrides, "label")}
        ></Text>
        <MyIcon
          width="14px"
          height="14px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "Button Icon34623448")}
        ></MyIcon>
      </Flex>
    </Flex>
  );
}
