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
			  <div class="grid-box grid-header">SERVICES</div>
			  <div class="grid-box grid-sidebar"><img src="/img/services.svg" /></div>
			  <div class="grid-box grid-content">

				<p>We help business to <b>maximize online exposure with minimum budgets</b>.</p>
				<p></p>
				<p>Our core services include:</p>

				<p>
				<ul>
				  <li>Social Media Management</li>
				  <li>Marketing Campaigns</li>
				  <li>Advertisement Designs</li>
				  <li>Workflow Simplification</li>
				  <li>Digital Transformation</li>
				  <li>Website Creation & Management</li>
				  <li>Consulting Services</li>
				  <li>New Business Ideas Creation</li>
				</ul>
				</p>

				</div>
			  <div class="grid-box grid-footer"><p>Contact Us Now.</p></div>
			</div>
		</grid-body>

      </main>
    </Layout>
  );
}

export default Home;
