import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import React from 'react';
import '../../css/homepage-features.scss';

type FeatureItem = {
  title: JSX.Element;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  
  {
    title: <Translate>Build</Translate>,
    link: '/build',
    iconClass: 'wrench',
    description: (
      <>
        <Translate>
          Discover essential resources to begin creating, testing, and deploying decentralized applications on the network.
        </Translate>
      </>
    ),
  },
    {
    title: <Translate>Use</Translate>,
    link: '/use/',
    iconClass: 'node',
    description: (
      <>
        <Translate>
          Gain valuable insights and experience using the network through hands-on tutorials, examples and more.
        </Translate>
      </>
    ),
  },
    {
    title: <Translate>About Astar</Translate>,
    link: '/about/',
    iconClass: 'docs',
    description: (
      <>
        <Translate>
          Learn more about the technology, economics, and culture behind the network.
        </Translate>
      </>
    ),
    },
    {
      title: <Translate>Quickstart - Build on Layer 1</Translate>,
      link: '/build/build-on-layer-1',
      iconClass: 'wrench',
      description: (
        <>
          <Translate>
            Skip the intro and jump right into building decentralized applications on Layer 1.
          </Translate>
        </>
      ),
    },
    {
      title: <Translate>Quickstart - Build on Layer 2</Translate>,
      link: '/build/build-on-layer-2',
      iconClass: 'wrench',
      description: (
        <>
          <Translate>
            Skip the intro and jump right into building decentralized applications on Layer 2.
          </Translate>
        </>
      ),
    },
];

function Feature({ title, iconClass, description, link }: FeatureItem) {
  return (
    <Link to={link} className="box">
      <div className="row--title">
        <div className={`${iconClass} icon`} />
        <span className="text--title">{title}</span>
      </div>
      <div className="row--description">
        <span className="text--description">{description}</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="section--front-page">
      <div className="container--front-page">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
