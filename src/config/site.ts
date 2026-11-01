/**
 * Single source of truth for contact details and external links.
 * Change a value here and it updates on every page.
 *
 * ⚠️  Before launch, confirm every value marked CONFIRM with the Trust.
 */
export const site = {
  name: "Mohalle Mastane Trust",

  /** Official Razorpay payment page. Donors enter the amount on Razorpay. */
  razorpayUrl: "https://razorpay.me/@mohallemastanetrust",

  /** WhatsApp community group used for rescues and volunteer coordination. */
  whatsappGroupUrl: "https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2",

  /**
   * CONFIRM: the Trust's public email. The old site showed placeholder
   * addresses (hello@streetkind.org / streetkind@gmail.com) from a template.
   * While this is empty, email links are hidden instead of pointing nowhere.
   */
  email: "",

  /** CONFIRM: public phone number (kept from the existing site). */
  phoneDisplay: "+91 79785 62404",
  phoneHref: "tel:+917978562404",

  /**
   * CONFIRM: city shown in footers. The neighbourhoods named in the stories
   * (Civil Township, Sector 9, Madhuban Hotel, City Centre Mall) suggest Rourkela.
   */
  location: "Rourkela, Odisha",
} as const;

export const mailto = (subject: string, body?: string) =>
  site.email
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}${
        body ? `&body=${encodeURIComponent(body)}` : ""
      }`
    : null;
