export default {
  namespaced: true,
  state: {
    all: []
  },
  mutations: {
    reset(state, charts) {
      state.all = charts
    },
    push(state, chart) {
      state.all.push(chart)
    },
    delete(state, chart) {
      state.all = state.all
        .map(item => (item === chart ? null : item))
        .filter(item => item)
    },
    clean(state) {
      state.all = []
    },
    resize(state, alltime) {
      let
        timeout = alltime || 0,
        time = alltime || 0


      state.all.forEach(item => {
        item.resize()
      })

      function chartResize() {
        if (timeout && timeout > 0) {
          timeout -= time
          setTimeout(
            () => {
              state.all.forEach(item => {
                item.resize()
              })
              chartResize()
            },
            time
          )
        }
      }


      chartResize()
    }
  }
}