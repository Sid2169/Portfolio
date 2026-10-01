export const TESTIMONIALS_API_BASE =
  "https://siddhartha-testimonials-api.onrender.com";

export const TESTIMONIALS_QUERY = "sort=newest&page=1&limit=6";

export const TESTIMONIALS_REVALIDATE = 300;

export const TESTIMONIALS_TIMEOUT_MS = 20000;

export const TESTIMONIALS_ATTEMPTS = 2;

export function normalizeTestimonial(item) {
  return {
    id: item.id,
    name: item.name,
    review: item.view,
    designation: item.designation,
    profileLink: item.linkedin,
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
 * of seconds to wake up. Regeneration happens in the background (ISR serves
 * the cached page immediately), which makes a generous timeout free, and one
 * retry covers most cold starts. Returning null instead of throwing keeps the
 * page renderable: the caller falls back to the bundled testimonials and the
 * next successful revalidation picks the live list back up.
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
