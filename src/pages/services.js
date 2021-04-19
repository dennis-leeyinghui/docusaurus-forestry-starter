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
			  <div class="grid-box grid-sidebar"><img src="img/services.svg" /></div>
			  <div class="grid-box grid-content">We help your business to maximize online exposure cost-effectively. Our core services include:

				<ul>
				  <li>Social Media Management</li>
				  <li>Marketing Campaigns</li>
				  <li>Advertisements Design</li>
				  <li>Workflow Simplification</li>
				  <li>Digital Transformation</li>
				  <li>Website Creation & Management</li>
				  <li>Consulting Services</li>
				  <li>New Business Ideas</li>
				  <li></li>
				</ul>

				<br /> The four arrows are inline images inside the content area.
				<img src="http://gridbyexample.com/examples/code/arrow-top-left.png" alt="top left" class="topleft" />
				<img src="http://gridbyexample.com/examples/code/arrow-top-right.png" alt="top right" class="topright" />
				<img src="http://gridbyexample.com/examples/code/arrow-bottom-left.png" alt="bottom left" class="bottomleft" />
				<img src="http://gridbyexample.com/examples/code/arrow-bottom-right.png" alt="bottom right" class="bottomright" /></div>

			  <div class="grid-box grid-footer">Contact Us Now.</div>
			</div>
		</grid-body>

      </main>
    </Layout>
  );
}

export default Home;
