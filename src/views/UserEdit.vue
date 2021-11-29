<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: 0,
      image: "",
      name: "",
      email: "",
      isProcessing: false,
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  beforeRouteUpdate(to, from, next) {
    if(this.currentUser.id === -1) return
    const { id } = to.params
    this.setUser(id)
    next()
  },

  watch: {
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },

  methods: {
    async setUser(userId) {
      try {
        const { id, image, name, email } = this.currentUser;

        if (id.toString() !== userId.toString()) {
          console.log('id=', id, ' userId=', userId)
          this.$router.push({ name: "not-found" });
        }

        this.id = id;
        this.name = name;
        this.image = image;
        this.email = email;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        console.log(imageURL);
        this.image = imageURL;
      }
    },

    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "請填寫使用者名稱",
          });
          return;
        }

        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.update({ userId: this.id, formData });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.isProcessing = false;
        this.$router.push({ name: "users-profile", params: { id: this.id } });

      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法編輯使用者資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
};
</script>