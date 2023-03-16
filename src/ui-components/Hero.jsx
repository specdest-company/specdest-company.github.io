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
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import ContactUsButton from "./ContactUsButton";
import TextWithIcon from "./TextWithIcon";
export default function Hero(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "0": {},
        "Excellence, Trustworthiness & Consistency": {},
        ContactUsButton: {},
        TextWithIcon34991937: {},
        TextWithIcon34991938: {},
        TextWithIcon34991939: {},
        "Frame 1": {},
        HeroLeft: {},
        "Frame 7": {},
        Hero: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "0": {
          width: "unset",
          height: "unset",
          shrink: "1",
          objectFit: "cover",
          grow: "1",
          basis: "0",
          alignSelf: "stretch",
        },
        "Excellence, Trustworthiness & Consistency": {
          fontSize: "40px",
          textAlign: "left",
          letterSpacing: "0.25px",
          width: "387px",
        },
        ContactUsButton: {},
        TextWithIcon34991937: {},
        TextWithIcon34991938: {},
        TextWithIcon34991939: {},
        "Frame 1": {},
        HeroLeft: { alignItems: "flex-start" },
        "Frame 7": { width: "500px", height: "500px", display: "flex" },
        Hero: {
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 32px 0px 32px",
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
      gap="250px"
      direction="row"
      width="980px"
      height="unset"
      justifyContent="center"
      alignItems="flex-end"
      position="relative"
      padding="80px 32px 80px 32px"
      display="flex"
      {...getOverrideProps(overrides, "Hero")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "HeroLeft")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="55px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.17px"
          width="265px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Excellence, Trustworthiness & Consistency"
          {...getOverrideProps(
            overrides,
            "Excellence, Trustworthiness & Consistency"
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
        <Flex
          gap="6px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="none"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <TextWithIcon
            display="flex"
            gap="6px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "TextWithIcon34991937")}
          ></TextWithIcon>
          <TextWithIcon
            display="flex"
            gap="6px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "TextWithIcon34991938")}
          ></TextWithIcon>
          <TextWithIcon
            display="flex"
            gap="6px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "TextWithIcon34991939")}
          ></TextWithIcon>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="400px"
        height="400px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="none"
        {...getOverrideProps(overrides, "Frame 7")}
      >
        <Image
          width="600px"
          height="600px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="/assets/images/0.svg"
          {...getOverrideProps(overrides, "0")}
        ></Image>
      </Flex>
    </Flex>
  );
}
