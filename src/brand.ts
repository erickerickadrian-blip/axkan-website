// Identidad de marca centralizada: cambiar aquí se refleja en todo el sitio.
export const BRAND = {
  name: "AXKAN",
  legalName: "AXKAN Intelligence",
  // "Axkan" = "ahora" en náhuatl. Eje de marca: la IA no es futuro, es presente.
  whatsapp: "525583422912",
  whatsappDisplay: "+52 55 8342 2912",
  email: "erick.erick.adrian@gmail.com", // TODO: reemplazar por correo del dominio de la marca
  calendarUrl: "https://calendar.app.google/REPLACE_ME", // TODO: pegar liga real de Google Calendar
  linkedin:
    "https://www.linkedin.com/in/erick-adrian-lopez-ontiveros",
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
