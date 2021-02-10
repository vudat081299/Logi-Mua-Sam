<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text>{{ content }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('hide')"
          >
            Báo lỗi
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('hide')"
          >
            Đóng
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'NotificationDialog',
  props: ['dialog', 'title', 'content'],
  data () {
    return {
    }
  }
}
</script>
