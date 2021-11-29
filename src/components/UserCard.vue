<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image" width="140px" height="140px" />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ 0 || user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="unFollow(user.id)"
        type="button"
        class="btn tn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="follow(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";


export default {
  props: {
    initialUser: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async follow( userId ) {
      try{
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.user = {
        ...this.user,
        followerCount: this.user.FollowerCount + 1,
        isFollowed: true,
      };
      } catch(error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者",
        });
      }
      
    },
    
    async unFollow( userId ) {
      try{
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.user = {
        ...this.user,
        followerCount: this.user.FollowerCount - 1,
        isFollowed: false,
      };
      } catch(error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤使用者",
        });
      }
      
    },
  },
};
</script>