import React from "react";
import appleTouch from '../../images/favicon_io/apple-touch-icon.png'
import faviconLarge from '../../images/favicon_io/favicon-32x32.png'
import faviconSmall from '../../images/favicon_io/favicon-16x16.png'

const SEO = () => {

  return (
    <>
      <title>Mad Digital </title>
      <meta name="title" content="Mad Digital" />
      <meta
        name="description"
        content="A forma mais eficaz de escalar seu negócio com Marketing Digital. Com o método Mad Digital cresça seus resultados com Tráfego Pago na captação de novos clientes."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.madcompany.com.br/" />
      <meta property="og:title" content="Mad Digital " />
      <meta
        property="og:description"
        content="A forma mais eficaz de escalar seu negócio com Marketing Digital. Com o método Mad cresça seus resultados com Tráfego Pago na captação de novos clientes."
      />
      <meta
        property="og:image"
        content="https://valioze.com.br/clientes/Mad-Digital.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.madcompany.com.br/" />
      <meta property="twitter:title" content="Mad Digital " />
      <meta
        property="twitter:description"
        content="A forma mais eficaz de escalar seu negócio com Marketing Digital. Com o método Mad cresça seus resultados com Tráfego Pago na captação de novos clientes."
      />
      <meta
        property="twitter:image"
        content="https://valioze.com.br/clientes/Mad-Digital.png"
      />

      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconLarge} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconSmall} />

    <script>{(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-THNZXZJ')}</script>
    </>
  );
};

export default SEO