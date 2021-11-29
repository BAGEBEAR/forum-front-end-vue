<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <UserProfileCard 
          :user="profile" 
          :initialIsFollowed="isFollowed" 
          :isCurrentUser="isCurrentUser"
        />
      </div>

      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :Followings="profile.Followings" />
          <br />
          <UserFollowersCard :Followers="profile.Followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :Comments="profile.Comments" />
          <br />
          <UserFavoritedRestaurantsCard
            :FavoritedRestaurants="profile.FavoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from 'vuex'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },

  data() {
    return {
      profile: {
        id: "",
        name: "",
        email: "",
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
      isCurrentUser: false,
    };
  },

  computed: {
    ... mapState(['currentUser', 'isAuthenticated'])
    
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        const { profile, isFollowed } = data;

        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;

        this.profile = {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        };

        this.isFollowed = isFollowed;

        if( this.profile.id === this.currentUser.id) {
          this.isCurrentUser = true
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },

  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },

  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
};
</script>