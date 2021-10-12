<template>
    <div class="antialiased bg-gray-100 text-gray-700">
      <div class="flex w-full h-screen justify-center items-center">
          <div class="w-full max-w-xl">
              <h1 class="font-bold text-5xl text-center text-yellow-600"> Cine Quizz </h1>
              <div class=" bg-white p-10 shadow-lg mt-8 rounded-t-xl">
                <div v-if="index < counted && questions != null">
                  <p class=" text-xl font-bold"> {{ questions[index]["question"]}} </p>
                  <label :for="key" 
                          class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" 
                          :key="key"
                          v-for=" answer, key in questions[index]['answers']" 
                          :class="{'hover:bg-gray-200 cursor-pointer' : selectedAns == '', 
                          'bg-red-600' : selectedAns == key ,
                          'bg-green-500' : (key == questions[index]['correctAnswer'] && selectedAns != '' )}">
                      <input type="radio" class="hidden" 
                              :id="key" :value="key"
                              @change="answered($event)"
                              :disabled="selectedAns != '' ">
                      {{answer}}
                  </label>
                  <div class=" mt-6 flow-root">
                      <button class=" float-right bg-blue-600 text-yellow-50 text-sm 
                              px-5 py-2 font-bold tracking-wide rounded-full"
                              v-show="selectedAns != '' && index < counted - 1 "
                              @click="nextQuestion"> 
                              Suivant &gt;
                      </button>
                      <button class=" float-right bg-blue-600 text-yellow-50 text-sm 
                              px-5 py-2 font-bold tracking-wide rounded-full"
                              v-show="selectedAns != '' && index == counted - 1"
                              @click="showResult "> 
                              Fin &gt; 0665106537  
                      </button>
                  </div>
                </div>
                <div v-else>
                  <h1 class="text-bold text-3xl">Résultats</h1> 
                  <div class="flex justify-start space-x-4">
                    <p>Bonnes réponses: 
                      <span class="text-2xl text-green-600 font-bold"> {{ correctAnswers }} </span>
                    </p>
                    <p>Mauvaises réponses: 
                      <span class="text-2xl text-red-600 font-bold"> {{ wrongAnswer }} </span>
                    </p>
                  </div>
                  <div class=" mt-6 flow-root">
                      <button class=" float-right bg-blue-600 text-yellow-50 text-sm 
                              px-5 py-2 font-bold tracking-wide rounded-full"
                              @click="resetQuizz"> 
                              Rejouer
                      </button>
                  </div>
                </div>
              </div>
          </div>
          
      </div>
      
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  data () {
    return {
      index: 0,
      correctAnswers: 0,
      wrongAnswer: 0,
      counted: 10,
      selectedAns: "",
      questions: null
    }
  },
  mounted(){
    axios.get("http://localhost:5000")
    .then(response => {
      // console.log ("server arrive", response)
      // mapper le notre réponse pour avoir notre tableau de question de départ
      const newQuestion = response.data.results.map((serveQuestion) => {
        
        const arrayQuestions = {
          question:serveQuestion.question,
          answers: "" ,
          correctAnswer: ""
        }
        const answers = serveQuestion.incorrect_answers
        arrayQuestions.correctAnswer = Math.floor(Math.random() * 4 + 1);
        answers.splice(arrayQuestions.correctAnswer-1, 0,serveQuestion.correct_answer)
        arrayQuestions.answers       = answers

        return arrayQuestions;
      })
      console.log(newQuestion)
      this.questions= newQuestion
    })
  },
  methods: {
    answered (e) {
      this.selectedAns = e.target.value;
      // Incrementation of right and wrong answers
      if (this.selectedAns == this.questions[this.index]['correctAnswer']){
        this.correctAnswers++;
      }else{
        this.wrongAnswer++;
        console.log (this.correctAnswers +" "+this.wrongAnswer)
      }
      e.target.checked =false
    },
    nextQuestion () {
      // To go to next question
      this.index++;
      this.selectedAns = '';
    }, 
    showResult () {
      // Show result of quiz
      this.index++;
    },
    resetQuizz () {
      // reset to play again
      this.index          = 0;
      this.selectedAns    = "";
      this.correctAnswers = 0;
      this.wrongAnswer    = 0;

    }
  }
}
</script>

