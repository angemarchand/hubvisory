<template>
    <div class="antialiased bg-gray-100 text-gray-700">
      <div class="flex w-full h-screen justify-center items-center">
          <div class="w-full max-w-xl">
              <h1 class="font-bold text-5xl text-center text-yellow-600"> Cine Quizz </h1>
              <div class=" bg-white p-10 shadow-lg mt-8 rounded-t-xl">
                  <p class=" text-xl font-bold"> {{ questions[0]["question"]}} </p>
                  <label :for="key" 
                          class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" 
                          :key="key"
                          v-for=" answer, key in questions[0]['answers']" 
                          :class="{'hover:bg-gray-200 cursor-pointer' : selectedAns == ''}">
                      <input type="radio" class="hidden" 
                              :id="key" :value="key"
                              @change="answered($event)"
                              :disabled="selectedAns != '' ">
                      {{answer}}
                  </label>

              </div>
          </div>
          
      </div>
      
    </div>
</template>

<script>

export default {
  name: "Home",
  data () {
    return {
      selectedAns: "",
      questions: [
        {
          question: "Parmis ces films lequel est un Marvel ?",
          answers: { a: "Iron man ", b: "Aladin", c: "Le grand bain"},
          correctAnswer: "a"
        },
        {
          question: "Quelle est la date de sortie de Ant man?",
          answers: { a: "2015-08-14 ", b: "2015-07-14", c: "2013-07-14"},
          correctAnswer: "b"
        },
        {
          question: "Dans quel film Chirs Hemsworth est le fils de Odin ?",
          answers: { a: "Spider man ", b: "Thor", c: "Harry potter"},
          correctAnswer: "b"
        },
        {
          question: "Parmis ces films lequel est un Marvel ?",
          answers: { a: "Iron man ", b: "Aladin", c: "Le grand bain"},
          correctAnswer: "a"
        },
      ]
    }
  },
  methods: {
    answered (e) {
      this.selectedAns = e.target.value;
      console.log(this.selectedAns)

    }
  }
}
</script>

