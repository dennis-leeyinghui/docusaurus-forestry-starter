import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>Simplify Workflows</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        Streamline your complex and low-efficient workflows.
      </>
    ),
  },
  {
    title: <>Boost Social Media</>,
    imageUrl: 'img/socialmedia.svg',
    description: (
      <>
        Maximize your online presence beautifully and effectively.
      </>
    ),
  },
  {
    title: <>Focus Atlantic Canada</>,
    imageUrl: 'img/canada-flag.svg',
    description: (
      <>
        We know your business better because of our localized knowledge.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="We help Atlantic Canadian businesses look better online.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
		   )}

      </main>

		<!-- Load PhotoSwipe js if the load-photoswipe shortcode has been used -->
		{{ if ($.Scratch.Get "photoswipeloaded") }}
		<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
		<script src="/js/load-photoswipe.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe.min.js" integrity="sha256-UplRCs9v4KXVJvVY+p+RSo5Q4ilAUXh7kpjyIP5odyc=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe-ui-default.min.js" integrity="sha256-PWHOlUzc96pMc8ThwRIXPn8yH4NOLu42RQ0b9SpnpFk=" crossorigin="anonymous"></script>
		{{ end }}

    </Layout>
  );
}

export default Home;
