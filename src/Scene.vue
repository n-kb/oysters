<template>
	<div>
		<div :id="sceneName + 'start'"></div>
    <div v-for="(sceneText, index) in sceneData.texts" 
         class="trigger" 
         :style="'top:' + (index + 1) * 600 + 'px' " 
         :id="'trigger' + sceneName + index">
             </div>
		<section class="hero is-fullheight is-black" :id="sceneName">
     <div class="scene">
       <div class="columns">
         <div class="column">
           <div class="text-container content">
             <p v-for="(sceneText, index) in sceneData.texts" 
                class="main-text" 
                :id="'sceneText' + sceneName + index" 
                v-html="sceneText[lang]">
             </p>
           </div>
         </div>
         <div class="column">
           <div class="image-container">
             <div class="image-backgound"></div>
             <img :src="'./src/assets/' + sceneData.image" class="image">
             <div class="image-legend">
              {{ sceneData.legend[lang] }}
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </div>
</template>
<script>
  export default {
    name: 'scene',
    data () {
      return {
      }
    },
    props: {
      lang: {
        default: "fr",
        type: String
      },
      sceneName: {
        default: "",
        type: String
      },
      sceneData: {
        default: {},
        type: Object
      }
    },
    mounted () {
      this.$nextTick(this.pinContainerScene)
    },
    methods: {
      pinContainerScene() {
        let self = this
        const scene = new this.$scrollmagic.Scene({
          triggerElement: '#' + this.sceneName + 'start',
          triggerHook: 'onLeave',
          duration: self.sceneData.texts.length * 700
        })
        .setPin("#" + self.sceneName)
        this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)

        var index = 0
        for (let sceneText of self.sceneData.texts){
          var target = '#sceneText' + self.sceneName + index
          self.$ksvuescr.$emit('addScene', 'pinContainerScene', 
            new self.$scrollmagic.Scene({
              triggerElement: '#trigger' + self.sceneName + index,
              duration: 500
            })
            .setClassToggle(target, "opacity-on")
            )

          index++
        }
      }
    }
  }
</script>
<style lang="sass">
  
.scene
  padding: 5%

.image-backgound
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))
  min-height: 100%
  width: 100%
  position: absolute
  z-index: 2

.image-legend
  position: absolute
  z-index: 3
  font-size: .8rem
  bottom: 1%
  color: #999

.image-container
  position: relative

.image
  position: relative

.trigger
  position: relative

.text-container
  min-height: 100vh
  position: relative
  z-index: 4

.main-text
  opacity: 0
  transition-duration: 0.5s
  transition-property: opacity
  width: 100%
  color: #eee
  font-size: 1.4rem
  position: absolute
  top: 10%

.opacity-on
  opacity: 1
  transition-duration: 1s
  transition-property: opacity

</style>