import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WebSSH from './components/WebSSH';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <WebSSH />
    </Layout>
  );
}
