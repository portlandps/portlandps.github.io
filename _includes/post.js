<script type="application/ld+json">{% if page.tags.size > 1 %}[{% endif %}{% if page.tags %}{% for tag in page.tags %}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"{{site.data.x.company}}","item":{"@id":"{{site.url}}/"}},
{"@type":"ListItem","position":2,"name":"Articles","item":"{{site.url}}/articles/"},
{"@type":"ListItem","position":3,"name":"{{tag}}","item":"{{site.url}}/articles/#{{tag|slugify}}"},
{"@type":"ListItem","position":4,"name":"{% if page.title_br %}{{page.title_br[0]|remove:":"}}{% else %}{{page.title}}{% endif %}","item":{"@id":"{{site.url}}{{page.url}}"}}]}{% unless forloop.last %},{% endunless %}{% endfor %}{% if page.tags.size > 1 %}]{% endif %}{% else %}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"{{site.data.x.company}}","item":{"@id":"{{site.url}}/"}},
{"@type":"ListItem","position":2,"name":"Articles","item":"{{site.url}}/articles/"},
{"@type":"ListItem","position":3,"name":"{% if page.title_br %}{{page.title_br[0]|remove:":"}}{% else %}{{page.title}}{% endif %}","item":{"@id":"{{site.url}}{{page.url}}"}}]}{% endif %}</script>