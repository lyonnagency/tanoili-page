import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    benefit: {
      code: "",
      name: "",
      description: "",
      image: ""
    },
    benefits: [
      {
        code: "01",
        name: "Control del colesterol",
        description: "El aceite de aguacate es un buen sustituto de aquellos aceites de origen animal dañinos para tu salud que te ayuda a controlar los niveles de colesterol.",
        image: "benefits/01.jpg"
      },
      {
        code: "02",
        name: "Prevención contra enfermedades",
        description: "Proporciona aceites esenciales para tu cuerpo que contienen altos niveles de proteínas, carbohidratos, vitaminas, minerales y omegas 3, 6 y 9, que ayudan en el tratamiento contra enfermedades crónicas importantes.",
        image: "benefits/02.jpg"
      },
      {
        code: "03",
        name: "Tu aliado en la cocina",
        description: "Respeta y resalta el sabor y el olor de los alimentos; por eso se usa directamente o como complemento de otros aceites. Es excelente para acompañar ensaladas y aderezos.",
        image: "benefits/03.jpg"
      },
      {
        code: "04",
        name: "Además",
        description: "Permite cocinar a altas temperaturas sin desnaturalizarlo ni emitir sustancias perjudiciales para la salud, haciéndolo perfecto para freír alimentos. Tiene una vida útil de hasta tres años con el almacenamiento adecuado.",
        image: "benefits/04.jpg"
      }
    ]
  },
  getters: {
    benefit: state => {
      return state.benefit
    },
    allBenefits: state => {
      return state.benefits
    }
  },
  mutations: {
    getBenefit(state, code) {
      state.benefit = state.benefits.find((benefit) => benefit.code === code)
    }
  },
  actions: {
    getBenefit({ commit }, payload) {
      commit('getBenefit', payload)
    }
  }
})