<template>
  <div class="antialiased bg-gray-100 text-gray-700">
    <div class="flex w-full h-screen justify-center items-center">
      <div class="w-full max-w-xl">
        <h1 class="font-bold text-5xl text-center text-yellow-600"> Cine Quizz </h1>
        <div class="bg-white p-10 shadow-lg mt-8 rounded-t-xl">
          <p class=" text-xl font-bold"> {{ questions[index]["question"] }} </p>
          <label  :for="key" 
                  class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
                  :key="key"
                  v-for="answer, key in answers"> 
            <input type="radio" class="hidden"
                    :id="key">
          {{answer.title}}
          </label>
          <div class=" mt-6 flow-root">
            <button class="float-right bg-blue-600 text-yellow-50 text-sm 
                          px-5 py-2 font-bold tracking-wide rounded-full"
                    @click="nextQuestion">
              Suivant &gt;
            </button>
          </div>
        </div>

      </div>

    </div>
  </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "Quiz",

  data() {
    return {
      answers: "null",
      questions: "null",
      index: 0
    }
  },

  mounted(){
    axios.get("http://localhost:5000/question")
    .then (res => {
      console.log(this.questions = res.data)
    })

    axios.get("http://localhost:5000/")
    .then( response => {
      let options = {}
      let res = response.data.results;
      console.log(this.answers = res.slice(0, 4))
      if (res.slice(0, 4)){

      }
    })
    .catch(error => {
      console.log("show error:", error)
    })
    console.log("haha")

  },
  methods: {
    nextQuestion () {
      // To go to next question
      this.index++;
      // this.selectedAns = '';
    }, 
  }


}
</script>

