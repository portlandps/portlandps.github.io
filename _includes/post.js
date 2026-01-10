<script type="application/ld+json">{% if page.tags.size > 1 %}[{% endif %}{% if page.tags %}{% for tag in page.tags %}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"item":{"@id":"{{site.url}}/","name":"{{site.data.x.schema_BreadcrumbList_Home}}"}},
{"@type":"ListItem","position":2,"item":{"@id":"{{site.url}}/articles/","name":"Articles"}},
{"@type":"ListItem","position":3,"item":{"@id":"{{site.url}}/articles/#{{tag|slugify}}","name":"{{tag}}"}},
{"@type":"ListItem","position":4,"item":{"@id":"{{site.url}}{{page.url}}","name":"{{page.title_br[0]|remove:":"}}"}}]}{% unless forloop.last %},{% endunless %}{% endfor %}{% if page.tags.size > 1 %}]{% endif %}{% else %}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"item":{"@id":"{{site.url}}/","name":"{{site.data.x.schema_BreadcrumbList_Home}}"}},
{"@type":"ListItem","position":2,"item":{"@id":"{{site.url}}/articles/","name":"Articles"}},
{"@type":"ListItem","position":3,"item":{"@id":"{{site.url}}{{page.url}}","name":"{{page.title_br[0]|remove:":"}}"}}]}{% endif %}</script>