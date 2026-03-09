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

A hangulatot jól megadja a friss élménybeszámoló Baluról is,  
amely pontosan azt a közvetlen, személyes tónust hozza,  
amire ez a mappa épül.

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

{% assign posts = site.categories.wellness-elmenyekrol | sort: "date" | reverse %}

{% assign current_year = "" %}
{% assign current_month = "" %}

{% for post in posts %}
  {% assign y = post.date | date: "%Y" %}
  {% assign m = post.date | date: "%m" %}

  {% if y != current_year %}
  <h2>{{ y }}</h2>
  {% assign current_year = y %}
  {% assign current_month = "" %}
  {% endif %}

  {% if m != current_month %}
  <h3>{{ y }}. {{ m }}.</h3>
  {% assign current_month = m %}
  {% endif %}

  <p>
    <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
    <small>{{ post.date | date: "%Y. %m. %d." }}</small>
  </p>

{% endfor %}
