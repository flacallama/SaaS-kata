let initialState = {
};

export const getCatfish = (state = initialState, action) => {
  switch (action.type) {

    case "GET_CATFISH_PENDING":
      return state;
    case "GET_CATFISH_FULFILLED":
      const allFish = action.payload.data.map(fish => {
        return { ...fish, "weight": Math.round(fish.girth * fish.girth * fish.length / 800) }
      })

      const channelCats = allFish.filter(cat => cat.species === "channel").sort((a,b) => b.weight - a.weight).slice(0,5)
      const blueCats = allFish.filter(cat => cat.species === "channel").sort((a,b) => b.weight - a.weight).slice(0,5)
      const flatHeads = allFish.filter(cat => cat.species === "channel").sort((a,b) => b.weight - a.weight).slice(0,5)

      return {
        channelCats,
        blueCats,
        flatHeads
      }

    default:
      return state;
  }
}
