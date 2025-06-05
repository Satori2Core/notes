<template>
  <div v-if="updateTime" class="last-updated">
    <span class="label">{{ label }}</span>
    <time :datetime="isoTime">{{ formattedTime }}</time>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '最后更新于'
    }
  },
  
  computed: {
    updateTime() {
      return this.$page.lastUpdated;
    },
    
    formattedTime() {
      if (!this.updateTime) return '';
      
      const date = new Date(this.updateTime);
      const y = date.getFullYear();
      const m = (date.getMonth() + 1).toString().padStart(2, '0');
      const d = date.getDate().toString().padStart(2, '0');
      const h = date.getHours().toString().padStart(2, '0');
      const min = date.getMinutes().toString().padStart(2, '0');
      
      return `${y}/${m}/${d} ${h}:${min}`;
    },
    
    isoTime() {
      return this.updateTime ? new Date(this.updateTime).toISOString() : '';
    }
  }
};
</script>

<style scoped>
.last-updated {
  margin-top: 1.8rem;
  padding-top: 0.8rem;
  border-top: 1px dashed #eaecef;
  font-size: 0.85rem;
  color: #666;
  font-family: monospace;
}

.last-updated .label {
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .last-updated {
    color: #a3a3a3;
    border-top-color: #3a3a3a;
  }
}
</style>