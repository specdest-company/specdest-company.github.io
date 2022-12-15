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
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
export default function ContactUs(props) {
  const { form, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        TopNavBar: {},
        "\u60C5\u5831\u3092\u3054\u5165\u529B\u306E\u4E0A\u3001 \u300C\u9001\u4FE1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002":
          {},
        ContactUsTop: {},
        "\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0": {},
        ContactUsHeader: {},
        FormSlot: {},
        Form: {},
        "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066":
          {},
        PolicyText: {},
        PolicyTextWrapper: {},
        ContactUsFormWrapper: {},
        ContactUsBody: {},
        ContactWrapper: {},
        ContactRounder: {},
        Footer: {},
        ContactUs: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        TopNavBar: { breakpoint: "medium" },
        "\u60C5\u5831\u3092\u3054\u5165\u529B\u306E\u4E0A\u3001 \u300C\u9001\u4FE1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002":
          { fontSize: "36px", letterSpacing: "0.21px" },
        ContactUsTop: {},
        "\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0": {
          fontSize: "36px",
          letterSpacing: "0.21px",
          shrink: "0",
        },
        ContactUsHeader: {},
        FormSlot: { direction: "row" },
        Form: {},
        "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066":
          { fontSize: "36px", letterSpacing: "0.21px" },
        PolicyText: { fontSize: "24px", letterSpacing: "0.09px" },
        PolicyTextWrapper: {},
        ContactUsFormWrapper: {},
        ContactUsBody: { padding: "32px 32px 32px 32px" },
        ContactWrapper: { borderRadius: "50px" },
        ContactRounder: {},
        Footer: { breakpoint: "medium" },
        ContactUs: { padding: "0px 32px 0px 32px" },
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
      gap="0"
      direction="column"
      width="962px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 16px 0px 16px"
      backgroundColor="rgba(17,23,39,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "ContactUs")}
    >
      <TopNavBar
        display="flex"
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
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 0px 40px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ContactUsTop")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="52.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
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
          children="情報をご入力の上、&#xA;「送信する」ボタンを押してください。"
          {...getOverrideProps(
            overrides,
            "\u60C5\u5831\u3092\u3054\u5165\u529B\u306E\u4E0A\u3001 \u300C\u9001\u4FE1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
          )}
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
        padding="16px 0px 16px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ContactRounder")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(250,250,250,1)"
          display="flex"
          {...getOverrideProps(overrides, "ContactWrapper")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="21px 0px 21px 0px"
            backgroundColor="rgba(30,184,190,1)"
            display="flex"
            {...getOverrideProps(overrides, "ContactUsHeader")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="52.5px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.09px"
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
              children="お問い合わせフォーム"
              {...getOverrideProps(
                overrides,
                "\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="12px 12px 12px 12px"
            display="flex"
            {...getOverrideProps(overrides, "ContactUsBody")}
          >
            <Flex
              gap="37px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "ContactUsFormWrapper")}
            >
              <Flex
                gap="0"
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
                children={form}
                {...getOverrideProps(overrides, "Form")}
              ></Flex>
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="700"
                color="rgba(30,184,190,1)"
                lineHeight="52.5px"
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
                children="個人情報の取り扱いについて"
                {...getOverrideProps(
                  overrides,
                  "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066"
                )}
              ></Text>
              <Flex
                gap="16px"
                direction="row"
                width="unset"
                height="300px"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="20px"
                padding="16px 16px 16px 16px"
                backgroundColor="rgba(217,217,217,1)"
                display="flex"
                {...getOverrideProps(overrides, "PolicyTextWrapper")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="20px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
                  lineHeight="34px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.05px"
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
                  children="個人情報の定義&#xA;個人情報とは、個人に関する情報であり、お名前、生年月日、性別、電話番号、電子メールアドレス、職業、勤務先等、特定の個人を識別し得る情報をいいます。&#xA;個人情報の収集・利用&#xA;当社は、以下の目的のため、その範囲内においてのみ、個人情報を収集・利用いたします。 当社による個人情報の収集・利用は、お客様の自発的な提供によるものであり、お客様が個人情報を提供された場合は、当社が本方針に則って個人情報を利用することをお客様が許諾したものとします。&#xA;個人情報の第三者提供&#xA;当社は、法令に基づく場合等正当な理由によらない限り、事前に本人の同意を得ることなく、個人情報を第三者に開示・提供することはありません。&#xA;個人情報の管理&#xA;当社は、個人情報の漏洩、滅失、毀損等を防止するために、個人情報保護管理責任者を設置し、十分な安全保護に努め、また、個人情報を正確に、また最新なものに保つよう、お預かりした個人情報の適切な管理を行います。&#xA;情報内容の照会、修正または削除&#xA;当社は、お客様が当社にご提供いただいた個人情報の照会、修正または削除を希望される場合は、ご本人であることを確認させていただいたうえで、合理的な範囲ですみやかに対応させていただきます。"
                  {...getOverrideProps(overrides, "PolicyText")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer
        display="flex"
        gap="30px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        breakpoint="base"
        {...getOverrideProps(overrides, "Footer")}
      ></Footer>
    </Flex>
  );
}
