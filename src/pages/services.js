import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Portfolio Grid End *********

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="We help Atlantic Canadian businesses look better online.">
      <main>

		<grid-body>
			<div class="grid-wrapper">
			  <div class="grid-box grid-header">Services</div>
			  <div class="grid-box grid-sidebar"><img src="/img/services.svg" /></div>
			  <div class="grid-box grid-content">We help business to maximize online exposure cost-effectively. <br /> Our core services include:

				<ul>
				  <li>Social Media Management</li>
				  <li>Marketing Campaigns</li>
				  <li>Advertisements Design</li>
				  <li>Workflow Simplification</li>
				  <li>Digital Transformation</li>
				  <li>Website Creation & Management</li>
				  <li>Consulting Services</li>
				  <li>New Business Ideas</li>
				</ul>
				
				</div>
			  <div class="grid-box grid-footer">Contact Us Now.</div>
			</div>
		</grid-body>

      </main>
    </Layout>
  );
}

export default Home;
