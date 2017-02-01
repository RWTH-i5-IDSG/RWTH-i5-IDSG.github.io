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
  - excerpt: 'Here are a few Repositories to have a look at:'
feature_row:
  - image_path: /assets/images/feature-ixsi.png
    alt: "fully responsive"
    title: "IXSI"
    excerpt: "Interface for X-Sharing Information documentation. A XML and Websocket-based interface standard to integrated sharing services into travel information."
    url: "https://github.com/RWTH-i5-IDSG/ixsi"
    btn_label: "Repository"
  - image_path: /assets/images/mm-free-feature.png
    alt: "xsharing-services-integrator"
    title: "X-Sharing Services Integrator"
    excerpt: "A sample implementation of IXSI."
    url: "https://github.com/RWTH-i5-IDSG/xsharing-services-integrator"
    btn_label: "Repository"
  - image_path: /assets/images/mm-customizable-feature.png
    alt: "X-Sharing"
    title: "X-Sharing Router"
    excerpt: "A Addon for the X-Sharing Services Integrator which offers routing information for the integrated mobility services."
    url: "https://github.com/RWTH-i5-IDSG/xsharing-router"
    btn_label: "Repository"
feature_row_emobility:
  - image_path: /assets/images/feature-steve.png
    alt: "SteVe Screenshot"
    title: "SteVe"
    excerpt: "SteVe - Steckdosenverwaltung. A lean management system for electric charging stations using OCPP."
    url: "https://github.com/RWTH-i5-IDSG/steve"
    btn_label: "Repository"
---

{% include feature_row id="intro" type="center" %}
{% include feature_row %}
{% include feature_row id="feature_row_emobility" type="left" %}
