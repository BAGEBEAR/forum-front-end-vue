<template>
  <div class="container py-5">
    <form  @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="profile.name"
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
          :src="profile.image" 
          class="d-block img-thumbnail mb-3"
          width="200"  
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$gcq3aK0/zBE4bIu4lSDFwe61oqYZMiGbTzvbR7DkW31XPsX2rfe.S",
    isAdmin: true,
    image: "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
  },
};

export default {
  data() {
    return {
      initialProfile: {
        name: "",
        image: "",
      },
      profile: {
        ...this.initialProfile
      }
    };
  },
  methods: {
    fetchUser(userId) {
      console.log("fetch user id:", userId)
      const { profile } = dummyData;
      this.profile = {
        ...this.initialProfile,
        name: profile.name,
        image: profile.image,
      }
    },
    handleFileChange(e) {
      const {files} = e.target
      if(files.length === 0) {
        this.profile.image=''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        console.log(imageURL)
        this.profile.image = imageURL}
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>