---
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash-tunnel.jpg
  cta_label: "<i class='fa fa-download'></i> Visit our Github Repository"
  cta_url: "https://github.com/RWTH-i5-IDSG"
  caption:
excerpt: 'We are a research group working on ideas and projects for personal intermodal mobility and e-mobility.'
intro:
  - excerpt: 'Here are a few software projects to have a look at:'
feature_row:
  - image_path: /assets/images/feature-ixsi.png
    alt: "fully responsive"
    title: "IXSI"
    excerpt: "Interface for X-Sharing Information documentation. A XML and Websocket-based interface standard to integrated sharing services into travel information."
    url: "/about/ixsi"
    btn_label: "Read more"
  - image_path: /assets/images/feature-adapter.png
    alt: "xsharing-services-integrator"
    title: "X-Sharing Services Integrator"
    excerpt: "A sample implementation of IXSI."
    url: "/about/xsharing-services-integrator"
    btn_label: "Read more"
  - image_path: /assets/images/feature-router.png
    alt: "X-Sharing"
    title: "X-Sharing Services Router"
    excerpt: "An add-on for the X-Sharing Services Integrator which offers routing information for the integrated mobility services."
    url: "/about/xsharing-services-router"
    btn_label: "Read more"
feature_row_emobility:
  - image_path: /assets/images/feature-steve.png
    alt: "SteVe Screenshot"
    title: "SteVe"
    excerpt: "SteVe - Steckdosenverwaltung. A lean management system for electric charging stations using OCPP."
    url: "/about/steve"
    btn_label: "Read more"
feature_row_bikesharing:
  - image_path: /assets/images/feature-bikesharing.jpg
    alt: "VeloCity pedelec station"
    title: "BikeMan"
    excerpt: "BikeMan - Bike Manager. A lean management and backend system for pedelec rental stations."
    url: "/about/bikeman"
    btn_label: "Read more"

feature_row_ticketing:
  - image_path: /assets/images/feature-barti.png
    alt: "BarTi Tickets"
    title: "BarTi"
    excerpt: "BarTi - Barcode Ticket Server. A web service to issue VDV-KA conforming 2D barcode tickets with a static validity."
    url: "/about/ticketserver"
    btn_label: "Read more"

---

{% include feature_row id="intro" type="center" %}
{% include feature_row %}
{% include feature_row id="feature_row_emobility" type="left" %}
{% include feature_row id="feature_row_bikesharing" type="right" %}
{% include feature_row id="feature_row_ticketing" type="left" %}
