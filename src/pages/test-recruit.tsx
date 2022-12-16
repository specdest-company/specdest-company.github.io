import {
  RecruitContent,
  RecruitBottom2,
  RecruitBottom1,
  RecruitRight,
  RecruitLeft,
  RecruitPage,
} from '../ui-components';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';

// import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";

Amplify.configure(awsconfig);

const items = [
  {
    id: 1,
    name: "aa1"
  }, {
    id: 2,
    name: "aa1"
  }, {
    id: 3,
    name: "aa1"
  }, {
    id: 4,
    name: "aa1"
  }
]
export default (props) => {
  console.log('props 111111111111: ', props);
  const { overrideItems, overrides, ...rest } = props;
  return <div style={{

    margin: "auto",
    maxWidth: 1200
  }}>
    {/* <ThemeProvider theme={studioTheme}> */}

    <RecruitPage width="100%" overrides={{
      RecruitBottom1: {
        position: "absolute",
        style: {
          bottom: -880
        }
      },
      RecruitBottom2: {
        position: "absolute",
        style: {
          bottom: -70
        }
      },
      RecruitRight: {
        position: "absolute",
        style: {
          top: -200,
          right: -550,
          transform: "rotate(80deg)"
        }
      },
      RecruitLeft: {
        position: "absolute",
        style: {
          top: 0,
          left: -350
        }
      }
    }} />
    {/* <RecruitContent width="100%" />
    <RecruitLeft width="100%" />
    <RecruitRight width="100%" />
    <RecruitBottom1 width="100%" />
    <RecruitBottom2 width="100%" /> */}
    {/* <Comp1 width="100%" /> */}
    {/* <TopNavBar width="100%" /> */}
    {/* <Hero width="100%" overrides={{
      "thumbnail 1 1": {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg"
      }
    }} /> */}
    {/* </ThemeProvider> */}
  </div>
}