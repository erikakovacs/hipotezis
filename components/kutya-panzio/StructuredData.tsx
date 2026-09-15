import { faqs } from "@/lib/faq-data";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function StructuredData() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.locale.replace("_", "-"),
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contactEmail,
      logo: absoluteUrl(siteConfig.logo),
      description: siteConfig.description,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#software`,
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteConfig.url,
      description: siteConfig.description,
      offers: [
        {
          "@type": "Offer",
          name: "Egy szolgáltatás",
          price: "9900",
          priceCurrency: "HUF",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "9900",
            priceCurrency: "HUF",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Menhelyverzió",
          price: "0",
          priceCurrency: "HUF",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Kutyapanziók, napközik, kutyakozmetikusok, kiképzők, menhelyek",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
