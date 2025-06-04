export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "No URL provided" }), {
      status: 400,
    });
  }

  try {
    const res = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const html = await res.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const ogTitleMatch = html.match(
      /<meta property=["']og:title["'] content=["'](.*?)["']/i
    );
    const ogImageMatch = html.match(
      /<meta property=["']og:image["'] content=["'](.*?)["']/i
    );
    const ogDescMatch = html.match(
      /<meta property=["']og:description["'] content=["'](.*?)["']/i
    );

    const metadata = {
      title: ogTitleMatch?.[1] || titleMatch?.[1] || "",
      image: ogImageMatch?.[1] || "",
      description: ogDescMatch?.[1] || "",
      url: targetUrl,
    };

    return new Response(JSON.stringify(metadata), {
      headers: { "Content-Type": "application/json" },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch metadata" }), {
      status: 500,
    });
  }
}
