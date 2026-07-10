// Convert a product/service title to a URL-friendly slug.
// Rules (per request):
// - lowercase
// - spaces become "_"
// - any run of spaces/special characters (including em dashes like " — ") becomes a single "_"
// - trim leading/trailing underscores
// - keep only a-z and 0-9

export function slugifyTitle(input){
  const str = String(input ?? '')
    .normalize('NFKD')
    // strip diacritics
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

  // Replace any run of non-alphanumeric characters with a single underscore
  const slug = str
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')

  return slug
}
