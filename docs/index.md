---
layout: default
title: Inspiráló mikroblog
---

<img src="{{ '/Inspirator-mikroblog-GitHub-koszonetnyilvanitas-a-latogatoknak.webp' | relative_url }}" alt="Inspiráló mikroblog köszöntő">

# ℹ️ Inspiráló mikroblogom

> Rövid, tömör, gondolatébresztő bejegyzések különböző témákból — mindegyik egy apró momentum, ami megérte, hogy megálljak és leírjam.

A célom, hogy értékes ismeretekhez juttassalak.  
A mikroblog a nagyobb, részletesebb tartalmaim előszobája: gyorsan bejárható, keresőbarát, és jól kiegészíti a fő blogomat.

<a href="https://inspiralo.github.io/"><img src="{{ '/inspirator-GitHub-io.webp' | relative_url }}" alt="Inspiráló inspirátor aki imádja elemezni a forráskódokat!"></a>

<a href="https://github.com/inspiralo/"><img src="{{ '/inspirator-GitHub-com.webp' | relative_url }}" alt="Inspiráló inspirátor forráskód bogarász, túlélés alapon!"></a>

<img src="{{ '/inspirator-tollabol.webp' | relative_url }}" alt="Értékteremtő mikro gondolatokról, javaslatokról, informatív anyagokról!">

---

## 💡 Témák

{% assign latest_post = site.posts | sort: "date" | reverse | first %}
{% assign latest_category = latest_post.categories | first %}

{% assign categories = 
  "hotelek:Hotelek,
   konyvekrol:Könyvekről,
   kozeleti:Közéleti,
   kriptografia:Kriptográfia,
   mesterseges-intelligencia:Mesterséges Intelligencia,
   wellness-elmenyekrol:Wellness élményekről" | split: "," 
%}

{% assign sorted_categories = categories | sort %}

<div class="sections">

{% for item in sorted_categories %}
  {% assign parts = item | split: ":" %}
  {% assign slug = parts[0] %}
  {% assign title = parts[1] %}

  <a href="{{ '/' | append: slug | append: '/' | relative_url }}" class="topic-card">
    {% if latest_category == slug %}<span class="red-dot"></span>{% endif %}
    📁 <strong>{{ title }}</strong>
  </a>
{% endfor %}

</div>

<p class="latest-info">
  <span class="red-dot"></span> Ebben a témában formáltam legutóbb véleményt, írtam valami érdekesről. Keresd meg! 😉
</p>

<hr>

<img src="{{ '/Inspirator-mikroblog-alja.webp' | relative_url }}" alt="Inspiráló mikroblog alsó záródizájn">
