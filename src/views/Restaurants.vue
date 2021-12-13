<template>
  <div class="container py-5">
    <NavTabs />

    <!-- RestaurantNavPills -->
    <RestaurantNavPills :categories="categories" />
    <!-- RestaurantCard -->
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </div>
    <!-- Restaurant Pagination -->
    <RestaurantPagination
      v-if="restaurants.length > 1"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
    <div v-if="restaurants.length < 1">
      此類別目前無資料
    </div>
  </div>
</template>

<script>
import RestaurantNavPills from "../components/RestaurantNavPills.vue";
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        const { restaurants, categories, categoryId, page, totalPage, prev, next} = response.data

        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;

        // console.log("response", response);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId})
  },
  beforeRouteUpdate (to, from, next) {
    const { page = '', categoryId= '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId})
    next()
  }
};
</script>