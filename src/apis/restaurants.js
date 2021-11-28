import { apiHelper } from "../utils/helpers";

const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {

    const searchParams = new URLSearchParams({ page, categoryId })
    console.log(searchParams)
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
}