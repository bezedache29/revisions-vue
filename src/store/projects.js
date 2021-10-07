import axios from 'axios'
import router from '../router'

const projects = {
  namespaced: true,
  state() {
    return {
      apiUrl: 'https://api.github.com',
      apiKey: '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',
      projects: [],
      project: {},
      isHideParent: false
    }
  },
  getters: {
    getProjects(state) {
      return state.projects
    },
    getProject(state) {
      return state.project
    }
  },
  mutations: {
    UPDATE_PROJECTS(state, payload) {
      state.projects = payload
    },
    UPDATE_PROJECT(state, payload) {
      state.project = payload
    },
    HIDE_PARENT(state, payload) {
      state.isHideParent = payload
    }
  },
  actions: {

    // Permet de rechercher tous les projets
    async searchMyProjects(context) {
      try {

        const response = await context.dispatch('getRequestAxios', '/user/repos')
        console.log(response.data)
        context.commit('UPDATE_PROJECTS', response.data)

      } catch (e) {

        console.log(e)

      }
    },

    // Permet de récupérer un seul projet
    async goToDetailProject(context, payload) {
      try {
        const response = await axios.get(`${context.state.apiUrl}/repos/bezedache29/${payload.name}`)

        console.log(response.data)
        context.commit('UPDATE_PROJECT', response.data)

        const id = payload.id

        router.push({ name: 'project', params: { id }} )
      } catch (e) {
        console.log(e)
      }
    },

    // Cette action permet de faire des requêtes axios en utilisant un header avec un clé api
    async getRequestAxios(context, payload) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      axios.defaults.headers.common = {
        "Authorization": `token ${context.state.apiKey}`,
      }

      const response = await axios({
        method: "get",
        url: `${context.state.apiUrl}${payload}`,
        config,
      })

      return response
    },

    // Permet de cacher la page parent lorsque d'un details de projet est demandé
    hideParent(context, payload) {
      context.commit('HIDE_PARENT', payload)
    },
  }
}

export default projects