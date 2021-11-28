<template>
  <div class="container py-5">
    <ReataurantDetail :initialRestaurant="restaurant" />
    <hr />
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <CreateComment
      :restaurant-id="restaurant.id"
      @acter-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import ReataurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";

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
    updatedAt: "2021-11-14T04:33:55.063Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-11T10:05:23.000Z",
      updatedAt: "2021-11-11T10:05:23.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true
};

export default {
  name: "Restaruant",
  components: {
    ReataurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        Comments,
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };
      this.restaurantComments = Comments;
    },
    afterDeleteComment(commentId) {
      console.log("afterDeleteComment", commentId);
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log("payload", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        restaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      });
    },
  },
};
</script>