<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile.name}}</h5>
        <p class="card-text">{{profile.email}}</p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{UserCommentedCount}}</strong> 已評論餐廳</li>
          <li><strong>{{UserFavoritedCount}}</strong> 收藏的餐廳</li>
          <li><strong>{{UserFollowingsCount}}</strong> followings (追蹤者)</li>
          <li><strong>{{UserFollowersCount}}</strong> followers (追隨者)</li>
        </ul>
        <p></p>
        <form action="/following/2" method="POST" style="display: contents">
          <button
            v-if="isFollowed"
            @click.stop.prevent="deleteFollowing"
            type="submit"
            class="btn btn-danger btn-border"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.stop.prevent="addFollowing"
            type="submit"
            class="btn btn-primary btn-border"
          >
            追蹤
          </button>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentUser: {},
      isAuthenticated: false,
      isFollowed: this.initialIsFollowed,
      UserCommentedCount: 0,
      UserFavoritedCount: 0,
      UserFollowersCount: 0,
      UserFollowingsCount: 0
    };
  },
  methods: {
    fetchUser() {
      this.isAuthenticated = dummyUser.isAuthenticated;
      this.UserCommentedCount = this.profile.Comments.length
      this.UserFavoritedCount = this.profile.FavoritedRestaurants.length
      this.UserFollowersCount = this.profile.Followers.length
      this.UserFollowingsCount = this.profile.Followings.length
      
    },
    addFollowing() {
      this.isFollowed = true
    },
    deleteFollowing() {
      this.isFollowed = false
    },
  },
  created() {
    this.fetchUser()
  }
};
</script>