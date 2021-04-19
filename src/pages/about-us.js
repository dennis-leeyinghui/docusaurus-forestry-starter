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
			  <div class="grid-box grid-header">ABOUT US</div>
			  <div class="grid-box grid-sidebar"><img src="/img/abousus.svg" /></div>
			  <div class="grid-box grid-content">

				<p>At modernify.ca, we are committed to empowering small and midsize businesses (SMBs) in Atlantic Canada by increasing their online presence.</p>
				<p></p>
				<p>Our expertise in digital marketing and business analyst have given us an unique advantage in providing our clients with measurable benefits.</p>
 				<p></p>
				<p>Examples of tangible benefits include an increase in sales and conversion ratees</p>

				<p>Some key small business statistics about Atlantic Canada:</p>
				<p></p>
				<p>Our latest promo:</p>

				<p><b>WOW Bundle!</b></p>

				</div>
			  <div class="grid-box grid-footer"><p>Contact Us Now.</p></div>
			</div>
		</grid-body>

      </main>
    </Layout>
  );
}

export default Home;
