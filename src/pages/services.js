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
			  <div class="grid-box grid-header">Header</div>
			  <div class="grid-box grid-sidebar">Sidebar</div>
			  <div class="grid-box grid-content">Content
				<br /> The four arrows are inline images inside the content area.
				<img src="http://gridbyexample.com/examples/code/arrow-top-left.png" alt="top left" class="topleft" />
				<img src="http://gridbyexample.com/examples/code/arrow-top-right.png" alt="top right" class="topright" />
				<img src="http://gridbyexample.com/examples/code/arrow-bottom-left.png" alt="bottom left" class="bottomleft" />
				<img src="http://gridbyexample.com/examples/code/arrow-bottom-right.png" alt="bottom right" class="bottomright" /></div>
			  <div class="grid-box grid-footer">Footer</div>
			</div>
		</grid-body>

      </main>
    </Layout>
  );
}

export default Home;
