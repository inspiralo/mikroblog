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

{% assign posts = site.categories.hotelek | sort: "date" | reverse %}

{% assign current_year = "" %}
{% assign current_month = "" %}

{% for post in posts %}
  {% assign post_year = post.date | date: "%Y" %}
  {% assign post_month = post.date | date: "%m" %}

  {% if post_year != current_year %}
    {% if current_year != "" %}
        </details> <!-- hónap lezárása -->
      </details>   <!-- év lezárása -->
    {% endif %}
    <details>
      <summary><strong>{{ post_year }}</strong></summary>
    {% assign current_year = post_year %}
    {% assign current_month = "" %}
  {% endif %}

  {% if post_month != current_month %}
    {% if current_month != "" %}
      </details> <!-- előző hónap lezárása -->
    {% endif %}
    <details style="margin-left: 1rem;">
      <summary><strong>{{ post_year }}. {{ post_month }}.</strong></summary>
    {% assign current_month = post_month %}
  {% endif %}

  <ul>
    <li>
      <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
      <small>{{ post.date | date: "%Y. %m. %d." }}</small>
      {% if post.tags %}
        <br><small>Címkék: {{ post.tags | join: ', ' }}</small>
      {% endif %}
    </li>
  </ul>

{% endfor %}

{% if current_month != "" %}
  </details> <!-- utolsó hónap lezárása -->
{% endif %}
{% if current_year != "" %}
</details> <!-- utolsó év lezárása -->
{% endif %}
