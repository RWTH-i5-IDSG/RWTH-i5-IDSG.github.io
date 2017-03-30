---
permalink: /researchprojects/
layout: researchprojects
---

{% for researchProject in site.pages %}
	{% if researchProject.categories == "Research" %}
<div class = "row">
		{{ researchProject.content | markdownify }}
</div>
---
	{% endif %}
{% endfor %}
