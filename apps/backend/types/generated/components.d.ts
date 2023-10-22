import type { Schema, Attribute } from '@strapi/strapi';

export interface PostComment extends Schema.Component {
  collectionName: 'components_post_comments';
  info: {
    displayName: 'Comment';
    icon: 'discuss';
  };
  attributes: {
    Body: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'post.comment': PostComment;
    }
  }
}
