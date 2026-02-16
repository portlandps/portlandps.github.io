<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"item":{"@id":"{{site.url}}/"}},
{"@type":"ListItem","position":2,{% if page.url == "/about-C-David-Maxey/" %}"item":{"@id":"{{site.url}}{{page.url}}"}{% else %}"name":"{{page.breadcrumb}}","item":"{{site.url}}{{page.url}}"{% endif %}}]}</script>