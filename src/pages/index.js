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
      <h3 className="featureTitle">{title}</h3>
      <p className="featureTitle">{description}</p>
    </div>
  );
}

// Portfolio Grid Start *********
const portfolios = [
  {
    title: <>Facebook Posts [Restaurants]</>,
    imageUrl: 'img/work-images/Facebook_post_Uncleburger_W.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <>Instagram Story [Restaurants]</>,
    imageUrl: 'img/work-images/IG_story_burger.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <>Instagram Posts [Restaurants]</>,
    imageUrl: 'img/work-images/IG_post_burger.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <>Facebook Posts [Cottage]</>,
    imageUrl: 'img/work-images/Facebook_post_Tiara_W.png',
    description: (
      <>

      </>
    ),
  },
  {
    title: <>Instagram Story [Cottage]</>,
    imageUrl: 'img/work-images/IG_story_cottage.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <>Instagram Posts [Restaurants]</>,
    imageUrl: 'img/work-images/IG_post_cottage.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <>Facebook Posts [Seafood Bar]</>,
    imageUrl: 'img/work-images/Facebook_post_seafood.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <>Instagram Story [Seafood Bar]</>,
    imageUrl: 'img/work-images/IG_story_seafood.png',
    description: (
      <>

      </>
    ),
  },
  {
    title: <>Instagram Posts [Restaurants]</>,
    imageUrl: 'img/work-images/IG_post_seafood.png',
    description: (
      <>

      </>
    ),
  },
];

function Portfolio({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.portfolios)}>
    <div className={classnames('work-title')}>{title}</div>
    {description}
    {imgUrl && (
        <div className="text--center">
          <img className={styles.portfolioImage} src={imgUrl} alt={title} />
        </div>
      )}
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
//              to={useBaseUrl('docs/')}>
			    to={useBaseUrl('contact/')}>
              Contact
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
			<br /><div><h3 className="PortfolioTitle">Our Works</h3></div>
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
