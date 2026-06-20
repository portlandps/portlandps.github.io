<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","@id":"{{site.url}}/#WebSite","url":"{{site.url}}/",
"name":"{{site.data.x.company}}",
"publisher":{"@id":"{{site.url}}/#Organization"}}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","@id":"{{site.url}}{{page.url}}","url":"{{site.url}}{{page.url}}",
"name":"{% if page.title_br %}{% for title in page.title_br %}{{title}}{% unless forloop.last %} {% endunless %}{% endfor %}{% if page.title_sub %} {{page.title_sub}}{% endif %}{% else %}{{page.title}}{% endif %}",
"description":"{{page.description}}",
"inLanguage":"en-US",
"isPartOf":{"@id":"{{site.url}}/#WebSite"}}</script>
{% if page.layout == "post" %}<script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","@id":"{{site.url}}{{page.url}}","url":"{{site.url}}{{page.url}}",
"headline":"{% if page.title_br %}{% for title in page.title_br %}{{title}}{% unless forloop.last %} {% endunless %}{% endfor %}{% if page.title_sub %} {{page.title_sub}}{% endif %}{% else %}{{page.title}}{% endif %}",
"name":"{% if page.title_br %}{{page.title_br[0]|remove:":"}}{% else %}{{page.title}}{% endif %}",
"image":{% for w in page.header_w %}{% assign current = forloop.index0 %}{% assign current_h = page.header_h[current] %}{% if w >= 1200 %}{"@type":"ImageObject","@id":"{{site.data.x.cache}}/{{w}}/{{page.header}}.avif","url":"{{site.data.x.cache}}/{{w}}/{{page.header}}.avif","width":"{{w}}","height":"{{current_h}}"}{% break %}{% endif %}{% endfor %},
"datePublished":"{{page.date|date:'%F'}}",
"dateModified":"{{page.updated|date:'%F'}}",
"author":{"@type":"Person","@id":"{{site.url}}{{site.data.x.abouturl}}#Person"},
"publisher":{"@id":"{{site.url}}/#Organization"}}</script>
{% endif %}<script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalClinic","@id":"{{site.url}}/#Organization","url":"{{site.url}}/",
"name":"{{site.data.x.company}}",{% if site.data.x.company_alternate %}
"alternateName":"{{site.data.x.company_alternate}}",{% endif %}
"isAcceptingNewPatients":true,{% if site.data.x.taxid %}
"taxID":"{{site.data.x.taxid}}",{% endif %}{% if site.data.x.duns %}
"duns":"{{site.data.x.duns}}",{% endif %}
"sameAs":{% if site.data.x.schema_sameAs_organization.size > 1 %}["{{site.data.x.schema_sameAs_organization|join:'","'}}"]{% else %}"{{site.data.x.schema_sameAs_organization}}"{% endif %},
"logo":"{{site.url}}/favicon.svg",
"priceRange":"{{site.data.x.schema_priceRange}}",
"image":{% if site.data.x.schema_images.size > 1 %}[{% endif %}{% for image in site.data.x.schema_images %}{% assign current = forloop.index0 %}{% assign w_set = site.data.x.schema_images_w[current] %}{% assign h_set = site.data.x.schema_images_h[current] %}{% for w in w_set %}{% assign current_set = forloop.index0 %}{% assign current_h = h_set[current_set] %}{% if w >= 1200 %}{"@type":"ImageObject","@id":"{{site.data.x.cache}}/{{w}}/{{image}}","url":"{{site.data.x.cache}}/{{w}}/{{image}}","width":"{{w}}","height":"{{current_h}}"}{% break %}{% endif %}{% endfor %}{% unless forloop.last %},{% endunless %}{% endfor %}{% if site.data.x.schema_images.size > 1 %}]{% endif %},
"naics":"{{site.data.x.schema_naics}}",
"medicalSpecialty":"https://schema.org/{{site.data.x.schema_medicalSpecialty}}",
"telephone":"{{site.data.x.tel}}",
"email":"mailto:{{site.data.x.email|downcase}}",
"contactPoint":[
	{"@type":"ContactPoint","telephone":"{{site.data.x.tel}}","contactType":"Phone with Voicemail"},
	{"@type":"ContactPoint","email":"mailto:{{site.data.x.email|downcase}}"}],
"address":{"@type":"PostalAddress",
    "streetAddress":"{{site.data.x.address|replace:' ',' '}}",
    "addressLocality":"{{site.data.x.city}}",
    "addressRegion":"{{site.data.x.state|upcase|truncate:2,""}}",
    "postalCode":"{{site.data.x.zip}}",
    "addressCountry":"{{site.data.x.country}}"},
"hasMap":{% if site.data.x.schema_hasMap.size > 1 %}["{{site.data.x.schema_hasMap|join:'","'}}"]{% else %}"{{site.data.x.schema_hasMap}}"{% endif %},
"areaServed":{"@type":"AdministrativeArea","name":"{{site.data.x.state}}"},
"knowsLanguage":{"@type":"Language","name":"English","alternateName":"en"},
"location":[
    {"@type":"Place","name":"Office","address":{"@type":"PostalAddress",
        "streetAddress":"{{site.data.x.address|replace:' ',' '}}",
        "addressLocality":"{{site.data.x.city}}",
        "addressRegion":"{{site.data.x.state|upcase|truncate:2,""}}",
        "postalCode":"{{site.data.x.zip}}",
        "addressCountry":"{{site.data.x.country}}"}},
    {"@type":"VirtualLocation","name":"Zoom Call"}],
"availableService":{% if site.data.x.schema_Services.size > 1 %}[{% endif %}{% for service in site.data.x.schema_Services %}{
	"@type":"{{service.type}}",
	"name":"{{service.name}}",{% if service.alternateName %}
	"alternateName":"{{service.alternateName}}",{% endif %}{% if service.url %}
	"url":"{{service.url}}",{% endif %}{% if service.cpt %}
	"code":{"@type":"MedicalCode","codeValue":"{{service.cpt}}","codingSystem":"CPT"},{% endif %}{% if service.relevantSpecialty %}
	"relevantSpecialty":"https://schema.org/{{service.relevantSpecialty}}",{% endif %}{% if service.description %}
	"description":"{{service.description}}"{% endif %}}{% unless forloop.last %},{% endunless %}{% endfor %}{% if site.data.x.schema_Services.size > 1 %}]{% endif %},
"foundingDate":"{{site.data.x.schema_foundingDate}}",
"founder":{"@type":"Person","@id":"{{site.url}}{{site.data.x.abouturl}}#Person"},
"employee":{"@type":"Person","@id":"{{site.url}}{{site.data.x.abouturl}}#Person"},
"currenciesAccepted":{% if site.data.x.schema_currenciesAccepted.size > 1 %}["{{site.data.x.schema_currenciesAccepted|join:','}}"]{% else %}"{{site.data.x.schema_currenciesAccepted}}"{% endif %},
"acceptedPaymentMethod":{% if site.data.x.schema_acceptedPaymentMethod.size > 1 %}["{{site.data.x.schema_acceptedPaymentMethod|join:'","'}}"]{% else %}"{{site.data.x.schema_acceptedPaymentMethod}}"{% endif %},
"openingHoursSpecification":{% if site.data.x.schema_OpeningHoursSpecification.size > 1 %}[{%endif%}{% for opening in site.data.x.schema_OpeningHoursSpecification %}{"@type": "OpeningHoursSpecification","dayOfWeek":{% if opening.days.size > 1 %}[{%endif%}{% for days in opening.days %}"https://schema.org/{{days}}"{% unless forloop.last %},{% endunless %}{% endfor %}{% if opening.days.size > 1 %}]{%endif%},"opens":"{{opening.opens}}","closes":"{{opening.closes}}","name":"{{opening.type}}"}{% unless forloop.last %},{% endunless %}{% endfor %}{% if site.data.x.schema_OpeningHoursSpecification.size >1 %}]{%endif%}
}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","@id":"{{site.url}}{{site.data.x.abouturl}}#Person","url":"{{site.url}}{{site.data.x.abouturl}}",
"name":"{{site.data.x.schema_person_name}}",
"givenName":"{{site.data.x.schema_person_givenName}}",
"familyName":"{{site.data.x.schema_person_familyName}}",
"honorificSuffix":"{{site.data.x.schema_person_honorificSuffix}}",
"alternateName":"{{site.data.x.schema_person_alternateName}}",
"jobTitle":"{{site.data.x.schema_hasCredential_name}}",
"affiliation":{"@id":"{{site.url}}/#Organization"},
"address":{"@type":"PostalAddress",
    "streetAddress":"{{site.data.x.address|replace:' ',' '}}",
    "addressLocality":"{{site.data.x.city}}",
    "addressRegion":"{{site.data.x.state|upcase|truncate:2,""}}",
    "postalCode":"{{site.data.x.zip}}",
    "addressCountry":"{{site.data.x.country}}"},
"telephone":"{{site.data.x.tel}}",
"disambiguatingDescription":"{{site.data.x.schema_disambiguatingDescription}}",
"hasCredential":{"@type": "EducationalOccupationalCredential",
	"name":"{{site.data.x.schema_hasCredential_name}}",
	"credentialCategory":"{{site.data.x.schema_hasCredential_category}}",
	"recognizedBy":{"@type":"Organization","name":"{{site.data.x.schema_hasCredential_recognizedBy}}"}},
"image":{"@type":"ImageObject","@id":"{{site.url}}/{{site.data.x.profilephoto}}","url":"{{site.url}}/{{site.data.x.profilephoto}}","width":"250","height":"250"},
"identifier":{"@type":"PropertyValue","name":"NPI","value":"{{site.data.x.npi}}"},
"hasOccupation":{"@type":"Occupation",
	"name":"{{site.data.x.schema_hasCredential_name}}",
	"occupationalCategory":{"@type":"CategoryCode",
		"inCodeSet":{"@type":"CategoryCodeSet","name":"O*Net-SOC","dateModified":"{{site.data.x.schema_ONetCenter_year}}","url":"https://www.onetcenter.org/"},
		"codeValue":"{{site.data.x.schema_ONetCenter_code}}",
		"name":"{{site.data.x.schema_ONetCenter_name}}"}},
"worksFor":{"@id":"{{site.url}}/#Organization"},
"sameAs":{% if site.data.x.schema_sameAs_individual.size > 1 %}["{{site.data.x.schema_sameAs_individual|join:'","'}}"]{% else %}"{{site.data.x.schema_sameAs_individual}}"{% endif %}
}</script>