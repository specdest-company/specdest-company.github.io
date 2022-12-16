import TopPageComponent from '../ui-components/TopPage';

const TopPage = () => {
  return (
    <TopPageComponent
      width="100%"
      overrides={{
        Services: {
          id: 'services',
        },
        Development: {
          overrides: {
            SideImage: {
              overrides: {
                image: {
                  src: "/assets/images/1.png"
                }
              }
            }
          }
        },
        Consulting: {
          overrides: {
            SideImage1: {
              overrides: {
                image: {
                  src: "/assets/images/2.png"
                }
              }
            },
            SideImage2: {
              overrides: {
                image: {
                  src: "/assets/images/2.png"
                }
              }
            }
          }
        },
        Automation: {
          overrides: {
            SideImage: {
              overrides: {
                image: {
                  src: "/assets/images/3.png"
                }
              }
            }
          }
        }
      }}
    />
  );
};
export default TopPage;
