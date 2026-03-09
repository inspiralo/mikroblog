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

<div class="sections">

<a href="{{ '/konyvekrol/' | relative_url }}" class="topic-card">
  {% if latest_category == "konyvekrol" %}<span class="red-dot"></span>{% endif %}
  📁 <strong>Könyvekről</strong>
</a>

<a href="{{ '/kriptografia/' | relative_url }}" class="topic-card">
  {% if latest_category == "kriptografia" %}<span class="red-dot"></span>{% endif %}
  📁 <strong>Kriptográfia</strong>
</a>

<a href="{{ '/hotelek/' | relative_url }}" class="topic-card">
  {% if latest_category == "hotelek" %}<span class="red-dot"></span>{% endif %}
  📁 <strong>Hotelek</strong>
</a>

<a href="{{ '/wellness-elmenyekrol/' | relative_url }}" class="topic-card">
  {% if latest_category == "wellness-elmenyekrol" %}<span class="red-dot"></span>{% endif %}
  📁 <strong>Wellness élményekről</strong>
</a>

</div>

<p class="latest-info">
  <span class="red-dot"></span> Ebben a témában jelent meg a legfrissebb bejegyzés.
</p>

<hr>

<img src="{{ '/Inspirator-mikroblog-alja.webp' | relative_url }}" alt="Inspiráló mikroblog alsó záródizájn">
