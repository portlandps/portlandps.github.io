<script type="application/ld+json">{% if page.tags.size > 1 %}[{% endif %}{% if page.tags %}{% for tag in page.tags %}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"{{site.data.x.schema_BreadcrumbList_Home}}","item":"{{site.url}}/"},
{"@type":"ListItem","position":2,"name":"Articles","item":"{{site.url}}/articles/"},
{"@type":"ListItem","position":3,"name":"{{tag}}","item":"{{site.url}}/articles/#{{tag|slugify}}"},
{"@type":"ListItem","position":4,"name":"{{page.title_br[0]|remove:":"}}","item":"{{site.url}}{{page.url}}"}]}{% unless forloop.last %},{% endunless %}{% endfor %}{% if page.tags.size > 1 %}]{% endif %}{% else %}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"{{site.data.x.schema_BreadcrumbList_Home}}","item":"{{site.url}}/"},
{"@type":"ListItem","position":2,"name":"Articles","item":"{{site.url}}/articles/"},
{"@type":"ListItem","position":3,"name":"{{page.title_br[0]|remove:":"}}","item":"{{site.url}}{{page.url}}"}]}{% endif %}</script>