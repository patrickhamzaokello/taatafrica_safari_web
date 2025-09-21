import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


    const routes: string[] = [
        "",
        "/#about",
        "/#contact",
        "/#blog",
        "/#featured",
        "/#experiences",
        "/#testimonies",
        "/#charity",
        "/#faq",
    ]

    const staticRoutesSitemap = routes.map((route) => ({
        url: `https://www.tataafricasafaris.com${route}`,
        lastModified: new Date().toISOString(), 
        changeFrequency: 'weekly' as const,
        priority: route === "" ? 1.0 : 0.8,
    }));

    const allTags: string[] = [
        "safari",
        "africa",
        "wildlife",
        "travel",
        "adventure",
        "nature",
        "culture",
        "photography",
        "conservation",
        "luxury",
        "ecotourism",
        "sustainable travel",
        "family travel",
        "budget travel",
        "solo travel",
        "group travel",
        "guided tours",
        "off the beaten path",
        "local experiences",
        "traditional cuisine",
        "community tourism",
        "volunteer travel",
        "safari gear",
        "travel tips",
        "itineraries",
        "destinations",
        "travel deals",
        "travel inspiration",
        "travel blogs",
        "travel guides",
    ];
    const tagsSitemap = allTags.map((tag) => ({
        url: `https://www.tataafricasafaris.com/tag/${tag}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));


    return [
        ...staticRoutesSitemap,
        ...tagsSitemap,
    ];

}