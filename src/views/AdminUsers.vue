<template>
  <div class="container py-5">
    <AdminNav />
    <!-- AdminNav Component -->

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>
            {{ user.isAdmin ? "admin" : "user" }}
          </td>
          <td>
            <button
              v-show="!user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUser({userId:user.id, isAdmin: user.isAdmin})"
            >
              set as Admin
            </button>
            <button
              v-show="user.isAdmin"
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUser({userId:user.id, isAdmin: user.isAdmin})"
            >
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者列表，請稍後再試",
        });
      }
    },

    async toggleUser({userId, isAdmin}) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });

        console.log(data)
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }
          return user;
        });

      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更改使用者權限，請稍後再試",
        });
      }
    },
  },

  created() {
    this.fetchUsers();
  },
};
</script>