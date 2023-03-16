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
  useNavigateAction,
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
  const { onHamburgerClick, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Logo: {},
        Vector: {},
        "ci:hamburger": {},
        consulting: {},
        developoment: {},
        automation: {},
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
        consulting: {},
        developoment: {},
        automation: {},
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
  const consultingOnClick = useNavigateAction({
    anchor: "consulting",
    type: "anchor",
  });
  const developomentOnClick = useNavigateAction({
    anchor: "development",
    type: "anchor",
  });
  const automationOnClick = useNavigateAction({
    anchor: "automation",
    type: "anchor",
  });
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
      {...getOverrideProps(overrides, "TopNavBar")}
      {...rest}
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
        onClick={onHamburgerClick}
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
          onClick={() => {
            consultingOnClick();
          }}
          {...getOverrideProps(overrides, "consulting")}
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
          onClick={() => {
            developomentOnClick();
          }}
          {...getOverrideProps(overrides, "developoment")}
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
          onClick={() => {
            automationOnClick();
          }}
          {...getOverrideProps(overrides, "automation")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="none"
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
