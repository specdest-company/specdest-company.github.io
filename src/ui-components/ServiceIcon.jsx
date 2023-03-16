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
import { Icon } from "@aws-amplify/ui-react";
export default function ServiceIcon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { ServiceIcon: {} },
      variantValues: { property1: "development" },
    },
    {
      overrides: {
        ServiceIcon: {
          paths: [
            {
              d: "M107.573 37.3333C107.573 16.6933 90.88 0 70.24 0C49.6 0 32.9067 16.6933 32.9067 37.3333C32.8999 46.1481 36.0212 54.6793 41.715 61.4083C47.4088 68.1374 55.3057 72.6277 64 74.08L64 95.0933L21.3333 95.0933L21.3333 79.0933L26.6667 79.0933L26.6667 57.76C26.6667 54.8267 24.2667 52.4267 21.3333 52.4267L5.33333 52.4267C2.4 52.4267 0 54.8267 0 57.76L0 79.0933L5.33333 79.0933L5.33333 105.76L90.6667 105.76L90.6667 95.0933L74.6667 95.0933L74.6667 74.4C83.7365 73.3169 92.0946 68.9463 98.1588 62.1155C104.223 55.2847 107.573 46.4676 107.573 37.3333L107.573 37.3333ZM13.3333 47.0933C17.76 47.0933 21.3333 43.52 21.3333 39.0933C21.3333 34.6667 17.76 31.0933 13.3333 31.0933C8.90667 31.0933 5.33333 34.6667 5.33333 39.0933C5.33333 43.52 8.90667 47.0933 13.3333 47.0933Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 9.04%)" },
            },
          ],
        },
      },
      variantValues: { property1: "consulting" },
    },
    {
      overrides: {
        ServiceIcon: {
          paths: [
            {
              d: "M31.725 27.7346C47.275 12.1846 72.4 12.1096 88.05 27.4846L77.75 37.7596C76.025 39.4846 75.525 42.0596 76.45 44.3096C77.375 46.5596 79.575 48.0096 82 48.0096L114 48.0096C117.325 48.0096 120 45.3346 120 42.0096L120 10.0096C120 7.5846 118.55 5.3846 116.3 4.4596C114.05 3.5346 111.475 4.0346 109.75 5.7596L99.35 16.1596C77.45 -5.4654 42.175 -5.3904 20.4 16.4096C14.3 22.5096 9.9 29.6846 7.2 37.3596C5.725 41.5346 7.925 46.0846 12.075 47.5596C16.225 49.0346 20.8 46.8346 22.275 42.6846C24.2 37.2346 27.325 32.1096 31.725 27.7346L31.725 27.7346ZM0 70.0096L0 102.01C0 104.435 1.45 106.635 3.7 107.56C5.95 108.485 8.525 107.985 10.25 106.26L20.65 95.8596C42.55 117.485 77.825 117.41 99.6 95.6096C105.7 89.5096 110.125 82.3346 112.825 74.6846C114.3 70.5096 112.1 65.9596 107.95 64.4846C103.8 63.0096 99.225 65.2096 97.75 69.3596C95.825 74.8096 92.7 79.9346 88.3 84.3096C72.75 99.8596 47.625 99.9346 31.975 84.5596L42.25 74.2596C43.975 72.5346 44.475 69.9596 43.55 67.7096C42.625 65.4596 40.425 64.0096 38 64.0096L6 64.0096C2.675 64.0096 0 66.6846 0 70.0096Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(3.13%, 6.24%)" },
            },
          ],
        },
      },
      variantValues: { property1: "automation" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="128px"
      height="128px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 128, height: 128 }}
      paths={[
        {
          d: "M0 90.6667L0 80L10.6667 80L10.6667 0L117.333 0L117.333 80L128 80L128 90.6667L0 90.6667ZM53.3333 80L74.6667 80L74.6667 74.6667L53.3333 74.6667L53.3333 80ZM21.3333 64L106.667 64L106.667 10.6667L21.3333 10.6667L21.3333 64ZM21.3333 64L21.3333 10.6667L21.3333 64Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "ServiceIcon")}
      {...rest}
    ></Icon>
  );
}
