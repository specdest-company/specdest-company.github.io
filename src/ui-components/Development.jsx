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
export default function Development(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        SideImage: {},
        "\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3":
          {},
        "Let us hear your needs.": {},
        "\u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u3001\u9AD8\u54C1\u8CEA\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u958B\u767A\u3059\u308B\u306E\u304C\u3001\u30A4\u30F3\u30D5\u30A9\u30C6\u30C3\u30AF\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002 \u521D\u671F\u306E\u30D2\u30A2\u30EA\u30F3\u30B0\u304B\u3089\u7D0D\u54C1\u5F8C\u306E\u4FDD\u5B88\u307E\u3067\u5168\u3066\u306E\u958B\u767A\u30D5\u30A7\u30A4\u30BA\u3092\u5C02\u4EFB\u306E\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u8CAC\u4EFB\u3092\u6301\u3063\u3066\u62C5\u5F53\u3057\u307E\u3059\u3002\u4E00\u822C\u7684\u306B\u5916\u6CE8\u3059\u308B\u3053\u3068\u304C\u591A\u3044\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3082\u62C5\u5F53\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u5B9F\u65BD\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u7BA1\u7406\u3084\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F34\u306A\u3046\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u304C\u5927\u5E45\u306B\u6E1B\u308A\u3001\u6975\u3081\u3066\u52B9\u7387\u7684\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306B\u306A\u308B\u3053\u3068\u304C\u591A\u3044\u30B3\u30B9\u30C8\u306E\u4F4E\u6E1B\u3068\u77ED\u7D0D\u671F\u3001\u3055\u3089\u306B\u54C1\u8CEA\u306E\u7DAD\u6301\u304C\u7121\u7406\u306A\u304F\u5B9F\u73FE\u3057\u307E\u3059\u3002\u304A\u5BA2\u69D8\u306E\u6A5F\u5BC6\u4FDD\u6301\u306E\u89B3\u70B9\u304B\u3089\u3082\u3054\u5B89\u5FC3\u3044\u305F\u3060\u3051\u307E\u3059\u3002":
          {},
        "Frame 1": {},
        Development: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        SideImage: { height: "unset", shrink: "1", grow: "1", basis: "0" },
        "\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3": {
          textAlign: "left",
        },
        "Let us hear your needs.": { textAlign: "left" },
        "\u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u3001\u9AD8\u54C1\u8CEA\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u958B\u767A\u3059\u308B\u306E\u304C\u3001\u30A4\u30F3\u30D5\u30A9\u30C6\u30C3\u30AF\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002 \u521D\u671F\u306E\u30D2\u30A2\u30EA\u30F3\u30B0\u304B\u3089\u7D0D\u54C1\u5F8C\u306E\u4FDD\u5B88\u307E\u3067\u5168\u3066\u306E\u958B\u767A\u30D5\u30A7\u30A4\u30BA\u3092\u5C02\u4EFB\u306E\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u8CAC\u4EFB\u3092\u6301\u3063\u3066\u62C5\u5F53\u3057\u307E\u3059\u3002\u4E00\u822C\u7684\u306B\u5916\u6CE8\u3059\u308B\u3053\u3068\u304C\u591A\u3044\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3082\u62C5\u5F53\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u5B9F\u65BD\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u7BA1\u7406\u3084\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F34\u306A\u3046\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u304C\u5927\u5E45\u306B\u6E1B\u308A\u3001\u6975\u3081\u3066\u52B9\u7387\u7684\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306B\u306A\u308B\u3053\u3068\u304C\u591A\u3044\u30B3\u30B9\u30C8\u306E\u4F4E\u6E1B\u3068\u77ED\u7D0D\u671F\u3001\u3055\u3089\u306B\u54C1\u8CEA\u306E\u7DAD\u6301\u304C\u7121\u7406\u306A\u304F\u5B9F\u73FE\u3057\u307E\u3059\u3002\u304A\u5BA2\u69D8\u306E\u6A5F\u5BC6\u4FDD\u6301\u306E\u89B3\u70B9\u304B\u3089\u3082\u3054\u5B89\u5FC3\u3044\u305F\u3060\u3051\u307E\u3059\u3002":
          { textAlign: "left" },
        "Frame 1": { shrink: "1", grow: "1", basis: "0" },
        Development: { direction: "row", height: "567px" },
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
      gap="32px"
      direction="column"
      width="980px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="32px 32px 32px 32px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "Development")}
    >
      <SideImage
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="200px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        imageType="development"
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
          lineHeight="46px"
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
          children="カスタムソリューション"
          {...getOverrideProps(
            overrides,
            "\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3"
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
          children="Let us hear your needs."
          {...getOverrideProps(overrides, "Let us hear your needs.")}
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
          children="お客様のビジネスニーズに合わせて、高品質のカスタムソフトウェアを開発するのが、インフォテックのカスタムソリューションサービスです。&#xA;初期のヒアリングから納品後の保守まで全ての開発フェイズを専任のエンジニアが責任を持って担当します。一般的に外注することが多いプログラミングも担当エンジニアが実施します。&#xA;このため管理やコミュニケーションに伴なうオーバーヘッドが大幅に減り、極めて効率的なソフトウェア開発が可能になります。トレードオフになることが多いコストの低減と短納期、さらに品質の維持が無理なく実現します。お客様の機密保持の観点からもご安心いただけます。"
          {...getOverrideProps(
            overrides,
            "\u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u3001\u9AD8\u54C1\u8CEA\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u958B\u767A\u3059\u308B\u306E\u304C\u3001\u30A4\u30F3\u30D5\u30A9\u30C6\u30C3\u30AF\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002 \u521D\u671F\u306E\u30D2\u30A2\u30EA\u30F3\u30B0\u304B\u3089\u7D0D\u54C1\u5F8C\u306E\u4FDD\u5B88\u307E\u3067\u5168\u3066\u306E\u958B\u767A\u30D5\u30A7\u30A4\u30BA\u3092\u5C02\u4EFB\u306E\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u8CAC\u4EFB\u3092\u6301\u3063\u3066\u62C5\u5F53\u3057\u307E\u3059\u3002\u4E00\u822C\u7684\u306B\u5916\u6CE8\u3059\u308B\u3053\u3068\u304C\u591A\u3044\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3082\u62C5\u5F53\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u5B9F\u65BD\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u7BA1\u7406\u3084\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F34\u306A\u3046\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u304C\u5927\u5E45\u306B\u6E1B\u308A\u3001\u6975\u3081\u3066\u52B9\u7387\u7684\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306B\u306A\u308B\u3053\u3068\u304C\u591A\u3044\u30B3\u30B9\u30C8\u306E\u4F4E\u6E1B\u3068\u77ED\u7D0D\u671F\u3001\u3055\u3089\u306B\u54C1\u8CEA\u306E\u7DAD\u6301\u304C\u7121\u7406\u306A\u304F\u5B9F\u73FE\u3057\u307E\u3059\u3002\u304A\u5BA2\u69D8\u306E\u6A5F\u5BC6\u4FDD\u6301\u306E\u89B3\u70B9\u304B\u3089\u3082\u3054\u5B89\u5FC3\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
