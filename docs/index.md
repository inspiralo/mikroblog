---
title: "Inspiráló mikroblog"
---

# Inspiráló mikroblog

Ez a mikroblog különböző témák rövid, tömör, gondolatébresztő bejegyzéseit gyűjti össze.  
A cél a rendszerek, mintázatok, dilemmák és összefüggések feltárása — sallangmentesen.

## Témák

{% comment %}
  1) Összegyűjtjük az összes mappanevet a site.pages alapján
  2) Kiszűrjük a gyökérfájlokat
  3) Kiszűrjük a duplikációkat
  4) Csak azokat listázzuk, ahol van index.md
{% endcomment %}

{% assign section_paths = "" | split: "" %}

{% for p in site.pages %}
  {% assign parts = p.path | split: "/" %}
  {% if parts.size > 1 %}
    {% assign section = parts[0] %}
    {% unless section_paths contains section %}
      {% assign section_paths = section_paths | push: section %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% for section in section_paths %}
  {% assign index_path = section | append: "/index.md" %}
  {% assign index_page = site.pages | where: "path", index_path | first %}
  {% if index_page %}
- **[{{ index_page.title }}]({{ index_page.url | relative_url }})**
  {% endif %}
{% endfor %}

---

## Legutóbbi bejegyzések

{% assign recent = site.pages | sort: "date" | reverse %}
{% for file in recent %}
  {% if file.title and file.name != "index.md" %}
- **[{{ file.title }}]({{ file.url | relative_url }})**
  {% endif %}
{% endfor %}
