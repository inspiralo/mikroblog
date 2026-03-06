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

## Ebben a wellness témámban jelenleg az alábbi apróbb bejegyzéseim olvashatod időrend szerint 👇

{% assign posts = "" | split: "" %}

{% for p in site.pages %}
  {% if p.path contains 'wellness-elmenyekrol/' and p.name != 'index.md' %}
    {% assign posts = posts | push: p %}
  {% endif %}
{% endfor %}

{% assign posts = posts | sort: "date" | reverse %}

{% assign years = "" | split: "" %}

{% for post in posts %}
  {% assign y = post.date | date: "%Y" %}
  {% unless years contains y %}
    {% assign years = years | push: y %}
  {% endunless %}
{% endfor %}

{% for y in years %}
<details>
  <summary><strong>{{ y }}</strong></summary>

  {% assign months = "" | split: "" %}
  {% for post in posts %}
    {% assign post_y = post.date | date: "%Y" %}
    {% if post_y == y %}
      {% assign m = post.date | date: "%m" %}
      {% unless months contains m %}
        {% assign months = months | push: m %}
      {% endunless %}
    {% endif %}
  {% endfor %}

  {% for m in months %}
  <details style="margin-left: 1rem;">
    <summary><strong>{{ y }}. {{ m }}.</strong></summary>
    <ul>
      {% for post in posts %}
        {% assign post_y = post.date | date: "%Y" %}
        {% assign post_m = post.date | date: "%m" %}
        {% if post_y == y and post_m == m %}
          <li>
            <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
            <small>{{ post.date | date: "%Y. %m. %d." }}</small>
            {% if post.tags %}
              <br><small>Címkék: {{ post.tags | join: ', ' }}</small>
            {% endif %}
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </details>
  {% endfor %}

</details>
{% endfor %}

{% include share.html %}
