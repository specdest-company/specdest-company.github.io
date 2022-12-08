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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function IconButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Button Icon34623450": {},
        label: {},
        "Button Icon34623452": {},
        Button: {},
        IconButton: {},
      },
      variantValues: { type: "primary" },
    },
    {
      overrides: {
        "Button Icon34623450": {},
        label: {},
        "Button Icon34623452": {},
        Button: { backgroundColor: "rgba(255,255,255,1)" },
        IconButton: {},
      },
      variantValues: { type: "link" },
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
      {...getOverrideProps(overrides, "IconButton")}
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
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "Button Icon34623450")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="left"
          display="none"
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
        <Icon
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
          type="none"
          fontSize="14px"
          {...getOverrideProps(overrides, "Button Icon34623452")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
