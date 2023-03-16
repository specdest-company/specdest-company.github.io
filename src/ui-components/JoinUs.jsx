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
import { Flex, Icon, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import ContactUsButton from "./ContactUsButton";
export default function JoinUs(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u30C1\u30FC\u30E0\u3078\u306E\u53C2\u52A0": {},
        "Line 1": {},
        "Frame 11": {},
        "\u7D20\u6674\u3089\u3057\u3044\u4F1A\u793E\u304A\u3088\u3073\u6587\u5316\u3092\u69CB\u7BC9\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u8A87\u308A\u306B\u601D\u3063\u3066\u3044\u307E\u3059\u3002\u610F\u6B32\u3092\u63BB\u304D\u7ACB\u3066\u3001\u7D20\u65E9\u3044\u6210\u9577\u3092\u4FC3\u3057\u3001\u5909\u5316\u3092\u3082\u305F\u3089\u3057\u3066\u304F\u308C\u308B\u3002\u305D\u3093\u306A\u30C1\u30FC\u30E0\u306B\u3042\u306A\u305F\u3082\u53C2\u52A0\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F":
          {},
        ContactUsButton: {},
        JoinUs: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "\u30C1\u30FC\u30E0\u3078\u306E\u53C2\u52A0": {},
        "Line 1": {},
        "Frame 11": {},
        "\u7D20\u6674\u3089\u3057\u3044\u4F1A\u793E\u304A\u3088\u3073\u6587\u5316\u3092\u69CB\u7BC9\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u8A87\u308A\u306B\u601D\u3063\u3066\u3044\u307E\u3059\u3002\u610F\u6B32\u3092\u63BB\u304D\u7ACB\u3066\u3001\u7D20\u65E9\u3044\u6210\u9577\u3092\u4FC3\u3057\u3001\u5909\u5316\u3092\u3082\u305F\u3089\u3057\u3066\u304F\u308C\u308B\u3002\u305D\u3093\u306A\u30C1\u30FC\u30E0\u306B\u3042\u306A\u305F\u3082\u53C2\u52A0\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F":
          {},
        ContactUsButton: {},
        JoinUs: { padding: "32px 32px 32px 32px" },
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
      gap="59px"
      direction="column"
      width="980px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 24px"
      display="flex"
      {...getOverrideProps(overrides, "JoinUs")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="79px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 11")}
      >
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.21px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="チームへの参加"
          {...getOverrideProps(
            overrides,
            "\u30C1\u30FC\u30E0\u3078\u306E\u53C2\u52A0"
          )}
        ></Text>
        <Icon
          width="100px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 100, height: 1 }}
          paths={[
            {
              d: "M0 0L100 0L100 -4L0 -4L0 0Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 4,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="47.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.09px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="素晴らしい会社および文化を構築していることを誇りに思っています。意欲を掻き立て、素早い成長を促し、変化をもたらしてくれる。そんなチームにあなたも参加してみませんか？"
        {...getOverrideProps(
          overrides,
          "\u7D20\u6674\u3089\u3057\u3044\u4F1A\u793E\u304A\u3088\u3073\u6587\u5316\u3092\u69CB\u7BC9\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u8A87\u308A\u306B\u601D\u3063\u3066\u3044\u307E\u3059\u3002\u610F\u6B32\u3092\u63BB\u304D\u7ACB\u3066\u3001\u7D20\u65E9\u3044\u6210\u9577\u3092\u4FC3\u3057\u3001\u5909\u5316\u3092\u3082\u305F\u3089\u3057\u3066\u304F\u308C\u308B\u3002\u305D\u3093\u306A\u30C1\u30FC\u30E0\u306B\u3042\u306A\u305F\u3082\u53C2\u52A0\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F"
        )}
      ></Text>
      <ContactUsButton
        width="234px"
        height="71px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="big"
        {...getOverrideProps(overrides, "ContactUsButton")}
      ></ContactUsButton>
    </Flex>
  );
}
