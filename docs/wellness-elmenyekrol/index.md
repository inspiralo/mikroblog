---
layout: default
title: "Wellness élményekről"
---

# Wellness élményekről

A *Wellness élmények* kategória a rövid, mégis emlékezetes regeneráló pillanatokról szól. Szaunázásról, spa‑térélményekről, különleges felöntésekről, csendes pihenőkről és minden olyan 
apró részletről, amely egy helyet vagy alkalmat igazán jóvá tesz.

A fókusz nem a hosszú beszámolókon van, hanem a lényegen: mi volt az a momentum, ami miatt érdemes volt megállni, figyelni, jelen lenni, esetleges hosszabb beszámolót a bennük lévő 
hivatkozás útján, szinte biztos, hogy megfogod lelni 😉

---

## 🔥 Szaunaélmények

A szaunázás egyszerre rituálé és játék.  
A jó felöntés, a ritmus, a hő és a figyelem együtt adják azt a sajátos állapotot, amit máshol nem lehet megtalálni.

Ebben a kategóriában gyakran jelennek meg:

- rövid élményjegyzetek egy-egy alkalomról  
- különleges szaunamesterek és stílusok  
- térélmények, amelyek megmaradnak  
- apró tanulságok, amiket érdemes továbbvinni

---

## 💧 Spa és pihenőtér

A spa‑élményeknél a tér, a fény, a víz és a ritmus számít.  
Nem a luxus, hanem az összhang.

Ezekben a bejegyzésekben a rövid, letisztult benyomások kapnak helyet:

- milyen volt a tér aránya  
- milyen hangulatot adott a víz  
- volt‑e valami váratlanul jó részlet  
- mi az, amit érdemes megjegyezni későbbre

---

## Bejegyzéseim időrendben 👇

{% assign raw_posts = site.categories["wellness-elmenyekrol"] %}
{% if raw_posts %}
  {% assign posts = raw_posts | sort: "date" | reverse %}
{% else %}
  {% assign posts = "" %}
{% endif %}

{% assign years = posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in years %}
<details>
  <summary><strong>{{ year.name }}</strong></summary>

  {% assign months = year.items | group_by_exp: "post", "post.date | date: '%Y. %m.'" %}

  {% for month in months %}
  <details style="margin-left: 1rem;">
    <summary><strong>{{ month.name }}</strong></summary>
    <ul>
      {% for post in month.items %}
      <li>
        <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
        <small>{{ post.date | date: "%Y. %m. %d." }}</small>
        {% if post.tags %}
          <br><small>Címkék: {{ post.tags | join: ', ' }}</small>
        {% endif %}
      </li>
      {% endfor %}
    </ul>
  </details>
  {% endfor %}

</details>
{% endfor %}
