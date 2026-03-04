---
title: "Hotelek"
---

# Hotelek

A hotelek világa az utazás egyik legmeghatározóbb része. Mert nem mindegy, hogy egy zajos belvárosi szállodában, egy csendes butik hotelben, egy családbarát wellness hotelben vagy egy tengerparti resortban ébredünk. Ez a kategória azoknak a rövid, személyes, mégis informatív mikroposztjaimnak ad helyet, amelyek a szálláskeresés, szállásfoglalás és úti cél választás metszéspontjában születnek.

Nem klasszikus szállásfoglaló téma ez, nem feltétlen árakat hasonlítok össze, és nem próbálok minden hotelt „eladni”. Inkább olyan nézőpontokat, tapasztalatokat és benyomásokat gyűjtök össze, amelyek inspirálhatnak Téged, hogy egyáltalán melyik desztinációt válaszd és milyen típusú szálláshelyek között keresgélj.

## Egy - két ötlet, de úgyis a megélt utazási élmények adják majd a rövidebb impulzusakat 😉 

- városi hétvégéhez belvárosi hotelek vagy design szállodák,
- pihenős kikapcsolódáshoz wellness hotelek és spa szállodák,
- családi utazáshoz gyerekbarát hotelek,
- különleges élményhez butik hotelek vagy tematikus szálláshelyek.

A mikroposztok között lesznek olyanok, amelyek konkrét úti cél + hotelek logikára épülnek (például *budapesti hotelek*, *zambiai hotelek*, *tengerparti hotelek*), és olyanok is, amelyek inkább a hotelélményről szólnak: 

> miért kerül ennyibe egy 5 csillagos hotel, mitől jó egy reggeli, hogyan verhet rá egy kisebb, családias szállás egy nagy láncszállodára ❓Ilyesféle gondolatok lesznek❗

A „Hotelek” kategória célja nem az, hogy minden szálláshelyet lefedjen, hanem az, hogy utazás előtt vagy után legyen egy hely, ahol rövid, őszinte, emberi nézőpontokkal találkozol a szállásvilágról – belföldön és külföldön egyaránt.

## Bejegyzéseim, mikor mit mondtam a hotelek témámban 👇

{% assign posts = "" | split: "" %}

{% for p in site.pages %}
  {% if p.path contains 'hotelek/' and p.name != 'index.md' %}
    {% assign posts = posts | push: p %}
  {% endif %}
{% endfor %}

{% assign posts = posts | sort: "date" | reverse %}

{% assign months = "" | split: "" %}

{% for post in posts %}
  {% assign ym = post.date | date: "%Y-%m" %}
  {% unless months contains ym %}
    {% assign months = months | push: ym %}
  {% endunless %}
{% endfor %}

{% for ym in months %}
  {% assign year = ym | slice: 0, 4 %}
  {% assign month = ym | slice: 5, 2 %}

  <details>
    <summary><strong>{{ year }}. {{ month }}.</strong></summary>
    <ul>
      {% for post in posts %}
        {% assign post_ym = post.date | date: "%Y-%m" %}
        {% if post_ym == ym %}
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

