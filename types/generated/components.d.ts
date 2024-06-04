import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentCtaLink extends Schema.Component {
  collectionName: 'components_composant_cta_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    href: Attribute.String & Attribute.Required & Attribute.DefaultTo<'#'>;
    classNames: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    page: Attribute.Relation<
      'component.cta-link',
      'oneToOne',
      'api::page.page'
    >;
  };
}

export interface ComponentFilePath extends Schema.Component {
  collectionName: 'components_component_file_paths';
  info: {
    displayName: 'filePath';
    icon: 'picture';
  };
  attributes: {
    path: Attribute.String;
    alt: Attribute.String;
    height: Attribute.String;
    width: Attribute.String;
  };
}

export interface ComponentFooter extends Schema.Component {
  collectionName: 'components_component_footers';
  info: {
    displayName: 'footer';
    icon: 'archive';
    description: '';
  };
  attributes: {
    logo: Attribute.String;
    copyright: Attribute.String &
      Attribute.DefaultTo<'\u00A9 Clinique Laboratories. Tous Droits R\u00E9serv\u00E9s.'>;
    navigations: Attribute.Relation<
      'component.footer',
      'oneToMany',
      'api::navigation.navigation'
    >;
  };
}

export interface ComponentHeader extends Schema.Component {
  collectionName: 'components_component_headers';
  info: {
    displayName: 'Header';
    icon: 'archive';
    description: '';
  };
  attributes: {
    logo: Attribute.String;
    navigations: Attribute.Relation<
      'component.header',
      'oneToMany',
      'api::navigation.navigation'
    >;
  };
}

export interface ComponentLinks extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Links';
    icon: 'apps';
  };
  attributes: {
    links: Attribute.Component<'component.cta-link', true>;
  };
}

export interface ComponentMobile extends Schema.Component {
  collectionName: 'components_component_mobiles';
  info: {
    displayName: 'Mobile';
  };
  attributes: {
    navigation: Attribute.Component<'component.cta-link', true>;
    social: Attribute.Component<'component.cta-link', true>;
  };
}

export interface ComponentNav extends Schema.Component {
  collectionName: 'components_component_navs';
  info: {
    displayName: 'Nav';
    icon: 'apps';
  };
  attributes: {
    links: Attribute.Component<'component.cta-link', true>;
  };
}

export interface ComponentPageCard extends Schema.Component {
  collectionName: 'components_component_page_cards';
  info: {
    displayName: 'PageCard';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'component.cta-link'>;
    thumbnail: Attribute.String & Attribute.Required;
  };
}

export interface ComponentRepeatableContents extends Schema.Component {
  collectionName: 'components_composant_repeatable_contents';
  info: {
    displayName: 'Repeatable Contents';
    description: '';
  };
  attributes: {
    contents: Attribute.Component<'subcomponent.contents', true>;
    links: Attribute.Component<'component.cta-link', true>;
    media: Attribute.Component<'component.file-path', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SubcomponentContents extends Schema.Component {
  collectionName: 'components_composant_contents';
  info: {
    displayName: '_Contents';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.cta-link': ComponentCtaLink;
      'component.file-path': ComponentFilePath;
      'component.footer': ComponentFooter;
      'component.header': ComponentHeader;
      'component.links': ComponentLinks;
      'component.mobile': ComponentMobile;
      'component.nav': ComponentNav;
      'component.page-card': ComponentPageCard;
      'component.repeatable-contents': ComponentRepeatableContents;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'subcomponent.contents': SubcomponentContents;
    }
  }
}
