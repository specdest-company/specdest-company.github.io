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
import ServiceIcon from "./ServiceIcon";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ServiceCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { ServiceIcon: {}, title: {}, detail: {}, ServiceCard: {} },
      variantValues: { type: "development" },
    },
    {
      overrides: {
        ServiceIcon: { property1: "consulting" },
        title: {
          children:
            "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30B5\u30FC\u30D3\u30B9",
        },
        detail: {
          children:
            "\u73FE\u5728\u306E\u696D\u52D9\u3067\u306F\u3001\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B7\u30B9\u30C6\u30E0\u304C\u4E3B\u5E79\u3068\u306A\u3063\u3066\u304D\u307E\u3057\u305F\u3002\u69D8\u3005\u306B\u9032\u5316\u3059\u308BIT\u6A5F\u5668\u3092\u7D44\u5408\u305B\u3001\u5FA1\u793E\u306B\u6700\u9069\u306A\u30B7\u30B9\u30C6\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u5F53\u793E\u3067\u306F\u3001\u73FE\u4EE3IT\u6280\u8853\u3092\u99C6\u4F7F\u3057\u3001\u304A\u5BA2\u69D8\u306B\u6700\u9069\u306A\u696D\u52D9\u6539\u5584\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u6848\u81F4\u3057\u307E\u3059\u3002",
        },
        ServiceCard: {},
      },
      variantValues: { type: "consulting" },
    },
    {
      overrides: {
        ServiceIcon: { property1: "automation" },
        title: {
          children: "\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u81EA\u52D5\u5316",
        },
        detail: {
          children:
            "\u6280\u8853\u3092\u4F7F\u3063\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u4F5C\u696D\u3084\u5B9A\u578B\u696D\u52D9\u3092\u3001100%\u5B8C\u5168\u306B\u81EA\u52D5\u5316\u3057\u307E\u3059\u3002\u30D1\u30BD\u30B3\u30F3\u3092\u4F7F\u3063\u305F\u30C7\u30FC\u30BF\u306E\u53CE\u96C6\u3001\u7BA1\u7406\u8868\u3084\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4F5C\u6210\u306A\u3069\u3092\u3001\u30D5\u30EB\u30AA\u30FC\u30C0\u30FC\u3067\u5168\u3066\u4EE3\u884C\u3057\u3066\u51E6\u7406\u3057\u307E\u3059\u3002\u7169\u96D1\u306A\u696D\u52D9\u3001\u30A2\u30D7\u30EA\u30FB\u30B7\u30B9\u30C6\u30E0\u3068\u9023\u643A\u3057\u305F\u96E3\u6613\u5EA6\u304C\u9AD8\u3044\u4F5C\u696D\u3082\u3001\u3059\u3079\u3066\u81EA\u52D5\u5316\u3067\u304D\u307E\u3059\u3002",
        },
        ServiceCard: {},
      },
      variantValues: { type: "automation" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="222px"
      height="321px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "ServiceCard")}
      {...rest}
    >
      <ServiceIcon
        width="128px"
        height="128px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="development"
        {...getOverrideProps(overrides, "ServiceIcon")}
      ></ServiceIcon>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(30,184,190,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="カスタムソリューション"
        {...getOverrideProps(overrides, "title")}
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
        children="様々な業務で使用される多様な制御装置やハードウエアを管理するユーザのことを考え尽くした開発。&#xA;社会インフラの基盤を支えるシステム。当社では複雑に絡み合う多様な技術を駆使し、高品質で安定性が求められる数々のシステムを手がけております。"
        {...getOverrideProps(overrides, "detail")}
      ></Text>
    </Flex>
  );
}
