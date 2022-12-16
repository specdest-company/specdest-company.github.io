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
import { Flex, Text, View, useBreakpointValue } from "@aws-amplify/ui-react";
import TopNavBar from "./TopNavBar";
import ContactUsButton from "./ContactUsButton";
export default function RecruitContent(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        TopNavBar: {},
        "WE\u2019RE": {},
        HIRING: {},
        "Frame 135471866": {},
        positionTitle: {},
        "\u5FC5\u9808\u30B9\u30AD\u30EB/\u7D4C\u9A13": {},
        "\u30FBJavascript\u306B\u304A\u3051\u308B\u8A2D\u8A08/\u958B\u767A/\u904B\u7528\u7D4C\u9A13 \u30FBWeb\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30FB\u904B\u7528\u7D4C\u9A13 \u30FBGit\u3092\u5229\u7528\u3057\u305F\u958B\u767A\u7D4C\u9A13":
          {},
        "Frame 135472133": {},
        "\u6C42\u3081\u308B\u4EBA\u7269\u50CF": {},
        "\u30FB\u30B3\u30FC\u30C9\u66F8\u304F\u306E\u304C\u597D\u304D\u306A\u65B9 \u30FB\u30A8\u30F3\u30B8\u30CB\u30A2\u30B9\u30AD\u30EB\u3092\u78E8\u304D\u305F\u3044\u4EBA \u30FB\u524D\u5411\u304D\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u3051\u308B\u65B9":
          {},
        "Frame 235472136": {},
        "Frame 335472132": {},
        "\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB/\u7D4C\u9A13": {},
        "\u30FBReactJs\u3092\u7528\u3044\u305F\u958B\u767A\u7D4C\u9A13 \u30FB\u5186\u6ED1\u306B\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3068\u3063\u3066\u696D\u52D9\u3092\u63A8\u9032\u3067\u304D\u308B\u3053\u3068":
          {},
        "Frame 135472140": {},
        "\u30AD\u30E3\u30EA\u30A2\u30B9\u30C6\u30C3\u30D7": {},
        "\u30FB\u6B21\u671F\u30A8\u30F3\u30B8\u30CB\u30A2\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u5019\u88DC \u30FB\u30BF\u30A4\u30C8\u30EB\u30A8\u30F3\u30B8\u30CB\u30A2\u5019\u88DC \u30FB\u30A2\u30CA\u30EA\u30B7\u30B9\uFF08\u5206\u6790\u30C1\u30FC\u30E0\uFF09\u3084\u30A4\u30F3\u30D5\u30E9\u306A\u3069\u8208\u5473\u5E0C\u671B\u304C\u3042\u308C\u3070\u7570\u52D5\u304C\u53EF\u80FD":
          {},
        "Frame 235472143": {},
        "Frame 335472139": {},
        "Frame 135471872": {},
        "Frame 135471870": {},
        ContactUsButton: {},
        "Frame 235471869": {},
        Spacer: {},
        RecruitContent: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        TopNavBar: { breakpoint: "medium" },
        "WE\u2019RE": {},
        HIRING: {},
        "Frame 135471866": {},
        positionTitle: {
          children:
            "\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0F\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u53EF",
        },
        "\u5FC5\u9808\u30B9\u30AD\u30EB/\u7D4C\u9A13": {},
        "\u30FBJavascript\u306B\u304A\u3051\u308B\u8A2D\u8A08/\u958B\u767A/\u904B\u7528\u7D4C\u9A13 \u30FBWeb\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30FB\u904B\u7528\u7D4C\u9A13 \u30FBGit\u3092\u5229\u7528\u3057\u305F\u958B\u767A\u7D4C\u9A13":
          {},
        "Frame 135472133": {},
        "\u6C42\u3081\u308B\u4EBA\u7269\u50CF": {},
        "\u30FB\u30B3\u30FC\u30C9\u66F8\u304F\u306E\u304C\u597D\u304D\u306A\u65B9 \u30FB\u30A8\u30F3\u30B8\u30CB\u30A2\u30B9\u30AD\u30EB\u3092\u78E8\u304D\u305F\u3044\u4EBA \u30FB\u524D\u5411\u304D\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u3051\u308B\u65B9":
          {},
        "Frame 235472136": {},
        "Frame 335472132": { width: "unset" },
        "\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB/\u7D4C\u9A13": {},
        "\u30FBReactJs\u3092\u7528\u3044\u305F\u958B\u767A\u7D4C\u9A13 \u30FB\u5186\u6ED1\u306B\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3068\u3063\u3066\u696D\u52D9\u3092\u63A8\u9032\u3067\u304D\u308B\u3053\u3068":
          {},
        "Frame 135472140": {},
        "\u30AD\u30E3\u30EA\u30A2\u30B9\u30C6\u30C3\u30D7": {},
        "\u30FB\u6B21\u671F\u30A8\u30F3\u30B8\u30CB\u30A2\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u5019\u88DC \u30FB\u30BF\u30A4\u30C8\u30EB\u30A8\u30F3\u30B8\u30CB\u30A2\u5019\u88DC \u30FB\u30A2\u30CA\u30EA\u30B7\u30B9\uFF08\u5206\u6790\u30C1\u30FC\u30E0\uFF09\u3084\u30A4\u30F3\u30D5\u30E9\u306A\u3069\u8208\u5473\u5E0C\u671B\u304C\u3042\u308C\u3070\u7570\u52D5\u304C\u53EF\u80FD":
          {},
        "Frame 235472143": {},
        "Frame 335472139": { width: "unset" },
        "Frame 135471872": { direction: "row" },
        "Frame 135471870": {},
        ContactUsButton: {},
        "Frame 235471869": {},
        Spacer: {},
        RecruitContent: {},
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
      gap="36px"
      direction="column"
      width="721px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "RecruitContent")}
    >
      <TopNavBar
        display="none"
        gap="20px"
        direction="row"
        width="unset"
        height="64px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 32px 24px 32px"
        breakpoint="base"
        {...getOverrideProps(overrides, "TopNavBar")}
      ></TopNavBar>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="69px 0px 69px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 135471866")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="400"
          color="rgba(30,184,190,1)"
          lineHeight="77.45454406738281px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.49px"
          width="193px"
          height="77px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="WE’RE"
          {...getOverrideProps(overrides, "WE\u2019RE")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="96px"
          fontWeight="700"
          color="rgba(30,184,190,1)"
          lineHeight="116.18181610107422px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.81px"
          width="337px"
          height="116px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="HIRING"
          {...getOverrideProps(overrides, "HIRING")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 235471869")}
      >
        <Flex
          gap="39px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 0px 16px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 135471870")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="700"
            color="rgba(30,184,190,1)"
            lineHeight="38.727272033691406px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.17px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="エンジニア&#xA;／リモートワーク可"
            {...getOverrideProps(overrides, "positionTitle")}
          ></Text>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 135471872")}
          >
            <Flex
              gap="10px"
              direction="column"
              width="375.5px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 335472132")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 135472133")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="700"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="必須スキル/経験"
                  {...getOverrideProps(
                    overrides,
                    "\u5FC5\u9808\u30B9\u30AD\u30EB/\u7D4C\u9A13"
                  )}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="255px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="・Javascriptにおける設計/開発/運用経験&#xA;・Webサービスの開発・運用経験&#xA;・Gitを利用した開発経験&#xA;"
                  {...getOverrideProps(
                    overrides,
                    "\u30FBJavascript\u306B\u304A\u3051\u308B\u8A2D\u8A08/\u958B\u767A/\u904B\u7528\u7D4C\u9A13 \u30FBWeb\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30FB\u904B\u7528\u7D4C\u9A13 \u30FBGit\u3092\u5229\u7528\u3057\u305F\u958B\u767A\u7D4C\u9A13"
                  )}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 235472136")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="700"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="求める人物像"
                  {...getOverrideProps(
                    overrides,
                    "\u6C42\u3081\u308B\u4EBA\u7269\u50CF"
                  )}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="255px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="・コード書くのが好きな方&#xA;・エンジニアスキルを磨きたい人&#xA;・前向きに取り組んでいける方"
                  {...getOverrideProps(
                    overrides,
                    "\u30FB\u30B3\u30FC\u30C9\u66F8\u304F\u306E\u304C\u597D\u304D\u306A\u65B9 \u30FB\u30A8\u30F3\u30B8\u30CB\u30A2\u30B9\u30AD\u30EB\u3092\u78E8\u304D\u305F\u3044\u4EBA \u30FB\u524D\u5411\u304D\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u3051\u308B\u65B9"
                  )}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="375.5px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 335472139")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 135472140")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="700"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="歓迎するスキル/経験"
                  {...getOverrideProps(
                    overrides,
                    "\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB/\u7D4C\u9A13"
                  )}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="255px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="・ReactJsを用いた開発経験&#xA;・円滑にコミュニケーションをとって業務を推進できること"
                  {...getOverrideProps(
                    overrides,
                    "\u30FBReactJs\u3092\u7528\u3044\u305F\u958B\u767A\u7D4C\u9A13 \u30FB\u5186\u6ED1\u306B\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3068\u3063\u3066\u696D\u52D9\u3092\u63A8\u9032\u3067\u304D\u308B\u3053\u3068"
                  )}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 235472143")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="700"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="キャリアステップ"
                  {...getOverrideProps(
                    overrides,
                    "\u30AD\u30E3\u30EA\u30A2\u30B9\u30C6\u30C3\u30D7"
                  )}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="22.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0px"
                  width="255px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="・次期エンジニアマネージャー候補&#xA;・タイトルエンジニア候補&#xA;・アナリシス（分析チーム）やインフラなど興味希望があれば異動が可能"
                  {...getOverrideProps(
                    overrides,
                    "\u30FB\u6B21\u671F\u30A8\u30F3\u30B8\u30CB\u30A2\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u5019\u88DC \u30FB\u30BF\u30A4\u30C8\u30EB\u30A8\u30F3\u30B8\u30CB\u30A2\u5019\u88DC \u30FB\u30A2\u30CA\u30EA\u30B7\u30B9\uFF08\u5206\u6790\u30C1\u30FC\u30E0\uFF09\u3084\u30A4\u30F3\u30D5\u30E9\u306A\u3069\u8208\u5473\u5E0C\u671B\u304C\u3042\u308C\u3070\u7570\u52D5\u304C\u53EF\u80FD"
                  )}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
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
      <View
        width="unset"
        height="166px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Spacer")}
      ></View>
    </Flex>
  );
}
