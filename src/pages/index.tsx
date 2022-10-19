import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <BrowserOnly>
        {()=> { 
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const WebSSH = require('../components/WebSSH').default;
          return (
            <WebSSH />
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
