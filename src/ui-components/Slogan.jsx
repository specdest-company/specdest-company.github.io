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
export default function Slogan(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u5411\u4E0A\u5FC3\u3068\u8AA0\u5B9F\u3055\u3001\u4EBA\u3005\u3068\u306E\u7E4B\u304C\u308A\u3092\u5927\u5207\u306B\u3057\u3001 \u559C\u3073\u30FB\u611F\u52D5\u30FB\u5B89\u5FC3\u305D\u3057\u3066\u672A\u6765\u3092\u3001 \u30B7\u30B9\u30C6\u30E0\u3068\u5171\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002":
          {},
        Slogan: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "\u5411\u4E0A\u5FC3\u3068\u8AA0\u5B9F\u3055\u3001\u4EBA\u3005\u3068\u306E\u7E4B\u304C\u308A\u3092\u5927\u5207\u306B\u3057\u3001 \u559C\u3073\u30FB\u611F\u52D5\u30FB\u5B89\u5FC3\u305D\u3057\u3066\u672A\u6765\u3092\u3001 \u30B7\u30B9\u30C6\u30E0\u3068\u5171\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002":
          { fontSize: "36px", letterSpacing: "0.21px", shrink: "0" },
        Slogan: {},
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
      gap="10px"
      direction="row"
      width="980px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="34px 0px 34px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Slogan")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="58px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.03px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="向上心と誠実さ、人々との繋がりを大切にし、&#xA;喜び・感動・安心そして未来を、&#xA;システムと共に提供します。"
        {...getOverrideProps(
          overrides,
          "\u5411\u4E0A\u5FC3\u3068\u8AA0\u5B9F\u3055\u3001\u4EBA\u3005\u3068\u306E\u7E4B\u304C\u308A\u3092\u5927\u5207\u306B\u3057\u3001 \u559C\u3073\u30FB\u611F\u52D5\u30FB\u5B89\u5FC3\u305D\u3057\u3066\u672A\u6765\u3092\u3001 \u30B7\u30B9\u30C6\u30E0\u3068\u5171\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002"
        )}
      ></Text>
    </Flex>
  );
}
