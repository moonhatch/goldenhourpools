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
    // "hero" in an "object" from which we can "pick" fields
    _type == "heroWithImage" => {
      _type,
      heading,
      tagline,
      image
    },
    // "callToAction" is a "reference"
    // We can resolve "itself" with the @ operator
    _type == "callToAction" => @-> {
      _type,
      title,
      link
    }
    // ...continue for each unique "_type"
  },
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
