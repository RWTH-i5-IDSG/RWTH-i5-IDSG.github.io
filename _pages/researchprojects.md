---
permalink: /researchprojects/
sidebar:
  nav: "docs"
---

{% for researchProject in site.pages %}
	{% if researchProject.categories == "Research" %}
<div class = "row">
		{{ researchProject.content | markdownify }}
</div>
---
	{% endif %}
{% endfor %}