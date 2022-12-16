import TopPageComponent from '../ui-components/TopPage';

const TopPage = () => {
  return (
    <TopPageComponent
           width="100%"
      overrides={{
        Services: {
          id: 'services',
        },
      }}
    />
  );
};
export default TopPage