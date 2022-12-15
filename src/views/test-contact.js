import "./test-contact.css";
import { ContactUs, ContactUsForm } from '../ui-components';
import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';

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

    <ContactUs
      overrides={{
        PolicyTextWrapper: {
          overflow: "scroll"
        }
      }}
      width="100%"
      form={<ContactUsForm
        overrides={{
          ContactUsForm: {
            style: {
              alignSelf: "stretch"
            }
          },
        }}
        onSubmit={(fields) => {
          console.log('fields: ', fields);
          // Example function to trim all string inputs
          const updatedFields = {}
          Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
              updatedFields[key] = fields[key].trim()
            } else {
              updatedFields[key] = fields[key]
            }
          })
          console.log('updatedFields: ', updatedFields);
          return updatedFields
        }}
      />} />
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