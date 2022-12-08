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
import {
  Flex,
  Icon,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function TopNavBar(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Logo: {},
        Vector: {},
        "ci:hamburger": {},
        "IT \u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0": {},
        "\u30B7\u30B9\u30C6\u30E0\u958B\u767A": {},
        "\u81EA\u52D5\u5316": {},
        "\u6280\u8853": {},
        "Frame 321": {},
        TopNavBar: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        Logo: {},
        Vector: {},
        "ci:hamburger": { display: "none" },
        "IT \u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0": {},
        "\u30B7\u30B9\u30C6\u30E0\u958B\u767A": {},
        "\u81EA\u52D5\u5316": {},
        "\u6280\u8853": {},
        "Frame 321": { display: "flex" },
        TopNavBar: {},
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
      gap="20px"
      direction="row"
      width="980px"
      height="64px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "TopNavBar")}
    >
      <Logo
        width="48px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ci:hamburger")}
      >
        <Icon
          width="18px"
          height="12px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 12 }}
          paths={[
            {
              d: "M18 12L0 12L0 10L18 10L18 12ZM18 7L0 7L0 5L18 5L18 7ZM18 2L0 2L0 0L18 0L18 2Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25%"
          bottom="25%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="none"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="IT コンサルティング"
          {...getOverrideProps(
            overrides,
            "IT \u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="システム開発"
          {...getOverrideProps(
            overrides,
            "\u30B7\u30B9\u30C6\u30E0\u958B\u767A"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="自動化"
          {...getOverrideProps(overrides, "\u81EA\u52D5\u5316")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="技術"
          {...getOverrideProps(overrides, "\u6280\u8853")}
        ></Text>
      </Flex>
    </Flex>
  );
}
