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

		 <br>

		 <section className={styles.portfolioImage}>
            <div className="container">
              <div className="row">
                {portfolioImage.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
		</section>

		   )}

	  <div class="container">
		<button type="button" id="moveLeft" class="btn-nav">
		  ?
		</button>
		<div class="container-indicators">
		  <div class="indicator active" data-index=0></div>
		  <div class="indicator" data-index=1></div>
		  <div class="indicator" data-index=2></div>
		</div>
		<div class="slider" id="mySlider">
		  <div class="movie" id="movie0">
			<img
			  src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
			  alt="" srcset="">
			<div class="description">
			  <div class="description__text-container">
				<span>Explosive</span>
				<span>&middot;</span>
				<span>Exciting</span>
			  </div>
			</div>
		  </div>
		</div>
		<button type="button" id="moveRight" class="btn-nav">
		  ?
		</button>
	  </div>

      </main>

    </Layout>
  );
}

export default Home;
