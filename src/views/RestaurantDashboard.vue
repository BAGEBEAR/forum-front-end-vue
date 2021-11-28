<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Carmel Mante",
    tel: "620.631.0513 x7825",
    address: "59154 Luettgen Plains",
    opening_hours: "08:00",
    description:
      "Qui veritatis quisquam repellendus corrupti non fugiat eveniet ipsa sed. Eligendi et rem omnis ut. Ex dolore optio. Quidem provident id vel ut ipsa dolor vel consequatur nihil.\n \rAdipisci sint repellendus accusantium voluptatibus ipsa consectetur. Sit rerum nostrum magnam ex nulla veniam. Vel repellat qui et minus voluptates impedit.\n \rFacere eveniet quam iste voluptas debitis optio saepe deleniti numquam. Cumque nulla minus ut. Quia ratione et dignissimos repudiandae.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=49.762084237184865",
    viewCounts: 1,
    createdAt: "2021-11-11T10:05:23.000Z",
    updatedAt: "2021-11-14T04:33:55.000Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-11T10:05:23.000Z",
      updatedAt: "2021-11-11T10:05:23.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Dolore error harum tenetur laudantium.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-11T10:05:23.000Z",
        updatedAt: "2021-11-11T10:05:23.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$gcq3aK0/zBE4bIu4lSDFwe61oqYZMiGbTzvbR7DkW31XPsX2rfe.S",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-11T10:05:22.000Z",
          updatedAt: "2021-11-11T10:05:22.000Z",
        },
      },
      {
        id: 51,
        text: "Officia nihil corrupti est qui aspernatur et possimus animi.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-11T10:05:23.000Z",
        updatedAt: "2021-11-11T10:05:23.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$gcq3aK0/zBE4bIu4lSDFwe61oqYZMiGbTzvbR7DkW31XPsX2rfe.S",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-11T10:05:22.000Z",
          updatedAt: "2021-11-11T10:05:22.000Z",
        },
      },
      {
        id: 101,
        text: "Voluptas cupiditate quis recusandae voluptatem.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-11T10:05:23.000Z",
        updatedAt: "2021-11-11T10:05:23.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$xEbKWnT5y.QvXUsG7auSEOXqFADhJ4.Jf8FPbcGZY3sgvgJHGHJyG",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-11T10:05:23.000Z",
          updatedAt: "2021-11-11T10:05:23.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  methods: {
    fetchRestaurant() {
      const { restaurant } = dummyData
      const { id, name, Category, Comments, viewCounts } = restaurant
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts
      }
    }
  },
  created() {
    this.fetchRestaurant()
  }
};
</script>