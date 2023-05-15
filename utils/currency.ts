export const formatPrice = (value: number): string => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat('es-PE', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(date));
}

export const generateSlug = (slug: string) => {
  const newSlug = slug
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();

  return newSlug;
}