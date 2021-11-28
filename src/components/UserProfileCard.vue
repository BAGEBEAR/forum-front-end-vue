<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ profile.name }}</h5>
        <p class="card-text">{{ profile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ UserCommentedCount }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ UserFavoritedCount }}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{ UserFollowingsCount }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ UserFollowersCount }}</strong> followers (追隨者)
          </li>
        </ul>
        <p></p>
        <template v-if="isCurrentUser">
          <router-link
            :to="{ name: 'user-edit', params: { id: profile.id}}"
            class="btn btn-primary"
          >
            Edit
          </router-link>
        </template>
        <template v-else>
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
        </template>

        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

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
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      require: true,
    }
  },
  data() {
    return {
      currentUser: {},
      isFollowed: this.initialIsFollowed,
      UserCommentedCount: 0,
      UserFavoritedCount: 0,
      UserFollowersCount: 0,
      UserFollowingsCount: 0,
    };
  },
  watch: {
    isAuthenticated(newValue) {
      this.isAuthenticated = newValue;
    },
  },
  methods: {
    fetchUser() {
      this.UserCommentedCount = this.profile.Comments.length;
      this.UserFavoritedCount = this.profile.FavoritedRestaurants.length;
      this.UserFollowersCount = this.profile.Followers.length;
      this.UserFollowingsCount = this.profile.Followings.length;
    },
    async addFollowing({ userId }) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤使用者，請稍後再試",
        });
      }
    },

    async deleteFollowing({ userId }) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤使用者，請稍後再試",
        });
      }
    },
  },
};
</script>