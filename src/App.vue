<template>
  <div id="app">
    <section class="hero is-fullheight">
      <div class="title-background-gradient">
      </div>
      <div class="hero-body title-background">
        <div class="container">
          <h1 class="title main-title">
            Le silence des mollusques
          </h1>
          <h2 class="subtitle main-title is-hidden-mobile">
            Comment les huîtres disparurent des côtes françaises avant que la science ne les résuscite.
          </h2>

          <div class="has-text-centered byline-container">
            <span class="byline">
              Un thriller ostréicole de <wbr/><a href="http://nkb.fr" target="_blank"><span class="author">Nicolas Kayser-Bril</span></a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <scene v-for="(scene, index) in scenes" 
           :sceneData="scene" lang="fr" 
           :sceneName="'scene' + index"
           :key="scene.image"></scene>
    <section class="hero is-fullheight is-black">
      <div class="columns">
        <div class="column promo-text has-text-centered">
          <div class="promo-cta">
            <a href="https://www.amazon.fr/Bouffes-Bluffantes-Kayser-Bril-Nicolas/dp/2955966053/" target="_blank">
              Retrouvez d'autres histoires culinaro-politiques dans <em>Bouffes Bluffantes</em>!
            </a>
          </div>
          <div class="promo-citation has-text-centered">
            «&nbsp;Un livre parfait pour l'été&nbsp;»
            <div class="citation-author">Atabula</div>
          </div>
          <div class="promo-citation has-text-centered">
            «&nbsp;On se régale&nbsp;»
            <div class="citation-author">Le Vif</div>
          </div>
          
        </div>
        <a class="column promo" href="https://www.amazon.fr/Bouffes-Bluffantes-Kayser-Bril-Nicolas/dp/2955966053/" target="_blank">
        </a>
      </div>
    </section>
    <section class="hero is-fullheight is-black">
      <div class="columns">
        <div class="column sources">
          <h3 class="sources-title has-text-centered">Sources</h3>
            <ul>
              <li>Boyer-Fonfrède, J.-F.-B. <em>De la Destruction des huîtres dans le bassin d'Arcachon, des causes qui l'ont amenée, des moyens à employer pour arrêter le mal et arriver au repeuplement</em>. 1847.</li>
              <li>Collins, James B. <em>The state in early modern France</em>. Cambridge University Press, 1995.</li>
              <li>Levasseur, Olivier. <em>Discours et réalité autour de la naissance des activités ostréicoles en France aux 18e et 19e siècles</em>. Actes du colloque international pluridisciplinaire "Le littoral : subir, dire, agir" - Lille, France, 16-18 janvier 2008.</li>
              <li>Levasseur, Olivier. <em>"Les cultures de l’eau: la naissance des aquacultures en France au XIXe siècle."</em> (2007)</li>
            </ul>
        </div>
        <div class="column sources">
          <h3 class="sources-title has-text-centered">Illustrations</h3>
          <ol>
            <li>Bible Pictures and What They Teach Us by Charles Foster, 1897</li>
            <li>Le Cuisinier François, La Varenne (1654).</li>
            <li>Gravure d'Abraham Bosse, 17e siècle.</li>
            <li>Vue du port de Nantes prise de l'île Gloriette au XVIIIe, attribuée à Nicolas Ozanne (1728 – 1811).</li>
            <li>Voyages aux Isles de l'Amérique (Antilles) : 1693-1705 . Tome 2</li>
            <li>Gravure de Pierre Brebiette, 17e siècle.</li>
            <li>Sa Majesté impériale Napoléon III, empereur des Français. 1857, photo de Gustave Le Gray.</li>
            <li>La ferme de Huningue, extrait de Levasseur, Olivier. "Les cultures de l’eau: la naissance des aquacultures en France au XIXe siècle." (2007).</li>
            <li>La ferme de Concarneau, extrait de Levasseur, Olivier. "Les cultures de l’eau: la naissance des aquacultures en France au XIXe siècle." (2007).</li>
            <li>Marchand d'huîtres, Agence Rol, 1925.</li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import scene from './Scene.vue'

export default {
  name: 'app',
  components: { scene },
  data () {
    return {
      scenes: [
        {
          "texts": [
            {
              "en": "",
              "fr": "Des huîtres, on en mange depuis la nuit des temps, ou presque. La preuve: Dans l'ancien testament (il y a 5000 ans), Moïse prend la peine d'interdire la consommation de coquillages (Lévitique 11)."
            },
            {
              "en": "",
              "fr": "Si le vieux barbu avait écrit un livre de cuisine, ça aurait donné:"
            },
            {
              "en": "",
              "fr": '<table class="table is-fullwidth"><tr><td>I. Pas de porc</td><td>VI. Pas de lièvre</td></tr><tr><td>II. Pas d\'autruche</td><td>VII. Pas de chameau</td></tr><tr>  <td>III. Pas de grenouilles</td>  <td>VIII. Pas de boudin</td></tr><tr>  <td>IV. Pas de moules</td>  <td>IX. Pas d\'escargots</td></tr><tr>  <td>V. Pas de poulpe</td>  <td>X. Et surtout pas d\'huîtres!</td></tr></table>'
            }
          ],
          "legend": {
            "en": "",
            "fr": "Moïse enseignant la table des 1."
          },
          "image": "moses.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "Heureusement pour la diversité culinaire, les chrétiens se sont affranchis de ces règles (Matthieu 15:11 en particulier) et ont continué à avaler des mollusques."
            },
            {
              "en": "",
              "fr": "Au Moyen-Âge, les huîtres étaient surtout un aliment de super riches. On en trouve de nombreuses recettes dans les livres de cuisine - à l'époque destinés uniquement aux cuisines des aristocrates."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Petit potage d'huîtres frites en 1654."
          },
          "image": "lavarenne.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "L'huître était réservée aux riches dans les terres, mais pas sur le littoral."
            },
            {
              "en": "",
              "fr": "Sur la côte Altantique, un ouvrier pouvait se faire un repas de deux douzaines d'huîtres sans problème."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Une vendeuse d'huîtres à l'écaille, c'est à dire à l'unité."
          },
          "image": "alescale.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "Entre 1600 et 1700, le littoral altantique est en plein essor."
            },
            {
              "en": "",
              "fr": "La population double à Nantes et à Bordeaux, alors qu'elle stagne à Paris ou à Toulouse."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Les quais de Nantes au 18e siècle."
          },
          "image": "nantes_v.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "La raison de cet essor, c'est l'exploitation des Noirs aux Antilles, qui produisent le sucre que les Européens s'arrachent, mais c'est une autre histoire."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Un entrepreneur français en train de gagner de l'argent au 17e siècle."
          },
          "image": "sucrerie.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "La population augmente sur le littoral, et son appetit d'huîtres avec."
            },
            {
              "en": "",
              "fr": "La consommation augmente et la population d'huîtres diminue. Dès 1750, la récolte d'huîtres est reglementée pour limiter la baisse des stocks."
            },
            {
              "en": "",
              "fr": "Mais la police ferme les yeux, les pêcheurs ont besoin d'argent et les clients réclament du mollusque."
            },
            {
              "en": "",
              "fr": "Au milieu du 19<sup>e</sup> siècle, les huîtres ont quasiment disparu des côtes atlantiques."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Un autre vendeur d'huîtres à l'écaille."
          },
          "image": "escale2.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "Plutôt que de faire respecter le moratoire sur la pêche, le gouvernement tente un coup de poker et mise tout sur l'aquaculture."
            },
            {
              "en": "",
              "fr": "Napoléon Bonaparte, après son coup d'état de 1851, investi quantité d'argent public dans la recherche ostréicole."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Bonaparte en 1857. Il aima les huîtres plus que la république."
          },
          "image": "n3.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "Au début, c'est une catastrophe."
            },
            {
              "en": "",
              "fr": "Les huîtres des fermes ostréicole sont emportées par les courants ou pillées par les pêcheurs."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Les débuts de l'aquaculture en Alsace."
          },
          "image": "huningue.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "Les chercheurs réussissent <em>in extremis</em> à élever des huîtres (importées d'Angleterre), à la fin des années 1860."
            },
            {
              "en": "",
              "fr": "<em>In extremis</em> car les fonds pour la recherche ostréicole se tarissent en 1870, lorsque Napoléon Bonaparte perd le pouvoir."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Ferme ostréicole (prototype)."
          },
          "image": "concarneau.jpg"
        },
        {
          "texts": [
            {
              "en": "",
              "fr": "Depuis, l'ostréiculture est une affaire qui roule. Mais qui coûte cher. Une huître de culture n'a pas le même prix qu'une huître ramassée par un pêcheur."
            },
            {
              "en": "",
              "fr": "Si les parcs à huîtres sont rentables, c'est grâce au chemin de fer, qui a développé la consommation d'huîtres en ville."
            },
            {
              "en": "",
              "fr": "A partir de la fin du 19<sup>e</sup> siècle, l'huître n'est plus qu'un aliment pour riches, même sur le littoral."
            }
          ],
          "legend": {
            "en": "",
            "fr": "Marchande d’huîtres en 1925 au 24 rue Frémicourt, dans le 15e arrondissement de Paris. Le resto “Au parc de la Tremblade” a depuis été détruit et remplacé par un gros immeuble moderne."
          },
          "image": "paris.jpg"
        }
        
      ]
    }
  }
}
</script>

<style lang="sass">

$family-primary: "Georgia"
$table-background-color: black
$table-color: #eee
$black: black

@import "~bulma/bulma"

.sources
  padding: 10vh 6vh
  color: white
  ol
    margin-top: 1em
    li
      margin-top: .2em

.sources-title
  font-size: 1.5em

.promo-text
  padding: 20vh 2vh

.citation-author
  text-align: right
  margin-right: 20%
  &:before
    content: "— "

.promo-citation
  margin-top: 2em

.promo-cta
  font-size: 1.5em

.main-title
  background: black
  color: white
  padding: 0 1vh
  position: relative
  z-index: 3

.promo
  background: url(https://raw.githubusercontent.com/n-kb/oysters/master/src/assets/livre.jpg) center center
  background-size: cover
  height: 100vh

.title-background
  background: url(https://raw.githubusercontent.com/n-kb/oysters/master/src/assets/arcachon.jpg) center center
  background-size: cover

.title-background-gradient
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))
  min-height: 100vh
  width: 100%
  position: absolute
  z-index: 2

.byline-container
  width: 100%
  position: relative
  bottom: -20vh
  z-index: 3
  color: white

.byline
  background: black
  padding: 0 2vh

.author
  font-variant: small-caps
  color: white

</style>
