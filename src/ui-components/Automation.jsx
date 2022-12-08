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
export default function Automation(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        SideImage: {},
        "\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u81EA\u52D5\u5316": {},
        "Detect, Diagnose & Save Time.": {},
        "\u6280\u8853\u3092\u4F7F\u3063\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u4F5C\u696D\u3084\u5B9A\u578B\u696D\u52D9\u3092\u3001100%\u5B8C\u5168\u306B\u81EA\u52D5\u5316\u3057\u307E\u3059\u3002\u30D1\u30BD\u30B3\u30F3\u3092\u4F7F\u3063\u305F\u30C7\u30FC\u30BF\u306E\u53CE\u96C6\u3001\u7BA1\u7406\u8868\u3084\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4F5C\u6210\u306A\u3069\u3092\u3001\u30D5\u30EB\u30AA\u30FC\u30C0\u30FC\u3067\u5168\u3066\u4EE3\u884C\u3057\u3066\u51E6\u7406\u3057\u307E\u3059\u3002\u7169\u96D1\u306A\u696D\u52D9\u3001\u30A2\u30D7\u30EA\u30FB\u30B7\u30B9\u30C6\u30E0\u3068\u9023\u643A\u3057\u305F\u96E3\u6613\u5EA6\u304C\u9AD8\u3044\u4F5C\u696D\u3082\u3001\u3059\u3079\u3066\u81EA\u52D5\u5316\u3067\u304D\u307E\u3059\u3002":
          {},
        "Frame 1": {},
        Automation: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        SideImage: {
          width: "unset",
          height: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
          alignSelf: "stretch",
        },
        "\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u81EA\u52D5\u5316": {
          textAlign: "left",
        },
        "Detect, Diagnose & Save Time.": { textAlign: "left" },
        "\u6280\u8853\u3092\u4F7F\u3063\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u4F5C\u696D\u3084\u5B9A\u578B\u696D\u52D9\u3092\u3001100%\u5B8C\u5168\u306B\u81EA\u52D5\u5316\u3057\u307E\u3059\u3002\u30D1\u30BD\u30B3\u30F3\u3092\u4F7F\u3063\u305F\u30C7\u30FC\u30BF\u306E\u53CE\u96C6\u3001\u7BA1\u7406\u8868\u3084\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4F5C\u6210\u306A\u3069\u3092\u3001\u30D5\u30EB\u30AA\u30FC\u30C0\u30FC\u3067\u5168\u3066\u4EE3\u884C\u3057\u3066\u51E6\u7406\u3057\u307E\u3059\u3002\u7169\u96D1\u306A\u696D\u52D9\u3001\u30A2\u30D7\u30EA\u30FB\u30B7\u30B9\u30C6\u30E0\u3068\u9023\u643A\u3057\u305F\u96E3\u6613\u5EA6\u304C\u9AD8\u3044\u4F5C\u696D\u3082\u3001\u3059\u3079\u3066\u81EA\u52D5\u5316\u3067\u304D\u307E\u3059\u3002":
          { textAlign: "left" },
        "Frame 1": {
          height: "577px",
          alignItems: "center",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        Automation: {
          gap: "32px",
          direction: "row",
          height: "577px",
          justifyContent: "center",
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
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="39px 32px 39px 32px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "Automation")}
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
        imageType="automation"
        {...getOverrideProps(overrides, "SideImage")}
      ></SideImage>
      <Flex
        gap="36px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
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
          children="情報システム自動化"
          {...getOverrideProps(
            overrides,
            "\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u81EA\u52D5\u5316"
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
          children="Detect, Diagnose & Save Time."
          {...getOverrideProps(overrides, "Detect, Diagnose & Save Time.")}
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
          children="技術を使ってルーティン作業や定型業務を、100%完全に自動化します。パソコンを使ったデータの収集、管理表やドキュメントの作成などを、フルオーダーで全て代行して処理します。煩雑な業務、アプリ・システムと連携した難易度が高い作業も、すべて自動化できます。"
          {...getOverrideProps(
            overrides,
            "\u6280\u8853\u3092\u4F7F\u3063\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u4F5C\u696D\u3084\u5B9A\u578B\u696D\u52D9\u3092\u3001100%\u5B8C\u5168\u306B\u81EA\u52D5\u5316\u3057\u307E\u3059\u3002\u30D1\u30BD\u30B3\u30F3\u3092\u4F7F\u3063\u305F\u30C7\u30FC\u30BF\u306E\u53CE\u96C6\u3001\u7BA1\u7406\u8868\u3084\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4F5C\u6210\u306A\u3069\u3092\u3001\u30D5\u30EB\u30AA\u30FC\u30C0\u30FC\u3067\u5168\u3066\u4EE3\u884C\u3057\u3066\u51E6\u7406\u3057\u307E\u3059\u3002\u7169\u96D1\u306A\u696D\u52D9\u3001\u30A2\u30D7\u30EA\u30FB\u30B7\u30B9\u30C6\u30E0\u3068\u9023\u643A\u3057\u305F\u96E3\u6613\u5EA6\u304C\u9AD8\u3044\u4F5C\u696D\u3082\u3001\u3059\u3079\u3066\u81EA\u52D5\u5316\u3067\u304D\u307E\u3059\u3002"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
