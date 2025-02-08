import { useLoaderData, type MetaFunction, Link } from "@remix-run/react";
import { useQuery, type EncodeDataAttributeCallback } from "@sanity/react-loader";

import { formatDate } from "../lib/utils";
import { urlFor } from "../sanity/image";
import { loadQuery } from "../sanity/loader.server";
import { POSTS_QUERY } from "../sanity/queries";
import { Post } from "../sanity/types";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const initial = await loadQuery<Post[]>(POSTS_QUERY);

  return { initial, query: POSTS_QUERY, params: {} };
};

function Card({
  post,
  encodeDataAttribute,
}: {
  post: Post;
  encodeDataAttribute: EncodeDataAttributeCallback;
}) {
  return (
    <div>
      {post.mainImage ? (
        <img
          data-sanity={encodeDataAttribute("mainImage")}
          src={urlFor(post.mainImage).width(500).height(300).url()}
          alt=""
        />
      ) : (
        <div />
      )}
      <div>
        <Link
          data-sanity={encodeDataAttribute("slug")}
          to={post.slug?.current ? `/post/${post.slug.current}` : "/"}
        >
          <h3>{post.title}</h3>
        </Link>
        <p>{post.excerpt}</p>
        {post._createdAt && <p>{formatDate(post._createdAt)}</p>}
      </div>
    </div>
  );
}

function Welcome() {
  return (
    <div className="welcome__container">
      <div className="logos">
        <div className="logos__blur"></div>
        <img className="logos__entry" src="/remix.svg" alt="Remix Logo" />
        <span className="logos__plus">+</span>
        <img className="logos__entry" src="/sanity.svg" alt="Sanity Logo" />
      </div>
      <div className="steps">
        <h2 className="steps__title">Next steps</h2>
        <ul className="steps__list">
          <li className="steps__entry">
            <h3 className="steps__subtitle">Publish a post in your Studio</h3>
            <p className="steps__text">
              Visit the Sanity Studio and publish a new document of type post.
            </p>
          </li>
          <li className="steps__entry">
            <h3 className="step__title">Dive into the documentation</h3>
            <p className="steps__text">
              Check out{" "}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.sanity.io/docs"
              >
                the documentation
              </a>{" "}
              to learn more about Sanity.
            </p>
          </li>
          <li className="steps__entry">
            <h3 className="steps__subtitle">Join the Sanity Community</h3>
            <p className="steps__text">
              Leverage{" "}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.sanity.io/exchange/community"
              >
                our awesome community
              </a>
              , and share tips and discuss!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Index() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading, error, encodeDataAttribute } = useQuery<typeof initial.data>(
    query,
    params,
    {
      // @ts-expect-error -- TODO fix the typing here
      initial,
    },
  );

  if (error) {
    throw error;
  } else if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {data?.length ? (
        data.map((post, i) => (
          <Card key={post._id} post={post} encodeDataAttribute={encodeDataAttribute.scope([i])} />
        ))
      ) : (
        <Welcome />
      )}
    </section>
  );
}
