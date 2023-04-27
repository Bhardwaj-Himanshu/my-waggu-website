import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Wagtail?',
    Svg: require('@site/static/Images/what_is_it.svg').default,
    description: (
      <>
        Wagtail is a leading open source CMS.
      </>
    ),
  },
  {
    title: 'What is this Guide?',
    Svg: require('@site/static/Images/guide.svg').default,
    description: (
      <>
        This book will guide the users and developers to work with Wagtail and show the commonly use cases.
      </>
    ),
  },
  {
    title: 'Powered by People',
    Svg: require('@site/static/Images/made_with_love.svg').default,
    description: (
      <>
        Wagtail is an open source project made with ♥ and efforts of many.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
