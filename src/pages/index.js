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

// Portfolio Grid Start *********
const portfolios = [
  {
    title: <>Portfolio#1</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#2</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#3</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#4</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#6</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#7</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#8</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#9</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
  {
    title: <>Portfolio#5</>,
    imageUrl: 'img/simplify.svg',
    description: (
      <>
        QQQQQQTTTQTT
      </>
    ),
  },
];

function Portfolio({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--3', styles.portfolios)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.portfolioImage} src={imgUrl} alt={title} />
        </div>
      )}
      {title}
      {description}
    </div>
  );
}

// Portfolio Grid End *********

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
			<div><h3 className="PortfolioTitle">Portfolio</h3></div>
        {portfolios && portfolios.length > 0 && (
          <section className={styles.portfolios}>
            <div className="container">
              <div className="row">
                {portfolios.map((props, idx) => (
                  <Portfolio key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
		   )}
      </main>
    </Layout>
  );
}

export default Home;
