import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
}

const BASE = "https://finmitra.altisinfonet.com";

const PageMeta = ({ title, description, canonical, noIndex = false }: PageMetaProps) => {
  const fullTitle = `${title} | FinMitra`;
  const url = canonical ? `${BASE}${canonical}` : BASE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default PageMeta;
