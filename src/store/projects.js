import axios from 'axios'
import router from '../router'

const projects = {
  namespaced: true,
  state() {
    return {
      // apiUrl: 'https://poke-rest.ripley.eu/api/deck',
      // decks: {},
      // isParentHide: false,
      // deck: {},
      // deckLoaded: true,
      // reloadDeck: false,
      // modalError: false,
      // isLoadedDeck: false,
      // createDeck: false,
      // deckMessage: false,
      // closeLoaderCards: false
      // https://api.github.com/repos/bezedache29/activit-_git
      apiUrl: 'https://api.github.com',
      apiKey: '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',
      projects: [],
      project: {},
      isHideParent: false
    }
  },
  getters: {
    // getDecks(state) {
    //   return state.decks
    // },
    getProjects(state) {
      return state.projects
    },
    getProject(state) {
      return state.project
    }
  },
  mutations: {
    // UPDATE_DECKS(state, payload) {
    //   state.decks = payload
    // },
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

  
  // actions: {

  //   // Permet de rechercher tous les decks
  //   async searchMyDecks(context, payload) {

  //     try {
  //       const response = await axios.get(`${context.state.apiUrl}?page=${payload}`)
  //       context.commit('UPDATE_DECKS', response.data)
  //     } catch (e) {
  //       console.log(e)
  //     }
      
  //   },

  //   // Permet de rechercher le detail d'un deck et d'afficher la page de détails en cachant la page parent
  //   async goToDetailDeck(context, payload) {

  //     try {
  //       const response = await axios.get(`${context.state.apiUrl}/${payload}`)
  //       context.commit('UPDATE_DECK', response.data)
  //       context.commit('HIDE_PARENT', true)

  //       // localStorage.setItem('deck', JSON.stringify(response.data))

  //       const id = payload
  //       router.push({ name: 'my-deck', params: { id }} )
  //     } catch (e) {
  //       console.log(e)
  //     }
      
  //   },

  //   // Permet de rechercher un deck
  //   async searchDeck(context, payload) {
  //     try {
  //       const response = await axios.get(`${context.state.apiUrl}/${payload}`)

  //       if (response.status === 404) {
  //         console.log('erreur')
  //       } else {
  //         context.commit('UPDATE_DECK', response.data)
  //         context.commit('HIDE_PARENT', true)
  //       }
  //     } catch (e) {
  //       console.log(e)
  //       context.commit('IS_DECK_LOADED', false)
  //       context.commit('CLOSE_LOADER_CARDS')
  //       router.push({ name: 'home-app'})
  //     }
      
  //   },

  //   // Annonce une édition de deck
  //   async editDeck(context) {
  //     context.commit('HIDE_PARENT', false)

  //     router.push({ name: 'admin-deck'})
  //   },

  //   // Permet d'enlever une carte du deck
  //   async removeCard(context, payload) {
  //     context.commit('DECK_LOADED', false)
  //     context.commit('RELOAD_DECK', false)
  //     context.commit('DECK_MESSAGE', false)

  //     try {
  //       const response = await axios.put(`${context.state.apiUrl}/${context.state.deck.id}`, 
  //       { 
  //         deck_id: context.state.deck.id,
  //         card_id: payload,
  //         function: 'decrement'
  //       })

  //       context.commit('UPDATE_DECK', response.data)
  //       context.commit('DECK_MESSAGE', {type: 'success', message: 'Suppression de carte avec succès', function: 'remove'})
  //       context.commit('RELOAD_DECK', true)
  //       context.commit('DECK_LOADED', true)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },

  //   // Permet de rafraichir le deck
  //   async refreshDeck(context, payload) {

  //     try {
  //       const response = await axios.get(`${context.state.apiUrl}/${payload}`)
  //       context.commit('UPDATE_DECK', response.data)
  //     } catch (e) {
  //       console.log(e)
  //     }

  //   },

  //   // Permet de changer le nom du deck
  //   async changeName(context, payload) {
  //     // Check si le name n'a pas uniquement des espaces ou n'est pas vide
  //     if (payload.trim().length > 0) {

  //       // On check que le name ne soit pas déjà identique en BDD, cela evite une requete inutile
  //       if (payload !== context.state.deck.name) {

  //         try {
  //           const response = await axios.put(`${context.state.apiUrl}/${context.state.deck.id}`, 
  //           { 
  //             deck_id: context.state.deck.id,
  //             name: payload,
  //             rename: true
  //           })

  //           // Si la reponse est un message, on ouvre la modal pour afficher l'erreur
  //           // Sinon on update le deck
  //           if (response.data.message) {
  //             context.commit('SHOW_MODAL_ERROR', true)
  //           } else {
  //             context.commit('UPDATE_DECK', response.data)
  //             context.commit('DECK_MESSAGE', {type: 'success', message: 'Le nom de votre deck a bien été pris en compte', function: 'editName'})
  //           }
  //         } catch (e) {
  //           console.log(e)
  //         }

  //       }
  //     } else {
  //       context.commit('SHOW_MODAL_ERROR', true)
  //     }
  //   },

  //   // Permet de mettre à jour le deck
  //   updateDeck(context, payload) {
  //     context.commit('UPDATE_DECK', payload)
  //   },

  //   // Permet de cacher la page parent lorsque d'un details de deck est demandé
  //   hideParent(context, payload) {
  //     context.commit('HIDE_PARENT', payload)
  //   },

  //   // Permet de reset le chargement
  //   resetDeckLoader(context) {
  //     context.commit('DECK_LOADED', false)
  //   },

  //   // Demande un rechargement de deck
  //   resetReloadDeck(context) {
  //     context.commit('RELOAD_DECK', false)
  //   },

  //   // Ferme la modal error
  //   closeModalError(context) {
  //     context.commit('SHOW_MODAL_ERROR', false)
  //   },

  //   // Sert a savoir si le deck est chargé
  //   isDeckLoaded(context, payload) {
  //     context.commit('IS_DECK_LOADED', payload)
  //   },

  //   // Permet de ferme l'alert des messages
  //   closeDeckMessage(context) {
  //     context.commit('DECK_MESSAGE', false)
  //   },

  //   // Fait savoir qu'on ne cré pas de deck
  //   resetCreateDeck(context) {
  //     context.commit('CREATE_DECK', false)
  //   },
 
  //   // Permet d'ajouter une carte qui n'existe pas dans le deck dans ce dernier
  //   async goToCreate(context) {
  //     // On indique que l'on veut creer un deck
  //     context.commit('CREATE_DECK', true)
  //     // On efface le deck en localstorage (meme s'il n'y en a pas)
  //     localStorage.removeItem('deck')

  //     try {
  //       // Pour test erreur
  //       // const response = await axios.post(context.state.apiUrl,
  //       // { 
  //       //   smiley_id: 54
  //       // })

  //       // On cré le deck en BDD
  //       const response = await axios.post(context.state.apiUrl)

  //       if (response.status === 200) {
  //         // On met le deck en localstorage
  //         localStorage.setItem('deck', JSON.stringify(response.data))

  //         context.commit('DECK_MESSAGE', {type: 'success', message: 'Création du deck avec succès', function: 'createDeck'})

  //         router.push({ name: 'admin-deck'})
  //       }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  // }
}

export default projects