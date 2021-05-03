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
			  <div class="grid-box grid-header">PROMO</div>
			  <div class="grid-box grid-sidebar"><img src="/img/promo.svg" /></div>
			  <div class="grid-box grid-content">

				<p>Hi Atlantic Canada!</p>
				<p>We offer great deals to help our clients achieve their business goals!</p>
				<p></p>
				<p>Our latest promo:</p>
				<p class="promo-price"><b>
				  <img src="/img/celebrate.svg" width="40px" height="40px" />WOW Bundle<img src="/img/celebrate.svg" width="40px" height="40px" /> 
				  <br />Just CA$99/mo! (+tax) 
				</b></p>

			<div class="tg-wrap">
				  <table class="promo-table">
					<tbody>
					 <tr>
						<td class="tg-akna tablehead"><b>Service Breakdown</b></td>
						<td class="tg-3pw4 tablehead"><b>Monthly Total Count</b></td>
					 </tr>
					 <tr>
						<td class="tg-akna">Twice-a-week Facebook (FB) static post</td>
						<td class="tg-3pw4">8</td>
					 </tr>
					 <tr>
						<td class="tg-akna">Twice-a-week Instagram (IG) static posts</td>
						<td class="tg-3pw4">8</td>
					 </tr>
					 <tr>
						<td class="tg-akna">Instagram (IG) video story</td>
						<td class="tg-3pw4">2</td>
					 </tr>
					 <tr>
						<td class="tg-akna">Facebook (FB) video story</td>
						<td class="tg-3pw4">2</td>
					 </tr>
					 <tr>
						<td class="tg-akna">Social media performance reports</td>
						<td class="tg-3pw4">UNLIMITED</td>
					 </tr>
					 <tr>
						<td class="tg-akna">BONUS: Ad of any idea on FB or IG</td>
						<td class="tg-3pw4">1</td>
					 </tr>
				  </tbody>
			   </table>
			</div>

				</div>

			  <div class="grid-box grid-footer"><p>Contact Us Now.</p></div>
			</div>
		</grid-body>

      </main>
    </Layout>
  );
}

export default Home;
