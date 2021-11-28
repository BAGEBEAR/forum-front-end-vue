<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initialRestaurant="restaurant"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        opening_hours: "",
        description: "",
        image: "",
        categoryId: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });

        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
          openingHours,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    async handleAfterSubmit(formData) {
      this.isProcessing = true;

      try {
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳資料，請稍後再試",
        });
      }
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next();
  },
};
</script>