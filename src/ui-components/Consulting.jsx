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
import SideImage from "./SideImage";
export default function Consulting(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        SideImage1: {},
        "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30B5\u30FC\u30D3\u30B9":
          {},
        "Consult with us anytime.": {},
        "\u30D3\u30B8\u30CD\u30B9\u306E\u5909\u9769\u306F\u56F0\u96E3\u3067\u3059\u3002\u3057\u304B\u3057\u305D\u3053\u304B\u3089\u5F15\u304D\u51FA\u3055\u308C\u308B\u4FA1\u5024\u3092\u7BA1\u7406\u3057\u3001\u5B9F\u73FE\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002Professional Services\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u3088\u3063\u3066\u3001\u30EA\u30B9\u30AF\u3092\u524A\u6E1B\u3057\u3001\u6210\u679C\u3092\u6700\u5927\u5316\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30C0\u30D7\u30B7\u30E7\u30F3\u3092\u4FC3\u9032\u3067\u304D\u307E\u3059\u3002 \u5909\u9769\u306E\u6210\u529F\u3068\u306F\u3001\u5B9F\u88C5\u3060\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30AD\u30CA\u30AF\u30B7\u30B9\u306F\u3001\u3042\u3089\u3086\u308B\u30EC\u30D9\u30EB\u306E\u4F01\u696D\u3092\u5BFE\u8C61\u3068\u3057\u305F\u5F37\u56FA\u306A\u30A8\u30F3\u30B2\u30FC\u30B8\u30E1\u30F3\u30C8\u6226\u7565\u306B\u3088\u3063\u3066\u3001\u304A\u5BA2\u69D8\u304C\u6BB5\u968E\u7684\u306B\u6210\u529F\u3092\u304A\u3055\u3081\u3001\u30B5\u30D7\u30E9\u30A4\u30C1\u30A7\u30FC\u30F3\u3078\u306E\u6295\u8CC7\u304B\u3089\u6700\u5927\u306E\u53CE\u76CA\u3092\u5F97\u3089\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002":
          {},
        "Frame 1": {},
        SideImage2: {},
        Consulting: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        SideImage1: {
          display: "none",
          width: "unset",
          height: "unset",
          alignSelf: "stretch",
        },
        "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30B5\u30FC\u30D3\u30B9":
          { textAlign: "left" },
        "Consult with us anytime.": { textAlign: "left" },
        "\u30D3\u30B8\u30CD\u30B9\u306E\u5909\u9769\u306F\u56F0\u96E3\u3067\u3059\u3002\u3057\u304B\u3057\u305D\u3053\u304B\u3089\u5F15\u304D\u51FA\u3055\u308C\u308B\u4FA1\u5024\u3092\u7BA1\u7406\u3057\u3001\u5B9F\u73FE\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002Professional Services\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u3088\u3063\u3066\u3001\u30EA\u30B9\u30AF\u3092\u524A\u6E1B\u3057\u3001\u6210\u679C\u3092\u6700\u5927\u5316\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30C0\u30D7\u30B7\u30E7\u30F3\u3092\u4FC3\u9032\u3067\u304D\u307E\u3059\u3002 \u5909\u9769\u306E\u6210\u529F\u3068\u306F\u3001\u5B9F\u88C5\u3060\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30AD\u30CA\u30AF\u30B7\u30B9\u306F\u3001\u3042\u3089\u3086\u308B\u30EC\u30D9\u30EB\u306E\u4F01\u696D\u3092\u5BFE\u8C61\u3068\u3057\u305F\u5F37\u56FA\u306A\u30A8\u30F3\u30B2\u30FC\u30B8\u30E1\u30F3\u30C8\u6226\u7565\u306B\u3088\u3063\u3066\u3001\u304A\u5BA2\u69D8\u304C\u6BB5\u968E\u7684\u306B\u6210\u529F\u3092\u304A\u3055\u3081\u3001\u30B5\u30D7\u30E9\u30A4\u30C1\u30A7\u30FC\u30F3\u3078\u306E\u6295\u8CC7\u304B\u3089\u6700\u5927\u306E\u53CE\u76CA\u3092\u5F97\u3089\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002":
          { textAlign: "left" },
        "Frame 1": {
          height: "577px",
          justifyContent: "center",
          alignItems: "center",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        SideImage2: {
          display: "flex",
          width: "unset",
          height: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
          alignSelf: "stretch",
        },
        Consulting: {
          gap: "32px",
          direction: "row",
          height: "577px",
          padding: "32px 32px 32px 32px",
        },
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
      gap="48px"
      direction="column"
      width="980px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="39px 32px 39px 32px"
      display="flex"
      {...getOverrideProps(overrides, "Consulting")}
      {...rest}
    >
      <SideImage
        display="flex"
        gap="10px"
        direction="column"
        width="200px"
        height="200px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        imageName="consulting"
        {...getOverrideProps(overrides, "SideImage1")}
      ></SideImage>
      <Flex
        gap="36px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="55px"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="プロフェッショナルサービス"
          {...getOverrideProps(
            overrides,
            "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30B5\u30FC\u30D3\u30B9"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="700"
          color="rgba(30,184,190,1)"
          lineHeight="55px"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Consult with us anytime."
          {...getOverrideProps(overrides, "Consult with us anytime.")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="19.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ビジネスの変革は困難です。しかしそこから引き出される価値を管理し、実現することはできます。Professional Servicesのサポートによって、リスクを削減し、成果を最大化し、ユーザーアダプションを促進できます。 変革の成功とは、実装だけではありません。キナクシスは、あらゆるレベルの企業を対象とした強固なエンゲージメント戦略によって、お客様が段階的に成功をおさめ、サプライチェーンへの投資から最大の収益を得られるようにします。"
          {...getOverrideProps(
            overrides,
            "\u30D3\u30B8\u30CD\u30B9\u306E\u5909\u9769\u306F\u56F0\u96E3\u3067\u3059\u3002\u3057\u304B\u3057\u305D\u3053\u304B\u3089\u5F15\u304D\u51FA\u3055\u308C\u308B\u4FA1\u5024\u3092\u7BA1\u7406\u3057\u3001\u5B9F\u73FE\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002Professional Services\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u3088\u3063\u3066\u3001\u30EA\u30B9\u30AF\u3092\u524A\u6E1B\u3057\u3001\u6210\u679C\u3092\u6700\u5927\u5316\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30C0\u30D7\u30B7\u30E7\u30F3\u3092\u4FC3\u9032\u3067\u304D\u307E\u3059\u3002 \u5909\u9769\u306E\u6210\u529F\u3068\u306F\u3001\u5B9F\u88C5\u3060\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30AD\u30CA\u30AF\u30B7\u30B9\u306F\u3001\u3042\u3089\u3086\u308B\u30EC\u30D9\u30EB\u306E\u4F01\u696D\u3092\u5BFE\u8C61\u3068\u3057\u305F\u5F37\u56FA\u306A\u30A8\u30F3\u30B2\u30FC\u30B8\u30E1\u30F3\u30C8\u6226\u7565\u306B\u3088\u3063\u3066\u3001\u304A\u5BA2\u69D8\u304C\u6BB5\u968E\u7684\u306B\u6210\u529F\u3092\u304A\u3055\u3081\u3001\u30B5\u30D7\u30E9\u30A4\u30C1\u30A7\u30FC\u30F3\u3078\u306E\u6295\u8CC7\u304B\u3089\u6700\u5927\u306E\u53CE\u76CA\u3092\u5F97\u3089\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002"
          )}
        ></Text>
      </Flex>
      <SideImage
        display="none"
        gap="10px"
        direction="column"
        width="200px"
        height="200px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        imageName="consulting"
        {...getOverrideProps(overrides, "SideImage2")}
      ></SideImage>
    </Flex>
  );
}
