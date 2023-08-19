'use client';

import React, { useState } from 'react';
import Tabs from '.';
import TabList from './tabList';
import { web_service_data, mobile_service_data } from '@/locales/service';

const webData = web_service_data;
const mobileData = mobile_service_data;

const TabService = () => {
  const [activeTab, setActiveTab] = useState('Web Development');
  return (
    <div className="lg:mb-[200px] md:mb-[150px] mb-[100px]">
      <Tabs
        tabs={['Web Development', 'Mobile Development']}
        active={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === 'Web Development' && (
        <div>
          {webData.map((data, idx) => (
            <TabList
              key={idx}
              title={data.title}
              description={data.description}
              imgUrl={data.imgUrl}
            />
          ))}
        </div>
      )}
      {activeTab === 'Mobile Development' && (
        <div>
          {mobileData.map((data, idx) => (
            <TabList
              key={idx}
              title={data.title}
              description={data.description}
              imgUrl={data.imgUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabService;
