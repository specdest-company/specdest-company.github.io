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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function ContactUsButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089": {},
        Group: {},
        ContactUsButton: {},
      },
      variantValues: { type: "big" },
    },
    {
      overrides: {
        "\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089": {
          color: "rgba(30,184,190,1)",
        },
        Group: {},
        ContactUsButton: {},
      },
      variantValues: { type: "small" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const contactUsButtonOnClick = useNavigateAction({
    type: "url",
    url: "/contact",
  });
  return (
    <View
      width="234px"
      height="71px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={() => {
        contactUsButtonOnClick();
      }}
      {...getOverrideProps(overrides, "ContactUsButton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="16px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(191,64,64,1)"
        display="flex"
        {...getOverrideProps(overrides, "Group")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="55px"
          textAlign="left"
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
          children="お問い合わせはこちら"
          {...getOverrideProps(
            overrides,
            "\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089"
          )}
        ></Text>
      </Flex>
    </View>
  );
}
