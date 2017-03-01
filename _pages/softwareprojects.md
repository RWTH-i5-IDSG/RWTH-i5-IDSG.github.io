---
permalink: /softwareprojects/
---

{% for softwareProject in site.pages %}
	{% if softwareProject.categories == "Software" %}
<div class = "row">
		{{ softwareProject.content | markdownify }}
</div>
---
	{% endif %}
{% endfor %}