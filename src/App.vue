<template>
  <div id="app">
    <section class="hero is-fullheight">
      <div class="title-background-gradient">
      </div>
      <div class="hero-body title-background">
        <div class="container">
          <h1 class="title main-title blurred-out">
            {{ titres.title[lang] }}
          </h1>
          <h2 class="subtitle main-title is-hidden-mobile blurred-out">
            {{ titres.subtitle[lang] }}
          </h2>

          <div class="has-text-centered byline-container blurred-out">
            <span class="byline">
              {{ titres.byline[lang] }} <wbr/><a href="http://nkb.fr" target="_blank"><span class="author">Nicolas Kayser-Bril</span></a>
            </span>
            <div class="scroll-down-text blurred-out">{{ titres.scroll[lang] }}</div>
            <div class="scroll-down-arrow blurred-out"></div>
          </div>
        </div>
      </div>
    </section>
    <scene v-for="(scene, index) in scenes" 
           :sceneData="scene" 
           :lang="lang" 
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
  computed: {
    lang () {
      return window.location.search.includes("en") ? "en" : "fr"
    }
  },
  data () {
    return {
      titres: {
        "scroll": {
          "fr":"scrollez vers le bas",
          "en":"scroll down"
        },
        "title": {
          "fr":"Le silence des mollusques",
          "en":"The silence of the molluscs"
        },
        "subtitle": {
          "fr":"Comment les huîtres disparurent des côtes françaises avant que la science ne les résuscite.",
          "en":"How oysters disappeared from France's coasts and how science resuscitated them."
        },
        "byline": {
          "fr":"Un thriller ostréicole de",
          "en":"An oyster thriller by"
        }
      },
      scenes: [
        {
          "texts": [
            {
              "en": "Men and women have been eating oysters since forever. In the old Testament (3000 years ago), Moses goes so far as to forbid his followers from eating shells (Lev. 11).",
              "fr": "Des huîtres, on en mange depuis la nuit des temps, ou presque. La preuve: Dans l'ancien testament (il y a 3000 ans), Moïse prend la peine d'interdire la consommation de coquillages (Lévitique 11)."
            },
            {
              "en": "If the old man had written a cookbook, it would have looked like:",
              "fr": "Si le vieux barbu avait écrit un livre de cuisine, ça aurait donné:"
            },
            {
              "en": '<table class="table is-fullwidth"><tr><td>I. No pig</td><td>VI. No rabbit</td></tr><tr><td>II. No ostrich</td><td>VII. No camel</td></tr><tr>  <td>III. No frogs</td>  <td>VIII. No sausage</td></tr><tr>  <td>IV. No mussels</td>  <td>IX. No snails</td></tr><tr>  <td>V. No octopus</td>  <td>X. And no oysters!</td></tr></table>',
              "fr": '<table class="table is-fullwidth"><tr><td>I. Pas de porc</td><td>VI. Pas de lièvre</td></tr><tr><td>II. Pas d\'autruche</td><td>VII. Pas de chameau</td></tr><tr>  <td>III. Pas de grenouilles</td>  <td>VIII. Pas de boudin</td></tr><tr>  <td>IV. Pas de moules</td>  <td>IX. Pas d\'escargots</td></tr><tr>  <td>V. Pas de poulpe</td>  <td>X. Et surtout pas d\'huîtres!</td></tr></table>'
            }
          ],
          "legend": {
            "en": "Moses teaches the table of One.",
            "fr": "Moïse enseignant la table des 1."
          },
          "image": "moses.jpg"
        },
        {
          "texts": [
            {
              "en": "Luckily for culinary diversity, Christians did not follow these rules (Mat. 15:11 in particular) and continued to gobble down shells and molluscs.",
              "fr": "Heureusement pour la diversité culinaire, les chrétiens se sont affranchis de ces règles (Matthieu 15:11 en particulier) et ont continué à avaler des mollusques."
            },
            {
              "en": "In the Middle Ages, oysters were mostly a food for the super rich. You'll find plenty of oyster recipes in medieval cookbooks (which were, at the time, only meant for the cooks of the higher-ups).",
              "fr": "Au Moyen-Âge, les huîtres étaient surtout un aliment de super riches. On en trouve de nombreuses recettes dans les livres de cuisine - à l'époque destinés uniquement aux cuisines des aristocrates."
            }
          ],
          "legend": {
            "en": "How about an 'Oyster Potage' from 1654?",
            "fr": "Petit potage d'huîtres frites en 1654."
          },
          "image": "lavarenne.jpg"
        },
        {
          "texts": [
            {
              "en": "Oysters were for the rich inland, but not on the coast.",
              "fr": "L'huître était réservée aux riches dans les terres, mais pas sur le littoral."
            },
            {
              "en": "On the French Atlantic coast, it was normal for a worker to eat two dozens oysters for dinner.",
              "fr": "Sur la côte Altantique, un ouvrier pouvait se faire un repas de deux douzaines d'huîtres sans problème."
            }
          ],
          "legend": {
            "en": "An oyster peddler in the 17th century.",
            "fr": "Une vendeuse d'huîtres à l'écaille, c'est à dire à l'unité."
          },
          "image": "alescale.jpg"
        },
        {
          "texts": [
            {
              "en": "Between 1600 and 1700, the French Atlantic coast saw an economic boom.",
              "fr": "Entre 1600 et 1700, le littoral altantique est en plein essor."
            },
            {
              "en": "The population doubled in Nantes and Bordeaux. In the meantime, Paris or Toulouse barely saw growth.",
              "fr": "La population double à Nantes et à Bordeaux, alors qu'elle stagne à Paris ou à Toulouse."
            }
          ],
          "legend": {
            "en": "Bordeaux in the 18th century.",
            "fr": "Bordeaux au 18e siècle."
          },
          "image": "bordeaux.jpg"
        },
        {
          "texts": [
            {
              "en": "The economic boom happened because the rich in these towns enslaved millions to produce sugar, but that's another story.",
              "fr": "La raison de cet essor, c'est l'exploitation des Noirs aux Antilles, qui produisent le sucre que les Européens s'arrachent, mais c'est une autre histoire."
            }
          ],
          "legend": {
            "en": "A French entrepreneur making money in the 17th century.",
            "fr": "Un entrepreneur français en train de gagner de l'argent au 17e siècle."
          },
          "image": "sucrerie.jpg"
        },
        {
          "texts": [
            {
              "en": "Human population increased on the coast and so did its appetite for oysters.",
              "fr": "La population augmente sur le littoral, et son appetit d'huîtres avec."
            },
            {
              "en": "Oyster consumption increased and oyster population fell. As soon as 1750, authorities passed new laws to restrict oyster gathering and avoid complete stock depletion.",
              "fr": "La consommation augmente et la population d'huîtres diminue. Dès 1750, la récolte d'huîtres est reglementée pour limiter la baisse des stocks."
            },
            {
              "en": "But the police turned a blind eye. Fishermen needed money and clients wanted oysters.",
              "fr": "Mais la police ferme les yeux, les pêcheurs ont besoin d'argent et les clients réclament du mollusque."
            },
            {
              "en": "In the mid 19<sup>th</sup> century, oysters were almost totally gone from the French Atlantic coast.",
              "fr": "Au milieu du 19<sup>e</sup> siècle, les huîtres ont quasiment disparu des côtes atlantiques."
            }
          ],
          "legend": {
            "en": "A peddler of protected species.",
            "fr": "Un receleur d'espèce protégée."
          },
          "image": "escale2.jpg"
        },
        {
          "texts": [
            {
              "en": "Instead of enforcing the moratorium on oyster gathering, the French governement made a gamble and went all-in on aquaculture.",
              "fr": "Plutôt que de faire respecter le moratoire sur la pêche, le gouvernement tente un coup de poker et mise tout sur l'aquaculture."
            },
            {
              "en": "Napoléon Bonaparte, after his 1851 coup, invested tons of public funds in research for oyster-farming.",
              "fr": "Napoléon Bonaparte, après son coup d'état de 1851, investi quantité d'argent public dans la recherche ostréicole."
            }
          ],
          "legend": {
            "en": "Bonaparte in 1857. He loved oysters more than republics.",
            "fr": "Bonaparte en 1857. Il aima les huîtres plus que la république."
          },
          "image": "n3.jpg"
        },
        {
          "texts": [
            {
              "en": "Oyster farming was a catastrophe.",
              "fr": "Au début, c'est une catastrophe."
            },
            {
              "en": "Oysters were washed away by currents or stolen by local fishermen.",
              "fr": "Les huîtres des fermes ostréicole sont emportées par les courants ou pillées par les pêcheurs."
            }
          ],
          "legend": {
            "en": "The early days of aquaculture.",
            "fr": "Les débuts de l'aquaculture."
          },
          "image": "huningue.jpg"
        },
        {
          "texts": [
            {
              "en": "At the end of the 1860s, researchers finally managed to grow oysters (imported from England).",
              "fr": "Les chercheurs réussissent <em>in extremis</em> à élever des huîtres (importées d'Angleterre), à la fin des années 1860."
            },
            {
              "en": "It was about time, because public funds for oyster-farming dried up in 1870 when Bonaparte was defeated and left power.",
              "fr": "<em>In extremis</em> car les fonds pour la recherche ostréicole se tarissent en 1870, lorsque Napoléon Bonaparte perd le pouvoir."
            }
          ],
          "legend": {
            "en": "An early prototype of an oyster farm.",
            "fr": "Ferme ostréicole (prototype)."
          },
          "image": "concarneau.jpg"
        },
        {
          "texts": [
            {
              "en": "Since the late 19<sup>th</sup> century, oyster-farming has been a running business, albeit an expensive one. A farmed oyster is much more expensive than an wild one.",
              "fr": "Depuis, l'ostréiculture est une affaire qui roule. Mais qui coûte cher. Une huître de culture n'a pas le même prix qu'une huître ramassée par un pêcheur."
            },
            {
              "en": "Oyster farms are only profitable because the railroad opened new markets for molluscs and let city people eat fresh oysters.",
              "fr": "Si les parcs à huîtres sont rentables, c'est uniquement grâce au chemin de fer, qui a permis la consommation d'huîtres fraîches en ville."
            },
            {
              "en": "Oyster farms saved oysters, while at the same time turning it into a luxury food, even on the Atlantic coast.",
              "fr": "A partir de la fin du 19<sup>e</sup> siècle, l'huître n'est plus qu'un aliment pour riches, même sur le littoral."
            }
          ],
          "legend": {
            "en": "A restaurant selling oysters in Paris (15th arrondissement) in 1925.",
            "fr": "Marchande d’huîtres en 1925 au 24 rue Frémicourt, dans le 15e arrondissement de Paris. Le resto “Au parc de la Tremblade” a depuis été détruit et remplacé par un gros immeuble moderne."
          },
          "image": "paris.jpg"
        }
        
      ]
    }
  },
  mounted () {
    this.$nextTick(this.pinContainerScene)
  },
  methods: {
      pinContainerScene() {
        let self = this
        const scene = new this.$scrollmagic.Scene({
          triggerElement: '.scroll-down-text',
          triggerHook: 'onCenter'
        })
        .setClassToggle(".blurred-out", "blur-out")
        this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)
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

body
  background: black

.blurred-out
  transition-duration: 5s
  transition-property: opacity, filter
  opacity: 1
  filter: blur(0px)

.blur-out
  transition-duration: 10s
  transition-property: opacity, filter
  opacity: 0
  filter: blur(20px)

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

.scroll-down-text
  font-size: .7em
  margin-top: 1em

.scroll-down-arrow
  width: 10px
  height: 10px
  content: 'scroll down'
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transform: rotate(-45deg);
  margin: 0 auto

.byline
  background: black
  padding: 0 2vh

.author
  font-variant: small-caps
  color: white

</style>
