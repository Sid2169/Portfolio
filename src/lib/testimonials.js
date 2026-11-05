export const TESTIMONIALS_API_BASE =
  "https://siddhartha-testimonials-api.onrender.com";

export const TESTIMONIALS_QUERY = "sort=newest&page=1&limit=6";

export const TESTIMONIALS_REVALIDATE = 300;

export const TESTIMONIALS_TIMEOUT_MS = 4000;

export const TESTIMONIALS_ATTEMPTS = 1;

function normalizeLinkedInUrl(value) {
  if (typeof value !== "string" || !value.trim()) return value;

  try {
    const url = new URL(value.trim());
    if (!/(^|\.)linkedin\.com$/i.test(url.hostname)) return value;

    url.protocol = "https:";
    url.search = "";
    url.hash = "";

    if (/^\/in\/[^/]+$/i.test(url.pathname)) {
      url.pathname = `${url.pathname}/`;
    }

    return url.toString();
  } catch {
    return value;
  }
}

export function normalizeTestimonial(item) {
  return {
    id: item.id,
    name: item.name,
    review: item.view,
    designation: item.designation,
    profileLink: normalizeLinkedInUrl(item.linkedin),
    imgPath: item.photoUrl,
    mentions: item.company,
    companyLink: item.companyUrl ?? item.companyLink,
  };
}

export function toTestimonialList(data) {
  if (!data || !Array.isArray(data.items)) return null;

  const list = data.items.map(normalizeTestimonial);
  return list.length ? list : null;
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Server-side fetch so the testimonial cards ship in the initial HTML.
 *
 * These cards used to arrive from a client-side effect, which meant the
 * section grew from the two bundled testimonials to the full set and pushed
 * every section below it down. Fetching here keeps the rendered list identical
 * between the server and the client, so nothing below it can move.
 *
 * The upstream is a Render free-tier service, so it can be asleep and take tens
 * of seconds to wake up. The first render must not wait that long, so the fetch
 * is bounded and the bundled testimonials are used as the fallback; the next
 * successful revalidation picks the live list back up. Returning null instead
 * of throwing keeps the page renderable.
 */
export async function getTestimonials() {
  const url = `${TESTIMONIALS_API_BASE}/api/testimonials?${TESTIMONIALS_QUERY}`;

  for (let attempt = 1; attempt <= TESTIMONIALS_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, {
        next: { revalidate: TESTIMONIALS_REVALIDATE },
        signal: AbortSignal.timeout(TESTIMONIALS_TIMEOUT_MS),
      });

      if (!res.ok) throw new Error(`unexpected status ${res.status}`);

      const list = toTestimonialList(await res.json());
      if (!list) throw new Error("unexpected response shape");

      return list;
    } catch {
      if (attempt === TESTIMONIALS_ATTEMPTS) return null;
      await wait(500);
    }
  }

  return null;
}
