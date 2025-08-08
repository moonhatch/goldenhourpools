import groq from "groq";

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
  title,
  pageBuilder[]{
    _type == "blockCalendly" => {
      _type,
      _key,
      container,
      embedId
    },
    _type == "blockContact" => {
      _type,
      _key,
      container,
      heading
    },
    _type == "blockContent" => {
      _type,
      _key,
      container,
      content
    },
    _type == "blockFAQ" => {
      _type,
      _key,
      container,
      faqs
    },
    _type == "blockGallery" => {
      _type,
      _key,
      container,
      galleryColumns
    },
    _type == "blockHeroImage" => {
      _type,
      _key,
      title,
      heading,
      button,
      image
    },
    _type == "blockHeroVideo" => {
      _type,
      _key,
      title,
      heading,
      button,
      url,
      urlTitle,
      urlThumbnail
    },
    _type == "blockLandscapeGrid" => {
      _type,
      _key,
      container,
      landscapes[]-> {
        _type,
        _key,
        image,
        price,
        pricePer,
        description,
        title,
        slug
      }
    },
    _type == "blockMedia" => {
      _type,
      _key,
      container,
      media
    },
    _type == "blockPoolGrid" => {
      _type,
      _key,
      container,
      pools[]-> {
        _type,
        _key,
        image,
        price,
        variants[] {
          _type,
          _key,
          image,
          addons[]->,
          description,
          title,
          slug,
          depth,
          price,
          hasLedge,
          hasSpa
        },
        title,
        slug
      }
    },
    _type == "blockPoolSlider" => {
      _type,
      _key,
      container,
      pools[]-> {
        _type,
        _key,
        image,
        price,
        variants[] {
          _type,
          _key,
          image,
          addons[]->,
          description,
          title,
          slug,
          depth,
          price,
          hasLedge,
          hasSpa
        },
        title,
        slug
      }
    },
    _type == "blockThankYou" => {
      _type,
      _key,
      container,
      heading
    },
    _type == "blockZohoBooking" => {
      _type,
      _key,
      container,
      iframeSrc
    },
    _type == "blockZohoForm" => {
      _type,
      _key,
      container,
      formId,
      formPermaId
    },
  },
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const REDIRECTS_QUERY = groq`
*[_type == "redirect" && isEnabled == true && source == $pathname][0] {
  source,
  destination,
  permanent
}`;

export const SITEMAP_QUERY = groq`
*[_type in ["page"] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    slug.current
  ),
  "noIndex": seo.noIndex == true,
  _updatedAt
}`;

export const SITE_SETTINGS_QUERY = groq`
*[_type == "siteSettings"][0]{
  title,
  announcement,
  navLinksPrimary,
  navLinksSecondary,
  footerLinksPrimary,
  footerLinksSecondary,
  footerLinksTertiary
}`;
