---
title: "Inspiráló mikroblog"
---

# ℹ️ Inspiráló mikroblogom

Ez a mikroblog különböző témák rövid, tömör, gondolatébresztő bejegyzéseit gyűjti össze.  
Célom, hogy értékes ismeretekhez juttassalak. A bonyolultabb dolgokat rendszerint nagyobb erőforráskezelés árán lehet csak az érdeklődők elé tárni. Éppen ezért használom eme mikro gondolataimat, amelyek a komplexebb, kifejtősebb tartalmaim felé fognak navigálni. Talán jobb ez így, mert statikusan bejárható, az emberek gyorsabban érik el, s természetesen a keresőgépeknek is erőforrást kímélő feldolgozási támpont, hogy a kis szemfüles 🤖 **AI ügynökökről** már ne is beszéljek 😉

Egyes esetekben előfordul, hogy egy adott témában csupán a rövidebb jellegű gondolatom fejtem ki, bárminemű kifejtősebb hivatkozás nélkül. Ezek rendszerint akkor fognak előfordulni, amikor például egy *fogalmat*, *definciót* szeretnék számodra érthetővé varázsolni, vagy csak szimplán a véleményem közreadni a világ valamely témáimmal releváns eseményeivel kapcsolatban. Ezt azért is fontos volt a tudomásodra hoznom, mert ebben a megközelítésben kifejtősebb gondolataimmal az általam itt alkotott tartalmak egyáltalán nem képeznek redundanciát, tehát az apróbb meglátásaim is valami pluszt tesznek hozzá, ami reményeim szerint informatív lesz.   

## 💡 Témák

{% comment %}
  Témák = minden olyan oldal, ami:
  - index.md
  - nem a gyökér (tehát nem a főoldal)
  A GitHub Pages nem támogatja a where_exp-et,
  ezért kézzel gyűjtjük ki a megfelelő oldalakat.
{% endcomment %}

{% assign sections = "" | split: "" %}

{% for p in site.pages %}
  {% if p.name == "index.md" and p.url != "/" %}
    {% assign sections = sections | push: p %}
  {% endif %}
{% endfor %}

<div class="sections">
{% for page in sections %}
<p>📁 <strong><a href="{{ page.url | relative_url }}">{{ page.title }}</a></strong></p>
{% endfor %}
</div>

---

![Inspiráló mikroblog köszöntő](https://github.com/inspiralo/mikroblog/blob/main/docs/Inspirator-mikroblog-GitHub-koszonetnyilvanitas-a-latogatoknak.webp?raw=true)

<link rel="icon" type="image/x-icon" href="/mikroblog/favicon.ico">
