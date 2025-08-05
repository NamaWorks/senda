export interface WPImageACF {
  ID: number;
  id: number;
  title?: string;
  filename?: string;
  filesize?: number;
  url?: string;
  link: string;
  alt?: string;
  author?: string;
  description?: string;
  caption?: string;
  name?: string;
  status?: string;
  uploaded_to?: number;
  date?: string;
  modified?: string;
  menu_order?: number;
  mime_type?: string;
  type?: string;
  subtype?: string;
  icon?: string;
  width?: number;
  height?: number;
  sizes: ImageSizesACF;
  guid: {
    rendered: string;
  }
};

interface ImageSizesACF {
  thumbnail: string;
  "thumbnail-width": number;
  "thumbnail-height": number;
  medium: string;
  "medium-width": number;
  "medium-height": number;
  medium_large: string;
  "medium_large-width": number;
  "medium_large-height": number;
  large: string;
  "large-width": number;
  "large-height": number;
  "1536x1536": string;
  "1536x1536-width": number;
  "1536x1536-height": number;
  "2048x2048": string;
  "2048x2048-width": number;
  "2048x2048-height": number;
};

export interface WPImage {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: WPImageMeta;
  class_list: string[];
  acf: [];
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: {
      thumbnail: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      full: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
      keywords: string[];
    };
  };
  post: number;
  source_url: string;
  _links: {
    self: {
      href: string;
      targetHints: {
        allow: string[];
      };
    }[];
    collection: {
      href: string;
    }[];
    about: {
      href: string;
    }[];
    author: {
      embeddable: boolean;
      href: string;
    }[];
    replies: {
      embeddable: boolean;
      href: string;
    }[];
  };
}

interface WPImageMeta {
  _acf_changed: boolean;
  "site-sidebar-layout": string;
  "site-content-layout": string;
  "ast-site-content-layout": string;
  "site-content-style": string;
  "site-sidebar-style": string;
  "ast-global-header-display": string;
  "ast-banner-title-visibility": string;
  "ast-main-header-display": string;
  "ast-hfb-above-header-display": string;
  "ast-hfb-below-header-display": string;
  "ast-hfb-mobile-header-display": string;
  "site-post-title": string;
  "ast-breadcrumbs-content": string;
  "ast-featured-img": string;
  "footer-sml-layout": string;
  "theme-transparent-header-meta": string;
  "adv-header-id-meta": string;
  "stick-header-meta": string;
  "header-above-stick-meta": string;
  "header-main-stick-meta": string;
  "header-below-stick-meta": string;
  "astra-migrate-meta-layouts": string;
  "ast-page-background-enabled": string;
  "ast-page-background-meta": {
    desktop: {
      "background-color": string;
      "background-image": string;
      "background-repeat": string;
      "background-position": string;
      "background-size": string;
      "background-attachment": string;
      "background-type": string;
      "background-media": string;
      "overlay-type": string;
      "overlay-color": string;
      "overlay-opacity": string;
      "overlay-gradient": string;
    };
    tablet: {
      "background-color": string;
      "background-image": string;
      "background-repeat": string;
      "background-position": string;
      "background-size": string;
      "background-attachment": string;
      "background-type": string;
      "background-media": string;
      "overlay-type": string;
      "overlay-color": string;
      "overlay-opacity": string;
      "overlay-gradient": string;
    };
    mobile: {
      "background-color": string;
      "background-image": string;
      "background-repeat": string;
      "background-position": string;
      "background-size": string;
      "background-attachment": string;
      "background-type": string;
      "background-media": string;
      "overlay-type": string;
      "overlay-color": string;
      "overlay-opacity": string;
      "overlay-gradient": string;
    };
  };
  "ast-content-background-meta": {
    desktop: {
      "background-color": string;
      "background-image": string;
      "background-repeat": string;
      "background-position": string;
      "background-size": string;
      "background-attachment": string;
      "background-type": string;
      "background-media": string;
      "overlay-type": string;
      "overlay-color": string;
      "overlay-opacity": string;
      "overlay-gradient": string;
    };
    tablet: {
      "background-color": string;
      "background-image": string;
      "background-repeat": string;
      "background-position": string;
      "background-size": string;
      "background-attachment": string;
      "background-type": string;
      "background-media": string;
      "overlay-type": string;
      "overlay-color": string;
      "overlay-opacity": string;
      "overlay-gradient": string;
    };
    mobile: {
      "background-color": string;
      "background-image": string;
      "background-repeat": string;
      "background-position": string;
      "background-size": string;
      "background-attachment": string;
      "background-type": string;
      "background-media": string;
      "overlay-type": string;
      "overlay-color": string;
      "overlay-opacity": string;
      "overlay-gradient": string;
    };
  };
};

export interface PartnerInterface {
  image_background: WPImage | number,
  logo: WPImage | number,
  name: string,
};