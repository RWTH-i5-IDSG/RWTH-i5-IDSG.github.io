---
permalink: /softwareprojects/
sidebar:
  nav: "software"
---

{% for softwareProject in site.pages %}
	{% if softwareProject.categories == "Software" %}
<div class = "row">
		{{ softwareProject.content | markdownify }}
</div>
---
	{% endif %}
{% endfor %}