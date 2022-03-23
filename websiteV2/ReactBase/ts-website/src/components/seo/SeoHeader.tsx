import React from "react";
import { Helmet } from "react-helmet";
import "./SeoHeader.scss"

function SeoHeader() {
  var seo = {
    description: "Personal website of Jonathan Madden",
    title: "Jonathan Madden",
    og: {
      title:"Jonathan Madden",
      type: "website",
      url: "maddenjonathan.com"
    }
  };

  return (
    <Helmet>
      <style>{'body { background-color: black; }'}</style>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
